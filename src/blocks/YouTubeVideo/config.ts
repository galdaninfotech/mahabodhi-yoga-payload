import type { Block } from 'payload'

export const YouTubeVideoBlock: Block = {
  slug: 'youTubeVideo',
  imageURL: '/images/blocks/youTubeVideo.jpg',
  imageAltText: 'Thumbnail for youTubeVideo block',
  interfaceName: 'YouTubeVideoBlock',
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enabled',
      defaultValue: true, // Default to true so existing blocks are visible
    },
    {
      name: 'videoId',
      type: 'text',
      label: 'Video ID',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'className',
      type: 'text',
      label: 'CSS Class Name',
    },
  ],
}