import { defineCollection, z } from 'astro:content';

const articulosCollection = defineCollection({
  type: 'data', // Especificamos que usaremos JSON
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    slug: z.string(),
    imagen: z.string().optional(),
    autor: z.string().optional(),
    content: z.string(),
    categorias: z.string().array().optional(),
  })
});

export const collections = {
  'articulos': articulosCollection,
};