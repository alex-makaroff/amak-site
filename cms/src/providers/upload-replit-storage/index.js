"use strict";

const { Client } = require("@replit/object-storage");
const crypto = require("crypto");

const UPLOAD_PREFIX = "uploads";

let clientInstance = null;

function getClient() {
  if (!clientInstance) {
    clientInstance = new Client();
  }
  return clientInstance;
}

function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(chunks)));
    stream.on("error", reject);
  });
}

module.exports = {
  init(config) {
    const client = getClient();

    const getObjectName = (file) => {
      const fileName = file.hash
        ? `${file.hash}${file.ext}`
        : `${crypto.randomUUID()}${file.ext || ""}`;
      return `${UPLOAD_PREFIX}/${fileName}`;
    };

    return {
      async upload(file) {
        const objectName = getObjectName(file);

        let buffer;
        if (file.buffer) {
          buffer = file.buffer;
        } else if (file.stream) {
          buffer = await streamToBuffer(file.stream);
        } else {
          throw new Error("File has no stream or buffer to upload");
        }

        const result = await client.uploadFromBytes(objectName, buffer, {
          contentType: file.mime,
        });
        if (!result || !result.ok) {
          throw new Error(`Cloud upload failed: ${result?.error || "unknown error"}`);
        }

        file.url = `/${objectName}`;
        file.provider_metadata = {
          object: objectName,
        };
      },

      async uploadStream(file) {
        return this.upload(file);
      },

      async delete(file) {
        if (!file.provider_metadata || !file.provider_metadata.object) {
          return;
        }
        try {
          const result = await client.delete(file.provider_metadata.object);
          if (result && !result.ok) {
            console.warn(`Failed to delete file from cloud storage: ${result.error}`);
          }
        } catch (err) {
          console.warn(`Failed to delete file from cloud storage: ${err.message}`);
        }
      },

      isPrivate() {
        return false;
      },

      async getSignedUrl(file) {
        return { url: file.url };
      },
    };
  },
};
