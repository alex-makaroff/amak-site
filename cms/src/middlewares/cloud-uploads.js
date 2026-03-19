"use strict";

const { Client } = require("@replit/object-storage");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");

let clientInstance = null;

function getClient() {
  if (!clientInstance) {
    clientInstance = new Client();
  }
  return clientInstance;
}

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const reqMethod = ctx.method;
    const reqPath = ctx.path;

    if ((reqMethod !== "GET" && reqMethod !== "HEAD") || !reqPath.startsWith("/uploads/")) {
      return next();
    }

    try {
      const client = getClient();
      const fileName = reqPath.replace("/uploads/", "");
      const objectName = `uploads/${fileName}`;

      const existsResult = await client.exists(objectName);
      if (!existsResult.ok || !existsResult.value) {
        return next();
      }

      const tmpFile = path.join(os.tmpdir(), `cloud-dl-${crypto.randomBytes(8).toString("hex")}`);

      try {
        const downloadResult = await client.downloadToFilename(objectName, tmpFile);
        if (!downloadResult || !downloadResult.ok) {
          return next();
        }

        const buffer = fs.readFileSync(tmpFile);

        const ext = fileName.split(".").pop()?.toLowerCase();
        const mimeTypes = {
          jpg: "image/jpeg",
          jpeg: "image/jpeg",
          png: "image/png",
          gif: "image/gif",
          webp: "image/webp",
          svg: "image/svg+xml",
          avif: "image/avif",
          ico: "image/x-icon",
          pdf: "application/pdf",
          mp4: "video/mp4",
          webm: "video/webm",
        };

        ctx.set("Content-Type", mimeTypes[ext] || "application/octet-stream");
        ctx.set("Cache-Control", "public, max-age=31536000, immutable");
        ctx.set("Content-Length", String(buffer.length));

        ctx.status = 200;
        ctx.body = buffer;
      } finally {
        try { fs.unlinkSync(tmpFile); } catch {}
      }
    } catch (err) {
      strapi.log.warn(`Cloud uploads middleware error: ${err.message}`);
      return next();
    }
  };
};
