/** @format */

import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public'
    }
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'portfolio',
        label: 'Portfolio',
        path: 'src/content/portfolio',
        format: 'mdx',
        ui: {
          filename: {
            slugify: values => {
              // Generate slug from title
              return `${values?.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`
            }
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'string',
            name: 'category',
            label: 'Category',
            required: true,
            options: ['Wedding', 'Corporate Event', 'Portrait', 'Commercial'],
            ui: {
              component: 'select'
            }
          },
          {
            type: 'string',
            name: 'client',
            label: 'Client Name',
            required: true
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Project Date',
            required: true
          },
          {
            type: 'string',
            name: 'coverImage',
            label: 'Cover Image URL',
            required: true
          },
          {
            type: 'string',
            name: 'shortDescription',
            label: 'Short Description',
            required: true,
            ui: {
              component: 'textarea'
            }
          },
          {
            type: 'string',
            name: 'services',
            label: 'Services Provided',
            list: true
          },
          {
            type: 'string',
            name: 'duration',
            label: 'Project Duration',
            required: true
          },
          {
            type: 'string',
            name: 'gallery',
            label: 'Gallery Images',
            list: true
          },
          {
            type: 'string',
            name: 'videoUrl',
            label: 'Video URL (optional)'
          },
          {
            type: 'object',
            name: 'testimonial',
            label: 'Testimonial',
            fields: [
              {
                type: 'string',
                name: 'text',
                label: 'Testimonial Text',
                required: true,
                ui: {
                  component: 'textarea'
                }
              },
              {
                type: 'string',
                name: 'author',
                label: 'Testimonial Author',
                required: true
              }
            ]
          },
          {
            type: 'boolean',
            name: 'featured',
            label: 'Featured Project'
          },
          {
            type: 'boolean',
            name: 'pinnedToHomepage',
            label: 'Pin to Homepage'
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Content',
            isBody: true,
            templates: [
              {
                name: 'image',
                label: 'Image',
                fields: [
                  {
                    name: 'src',
                    label: 'Image URL',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'alt',
                    label: 'Alt Text',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'blog',
        label: 'Blog',
        path: 'src/content/blog',
        format: 'mdx',
        ui: {
          filename: {
            slugify: values => {
              // Generate slug from title
              return `${values?.title
                ?.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')}`
            }
          }
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'object',
            name: 'author',
            label: 'Author',
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Name',
                required: true
              },
              {
                type: 'string',
                name: 'url',
                label: 'Avatar URL'
              }
            ]
          },
          {
            type: 'object',
            name: 'image',
            label: 'Featured Image',
            fields: [
              {
                type: 'string',
                name: 'url',
                label: 'Image URL',
                required: true
              },
              {
                type: 'string',
                name: 'alt',
                label: 'Alt Text',
                required: true
              }
            ]
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true
          },
          {
            type: 'string',
            name: 'likes',
            label: 'Likes Count',
            description: 'Display likes count (e.g., "2.4k")'
          },
          {
            type: 'string',
            name: 'comments',
            label: 'Comments Count',
            description: 'Display comments count (e.g., "87")'
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              {
                name: 'image',
                label: 'Image',
                fields: [
                  {
                    name: 'src',
                    label: 'Image URL',
                    type: 'string',
                    required: true
                  },
                  {
                    name: 'alt',
                    label: 'Alt Text',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
})
