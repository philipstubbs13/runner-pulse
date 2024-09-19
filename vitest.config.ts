import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      enabled: true,
      reporter: ["text", "json-summary", "json", "html"],
    },
    environment: "jsdom",
    globals: true,
    mockReset: true,
    setupFiles: "setupTests",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
