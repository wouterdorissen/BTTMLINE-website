import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog / inzichten. Add a new .md file under src/content/inzichten/ to publish
// another article — it shows up on /inzichten and gets its own /inzichten/<slug> route.
const inzichten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/inzichten' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Demystifying AI', 'Praktijk', 'Niet alles is AI']),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { inzichten };
