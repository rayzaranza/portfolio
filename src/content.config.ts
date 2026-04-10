import { glob } from "astro/loaders";
import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/projects",
  }),
  schema: z.object({
    title: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    tags: z.array(z.string()),
    slug: z.string(),
  }),
});

export const collections = { projects };
