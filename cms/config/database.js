module.exports = ({ env }) => {
  const url = new URL(env("DATABASE_URL"));
  const isProduction = env("NODE_ENV") === "production";
  return {
    connection: {
      client: "postgres",
      connection: {
        host: url.hostname,
        port: parseInt(url.port, 10),
        database: url.pathname.slice(1),
        user: url.username,
        password: decodeURIComponent(url.password),
        ssl: isProduction ? { rejectUnauthorized: false } : false,
      },
      pool: {
        min: 0,
        max: 5,
      },
    },
  };
};
