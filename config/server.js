module.exports = ({ env }) => ({
  host: env("HOST", "strapi-production-7520.up.railway.app"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
