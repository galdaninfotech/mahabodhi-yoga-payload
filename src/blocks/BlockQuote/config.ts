import type { Block } from 'payload'

export const BlockQuote: Block = {
  slug: 'blockQuote',
  imageURL: '/images/blocks/blockQuote.jpg',
  imageAltText: 'Thumbnail for blockQuote block',
  interfaceName: 'BlockQuoteBlock',
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
        name: 'description',
        type: 'text',
      },
      {
        name: 'quote',
        type: 'text',
      },
      {
        name: 'author',
        type: 'text',
      },
  ],
}