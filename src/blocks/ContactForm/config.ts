import type { Block } from 'payload'

export const ContactForm: Block = {
  slug: 'contactForm',
  imageURL: '/images/blocks/contactForm.jpg',
  imageAltText: 'Thumbnail for contactForm block',
  interfaceName: 'ContactFormBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
      },
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'subtitle',
        type: 'text',
      },
      {
        name: 'description',
        type: 'text',
      },
  ],
}