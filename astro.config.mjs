/** @format */

// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://pixels.vikshan.me',
  output: 'server', // Enable server-side rendering for Keystatic
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    mdx(),
    sitemap({
      filter: page => !page.includes('/booking') // Exclude booking page from sitemap if needed
    }),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
})
