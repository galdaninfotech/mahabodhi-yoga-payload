import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  imageURL: '/images/blocks/gallery.jpg',
  imageAltText: 'Thumbnail for gallery block',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true, // Default to true so existing blocks are visible
    },
    {
      name: 'images',
      type: 'array',
      admin: {
            initCollapsed: true,
        },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}