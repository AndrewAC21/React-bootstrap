import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});

/* export default defineConfig({
root: path.resolve(__dirname, 'src'),
resolve: {
  alias: {
     '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
  }
}
}); */
