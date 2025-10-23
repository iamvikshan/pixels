/** @format */

import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'iamvikshan/pixels'
  },
  collections: {
    portfolio: collection({
      label: 'Portfolio',
      slugField: 'title',
      path: 'src/content/portfolio/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Wedding', value: 'Wedding' },
            { label: 'Corporate Event', value: 'Corporate Event' },
            { label: 'Portrait', value: 'Portrait' },
            { label: 'Commercial', value: 'Commercial' }
          ],
          defaultValue: 'Portrait'
        }),
        client: fields.text({
          label: 'Client Name',
          validation: { isRequired: true }
        }),
        date: fields.date({
          label: 'Project Date',
          validation: { isRequired: true }
        }),
        coverImage: fields.url({
          label: 'Cover Image URL',
          validation: { isRequired: true }
        }),
        shortDescription: fields.text({
          label: 'Short Description',
          multiline: true,
          validation: { isRequired: true }
        }),
        services: fields.array(fields.text({ label: 'Service' }), {
          label: 'Services Provided',
          itemLabel: props => props.value || 'Service'
        }),
        duration: fields.text({
          label: 'Project Duration',
          validation: { isRequired: true }
        }),
        gallery: fields.array(fields.url({ label: 'Image URL' }), {
          label: 'Gallery Images',
          itemLabel: props => props.value || 'Image'
        }),
        videoUrl: fields.url({
          label: 'Video URL (optional)',
          validation: { isRequired: false }
        }),
        testimonial: fields.object({
          text: fields.text({
            label: 'Testimonial Text',
            multiline: true,
            validation: { isRequired: true }
          }),
          author: fields.text({
            label: 'Testimonial Author',
            validation: { isRequired: true }
          })
        }),
        featured: fields.checkbox({
          label: 'Featured Project',
          defaultValue: false
        }),
        pinnedToHomepage: fields.checkbox({
          label: 'Pin to Homepage',
          defaultValue: false
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: props => props.value || 'Tag'
        }),
        content: fields.document({
          label: 'Content',
          description: 'Detailed project description and story',
          formatting: true,
          dividers: true,
          links: true,
          images: true
        })
      }
    })
  }
})
