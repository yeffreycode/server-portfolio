import dotenv from "dotenv";
dotenv.config();
const config = {
  WEBHOOK_URL: process.env.WEBHOOK_URL || "",
  origin: process.env.ORIGIN || "*",
  PORT: process.env.PORT || 4000,
};
export default config;
