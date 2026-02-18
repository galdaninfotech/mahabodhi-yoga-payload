import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type PageArgs = {
  heroImage: Media
  metaImage: Media
}

export const internationalFestivalPageData: (
  args: PageArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    slug: 'international-festival-of-yoga-and-meditation',
    _status: 'published',
    hero: {
      type: 'lowImpact',
      media: heroImage.id,
    },
    layout: [
      {
        enabled: true,
        blockName: 'Content With Media',
        blockType: 'contentWithMedia',
        title: 'International Festival',
        subtitle: 'Sambodhi Retreat Centre',
        content: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Experience the transformative energy of the International Yoga Festival at Mahabodhi International Meditation Centre, Ladakh—a celebration of holistic well-being, unity, and ancient yogic wisdom set against the majestic Himalayas. Gather with renowned yoga teachers, spiritual guides, and global participants for an inspiring journey through asana sessions, meditation workshops, and wellness talks tailored to every skill level. Festival highlights include sunrise yoga in tranquil mountain air, mindfulness workshops, cultural walks, and interactive sessions that foster inner peace and global harmony.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Celebrate the diversity of yogic traditions while embracing the healing spirit of Ladakh. The festival is designed to rejuvenate body and mind, ignite personal growth, and offer a life-changing retreat in the serene lap of nature at the Mahabodhi Devachan campus. Whether you are a seeker, an experienced yogi, or simply curious, the International Yoga Festival invites you to immerse yourself in moments that matter, begin your journey to self-discovery, and escape into pure mountain cabin bliss.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
              },
            ],
            direction: 'ltr',
          },
        },
      },
    ],
    meta: {
      description: 'International Festival Of Yoga & Meditation',
      image: heroImage.id,
      title: 'International Festival Of Yoga & Meditation',
    },
    title: 'International Festival Of Yoga & Meditation',
  }
}
