import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { join } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/components/**/*", "src/app/**/*", "src/hooks/**/*"],
      exclude: [
        "src/**/*.config.*", // Exclude config files
      ],
    },
  },
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
