import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// El idioma se codifica en carpetas (es/, en/, fr/) y también en el frontmatter
// para que las páginas puedan filtrar entradas sin depender del nombre del archivo.
const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['es', 'en', 'fr']),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { guides };
