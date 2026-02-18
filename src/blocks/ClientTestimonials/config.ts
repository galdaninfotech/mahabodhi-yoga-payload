import type { Block } from 'payload'

export const ClientTestimonials: Block = {
  slug: 'clientTestimonials',
  imageURL: '/images/blocks/clientTestimonials.jpg',
  imageAltText: 'Thumbnail for clientTestimonials block',
  interfaceName: 'ClientTestimonialsBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
      },
      {
        name: 'testimonials',
        type: 'array',
        admin: {
            initCollapsed: true,
        },
        fields: [
            {
                name: 'title',
                type: 'text',
            },
            {
                name: 'content',
                type: 'text',
            },
            {
                name: 'author',
                type: 'text',
            },
        ],
      },
  ],
}