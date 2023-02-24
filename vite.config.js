import { defineConfig } from "vite";
import path from "path";

export default {
   root: path.resolve(__dirname, 'src'),
  publicDir: "public",
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  assetsInclude: ['./public/*.[jpg, webp]'],

  }

/* export default defineConfig({
root: path.resolve(__dirname, 'src'),
resolve: {
  alias: {
     '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
  }
}
}); */
