/** @format */

import { defineCollection, z } from 'astro:content'

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Wedding', 'Corporate Event', 'Portrait', 'Commercial']),
    client: z.string(),
    date: z.date(),
    coverImage: z.string().url(),
    shortDescription: z.string(),
    services: z.array(z.string()),
    duration: z.string(),
    gallery: z.array(z.string().url()),
    videoUrl: z.string().url().optional().nullable(),
    testimonial: z.object({
      text: z.string(),
      author: z.string()
    }),
    featured: z.boolean().default(false),
    pinnedToHomepage: z.boolean().default(false),
    tags: z.array(z.string()).optional().default([])
  })
})

export const collections = {
  portfolio: portfolioCollection
}
