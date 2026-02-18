import type { Block } from 'payload'

export const ListTwo: Block = {
  slug: 'listTwo',
  imageURL: '/images/blocks/listTwo.jpg',
  imageAltText: 'Thumbnail for listTwo block',
  interfaceName: 'ListTwoBlock',
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