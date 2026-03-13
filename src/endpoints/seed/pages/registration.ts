import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  mediaMap: Record<string, Media>
  contactForm?: any
}
export const mainRegistrationPageData = ({
  mediaMap,
}: PageArgs): RequiredDataFromCollectionSlug<'pages'> => {

  console.log('Seeding register page data...')

  return {
    slug: 'register',
    _status: 'published',
    hero: {
      type: 'lowImpact',
    },
    layout: [
      // {
      //   blockName: null,
      //   blockType: 'mediaBlock',
      //   media: mediaMap['register.jpg'],
      // },
      {
        blockType: 'registrationForm',
        enabled: true,
        title: 'Registration',
        description: 'Join us for our upcoming courses and retreats.'
      },
    ],
    meta: {
      description: 'Register for courses and retreats',
      // image: mediaMap['register.jpg'],
      title: 'Registration',
    },
    title: 'Registration',
  }
}
