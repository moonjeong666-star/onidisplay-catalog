export default {
  async fetch(request, env) {

    const authorization = request.headers.get("Authorization");

    if (!authorization || !authorization.startsWith("Basic ")) {
      return requireLogin();
    }

    try {
      const encoded = authorization.slice(6);
      const decoded = atob(encoded);

      const separator = decoded.indexOf(":");

      if (separator === -1) {
        return requireLogin();
      }

      const username = decoded.slice(0, separator);
      const password = decoded.slice(separator + 1);

      if (
        username !== "oniadmin" ||
        password !== "ONI2026test"
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
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ONI Private Catalog"',
      "Cache-Control": "no-store"
    }
  });
}