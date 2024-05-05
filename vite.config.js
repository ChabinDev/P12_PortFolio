import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/P12_PortFolio/",
  plugins: [react()],
  define: {
    SERVICE_ID: `"${process.env.SERVICE_ID}"`,
    TEMPLATE_ID: `"${process.env.TEMPLATE_ID}"`,
    PUBLIC_KEY: `"${process.env.PUBLIC_KEY}"`,
  },
});
