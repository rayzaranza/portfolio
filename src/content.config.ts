import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      alt: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      year: z.number(),
      github: z.url().optional(),
      website: z.url().optional(),
    }),
});

export const collections = { projects };
