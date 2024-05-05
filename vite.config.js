import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/P12_PortFolio/",
  plugins: [react()],
  define: {
    __SERVICE_ID__:`"${process.env.SERVICE_ID}"`,
  },
});
