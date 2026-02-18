import type { Block } from 'payload'

export const ParagraphOne: Block = {
  slug: 'paragraphOne',
  imageURL: '/images/blocks/paragraphOne.jpg',
  imageAltText: 'Thumbnail for paragraphOne block',
  interfaceName: 'ParagraphOneBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
      },
      {
        name: 'content',
        type: 'textarea',
      },
  ],
}