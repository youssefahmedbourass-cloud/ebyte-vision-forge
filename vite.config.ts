import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [],
  },
  // Override nitro to target Node.js instead of Cloudflare
  nitro: {
    preset: "node-server",
  },
});
