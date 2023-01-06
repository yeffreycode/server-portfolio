import dotenv from "dotenv";
dotenv.config();
const config = {
  WEBHOOK_URL: process.env.WEBHOOK_URL || "",
  origin: process.env.ORIGIN,
};
export default config;
