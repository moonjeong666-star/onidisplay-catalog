const PUBLIC_BASE_PATH = "/customer";
const LOGIN_REALM = "ONI Private Catalog";

export default {
  async fetch(request, env) {
    /*
     * 从 Cloudflare Secrets 获取重要信息
     */
    const username = env.BASIC_AUTH_USERNAME;
    const password = env.BASIC_AUTH_PASSWORD;
    const publicToken = env.PUBLIC_ACCESS_TOKEN;

    /*
     * 检查 Cloudflare 变量是否完整
     */
    if (
      !username ||
      !password ||
      !publicToken
    ) {
      return configurationError();
    }

    /*
     * 二维码访问码只能包含：
     * 字母、数字、短横线、下划线
     * 长度必须为32～128位
     */
    if (
      !/^[A-Za-z0-9_-]{32,128}$/.test(
        publicToken
      )
    ) {
      return configurationError();
    }

    const url = new URL(request.url);

    const publicPrefix =
      `${PUBLIC_BASE_PATH}/${publicToken}`;

    /*
     * 自动补充末尾斜杠
     */
    if (url.pathname === publicPrefix) {
      const redirectUrl = new URL(request.url);

      redirectUrl.pathname =
        `${publicPrefix}/`;

      return Response.redirect(
        redirectUrl.toString(),
        302
      );
    }

    /*
     * 二维码专用地址跳过登录验证
     */
    if (
      url.pathname.startsWith(
        `${publicPrefix}/`
      )
    ) {
      const assetUrl = new URL(request.url);

      /*
       * 路径转换：
       *
       * /customer/访问码/
       * 转换为 /
       *
       * /customer/访问码/assets/...
       * 转换为 /assets/...
       */
      assetUrl.pathname =
        url.pathname.slice(
          publicPrefix.length
        ) || "/";

      const response =
        await env.ASSETS.fetch(
          new Request(
            assetUrl.toString(),
            request
          )
        );

      /*
       * 减少二维码网址被浏览器引用信息泄露
       */
      const headers =
        new Headers(response.headers);

      headers.set(
        "Referrer-Policy",
        "no-referrer"
      );

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    }

    /*
     * 普通网址继续执行登录验证
     */
    const authorization =
      request.headers.get("Authorization");

    if (
      !authorization ||
      !authorization.startsWith("Basic ")
    ) {
      return requireLogin();
    }

    try {
      const encoded =
        authorization.slice(6);

      const decoded = atob(encoded);

      const separator =
        decoded.indexOf(":");

      if (separator === -1) {
        return requireLogin();
      }

      const submittedUsername =
        decoded.slice(0, separator);

      const submittedPassword =
        decoded.slice(separator + 1);

      if (
        submittedUsername !== username ||
        submittedPassword !== password
      ) {
        return requireLogin();
      }

      return env.ASSETS.fetch(request);
    } catch {
      return requireLogin();
    }
  }
};

function requireLogin() {
  return new Response(
    "Authentication required.",
    {
      status: 401,
      headers: {
        "Content-Type":
          "text/plain; charset=UTF-8",

        "WWW-Authenticate":
          `Basic realm="${LOGIN_REALM}"`,

        "Cache-Control": "no-store"
      }
    }
  );
}

function configurationError() {
  return new Response(
    "Server configuration error.",
    {
      status: 503,
      headers: {
        "Content-Type":
          "text/plain; charset=UTF-8",

        "Cache-Control": "no-store"
      }
    }
  );
}