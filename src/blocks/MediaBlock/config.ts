import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  imageURL: '/images/blocks/mediaBlock.jpg',
  imageAltText: 'Thumbnail for mediaBlock block',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
