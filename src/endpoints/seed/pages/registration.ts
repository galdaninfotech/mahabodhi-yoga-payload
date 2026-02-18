import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const mainRegistrationPageData = ({
  heroImage,
  metaImage,
}: PageArgs): RequiredDataFromCollectionSlug<'pages'> => {
  return {
    slug: 'register',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        blockType: 'registrationForm',
        enabled: true,
        title: 'Registration',
        description: 'Join us for our upcoming courses and retreats.'
      },
    ],
    meta: {
      description: 'Register for courses and retreats',
      image: heroImage.id,
      title: 'Registration',
    },
    title: 'Registration',
  }
}
