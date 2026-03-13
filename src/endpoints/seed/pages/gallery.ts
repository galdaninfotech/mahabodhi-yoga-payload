import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
  contactForm?: any
}
export const galleryPageData = ({
  mediaMap,
}: PageArgs): RequiredDataFromCollectionSlug<'pages'> => {

  console.log('Seeding gallery page data...')

  return {
    slug: 'gallery',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      {
        blockType: 'gallery',
        enabled: true,
        images: [
            {
                image: mediaMap['gallery-image1.jpg'],
            },
            {
                image: mediaMap['gallery-image2.jpg'],
            },
            {
                image: mediaMap['gallery-image3.jpg'],
            },
            {
                image: mediaMap['gallery-image4.jpg'],
            },
            {
                image: mediaMap['gallery-image5.jpg'],
            },
            {
                image: mediaMap['gallery-image6.jpg'],
            },
            {
                image: mediaMap['gallery-image7.jpg'],
            },
            {
                image: mediaMap['gallery-image8.jpg'],
            },
            {
                image: mediaMap['gallery-image9.jpg'],
            },
            {
                image: mediaMap['gallery-image10.jpg'],
            },
            {
                image: mediaMap['gallery-image11.jpg'],
            },
            {
                image: mediaMap['gallery-image12.jpg'],
            },
        ]
      },
    ],
    meta: {
      description: 'Gallery',
      // image: mediaMap['image1.jpg'],
      title: 'Gallery',
    },
    title: 'Gallery',
  }
}
