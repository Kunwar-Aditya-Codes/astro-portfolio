import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    url: z.string(),
    hero: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
