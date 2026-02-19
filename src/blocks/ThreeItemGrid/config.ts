import type { Block } from 'payload'

export const ThreeItemGrid: Block = {
  slug: 'threeItemGrid',
  imageURL: '/images/blocks/threeItemGrid.jpg',
  imageAltText: 'Thumbnail for threeItemGrid block',
  fields: [
    {
      name: 'products',
      type: 'relationship',
      admin: {
        isSortable: true,
      },
      hasMany: true,
      label: 'Programmes to show',
      maxRows: 3,
      minRows: 3,
      relationTo: 'products',
    },
  ],
  interfaceName: 'ThreeItemGridBlock',
  labels: {
    plural: 'Three Item Grids',
    singular: 'Three Item Grid',
  },
}
