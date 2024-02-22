import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_FE_BASE || "/",
  plugins: [vue()],
});
