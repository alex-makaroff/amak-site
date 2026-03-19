"use strict";

const path = require("path");
const fs = require("fs");

module.exports = () => {
  const publicDir = path.resolve(__dirname, "../../public");

  return async (ctx, next) => {
    const isSpaRoute =
      ctx.method === "GET" &&
      !ctx.path.startsWith("/api") &&
      !ctx.path.startsWith("/admin") &&
      !ctx.path.startsWith("/uploads") &&
      !ctx.path.startsWith("/assets") &&
      !ctx.path.startsWith("/_health") &&
      !ctx.path.match(/\.\w+$/);

    if (isSpaRoute) {
      const indexPath = path.join(publicDir, "index.html");
      if (fs.existsSync(indexPath) && ctx.accepts("html")) {
        ctx.type = "text/html";
        ctx.body = fs.createReadStream(indexPath);
        ctx.status = 200;
        return;
      }
    }

    await next();
  };
};
