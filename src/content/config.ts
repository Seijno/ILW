import { defineCollection, z } from 'astro:content';

const sprints = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});
const WLW = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),
      tags: z.array(z.string()),
    }),
  });

export const collections = {
  sprints,
  WLW
};
