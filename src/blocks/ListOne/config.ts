import type { Block } from 'payload'

export const ListOne: Block = {
  slug: 'listOne',
  imageURL: '/images/blocks/listOne.jpg',
  imageAltText: 'Thumbnail for listOne block',
  interfaceName: 'ListOneBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'marginTop',
          type: 'text',
          defaultValue: '25px',
        },
        {
          name: 'marginLeft',
          type: 'text',
          defaultValue: '20px',
        },
        {
          name: 'space',
          type: 'text',
          defaultValue: '10px',
        },
      ],
    },
    {
      name: 'lists',
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
          type: 'textarea',
        }
      ]
    },
  ],
}