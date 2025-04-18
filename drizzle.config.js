
/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_XiNrpTYj29vL@ep-round-morning-a56cyxa8-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
};
