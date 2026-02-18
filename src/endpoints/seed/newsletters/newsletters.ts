import { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

export const welcomeNewsletterData = (heroImageId: number): RequiredDataFromCollectionSlug<'newsletters'> => ({
  title: 'Welcome to Sambodhi Retreat Centre',
  slug: 'welcome-to-sambodhi',
  _status: 'published',
  heroImage: heroImageId,
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Newsletter Vol. #1: Monthly Update.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h1',
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'We are delighted to have you with us. Stay tuned for our latest updates and events.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
})
