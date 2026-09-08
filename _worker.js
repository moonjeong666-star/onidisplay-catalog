const BASE = "/customer";

export default {
  async fetch(request, env) {
    const token = env.PUBLIC_ACCESS_TOKEN;

    if (!token || !/^[A-Za-z0-9_-]{32,128}$/.test(token)) {
      return new Response("Server configuration error.", {
        status: 503
      });
    }

    const url = new URL(request.url);
    const prefix = `${BASE}/${token}`;

    // 二维码链接：/customer/访问码
    if (url.pathname === prefix) {
      return Response.redirect(
        `${url.origin}${prefix}/`,
        302
      );
    }

    // 二维码链接：/customer/访问码/
    if (url.pathname.startsWith(`${prefix}/`)) {
      const target = new URL(request.url);

      target.pathname =
        url.pathname.slice(prefix.length) || "/";

      const response = await env.ASSETS.fetch(
        new Request(target, request)
      );

      const headers = new Headers(response.headers);
      headers.set("Referrer-Policy", "no-referrer");

      return new Response(response.body, {
        status: response.status,
        headers
      });
    }

    // 普通网页链接直接访问
    return env.ASSETS.fetch(request);
  }
};

