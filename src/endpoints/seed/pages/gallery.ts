import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const galleryPageData = ({
  heroImage,
  metaImage,
}: PageArgs): RequiredDataFromCollectionSlug<'pages'> => {
  return {
    slug: 'gallery',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        blockType: 'gallery',
        enabled: true,
        images: [
            {
                image: heroImage.id
            },
            {
                image: heroImage.id
            },
            {
                image: heroImage.id
            },
            {
                image: heroImage.id
            },
            {
                image: heroImage.id
            },
            {
                image: heroImage.id
            }
        ]
      },
    ],
    meta: {
      description: 'Gallery',
      image: heroImage.id,
      title: 'Gallery',
    },
    title: 'Gallery',
  }
}
