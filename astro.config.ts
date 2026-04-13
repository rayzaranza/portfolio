import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Geologica",
      cssVariable: "--font-family",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Geologica-Bold.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/Geologica-Medium.woff2"],
            weight: 500,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/Geologica-Regular.woff2"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],

  trailingSlash: "never",

  build: {
    format: "file",
  },

  adapter: cloudflare({ imageService: "cloudflare" }),
  integrations: [mdx()],
});