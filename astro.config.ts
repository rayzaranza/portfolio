import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  trailingSlash: "never",
  build: {
    format: "file",
  },
  adapter: cloudflare({ imageService: "cloudflare" }),
});
