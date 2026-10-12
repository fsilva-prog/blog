import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Sección "Norma y Proceso": artículos de derecho.
const derecho = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/derecho' }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    tema: z.string(),
    fecha: z.coerce.date(),
    lectura: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

// Sección "La luz, guardián del universo": el ensayo por entregas.
const ensayo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ensayo' }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string(),
    entrega: z.number(),
    parte: z.string(),
    fecha: z.coerce.date().optional(),
    lectura: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { derecho, ensayo };
