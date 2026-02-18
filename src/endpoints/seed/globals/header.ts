import { DataFromGlobalSlug, PayloadRequest } from 'payload'
import { getPageBySlug } from './utilities'

export const headerData = async ({ req }: { req: PayloadRequest }): Promise<Partial<DataFromGlobalSlug<'header'>>> => {
  const aboutPage = await getPageBySlug('pages', 'about', req)
  const facilitiesPage = await getPageBySlug('pages', 'facilities', req)
  const sambodhiRetreatCentrePage = await getPageBySlug('pages', 'sambodhi-retreat-centre', req)
  const guidelinesPage = await getPageBySlug('pages', 'guidelines', req)
  const instructorsPage = await getPageBySlug('pages', 'instructors', req)
  const historyPage = await getPageBySlug('pages', 'history-of-mahabodhi', req)
  const testimonialsPage = await getPageBySlug('pages', 'testimonials', req)
  
  const founderPage = await getPageBySlug('pages', 'about-the-founder', req)
  const backgroundPage = await getPageBySlug('pages', 'founder-background', req)
  const visionPage = await getPageBySlug('pages', 'founder-vision', req)
  const storyPage = await getPageBySlug('pages', 'founder-story', req)

  const coursesRetreatsPage = await getPageBySlug('pages', 'yoga-courses-and-retreats', req)
  const yogaCoursesPage = await getPageBySlug('pages', 'yoga-courses', req)
  const shangriLaRetreatPage = await getPageBySlug('pages', 'shangri-la-retreat', req)
  const internationalFestivalPage = await getPageBySlug('pages', 'international-festival-of-yoga-and-meditation', req)
  const customizedCoursesPage = await getPageBySlug('pages', 'yoga-customized-courses', req)

  const changspaCentrePage = await getPageBySlug('pages', 'changspa-centre', req)
  const regularYogaPage = await getPageBySlug('pages', 'regular-yoga-and-meditation', req)
  const meditationRetreatsPage = await getPageBySlug('pages', 'meditation-retreats', req)
  const changspaCoursesPage = await getPageBySlug('pages', 'yoga-courses-at-changspa-centre', req)
  const dhammaTalkPage = await getPageBySlug('pages', 'sunday-dhamma-talk', req)
  const upcomingEventsPage = await getPageBySlug('pages', 'upcoming-events', req)
  const registrationPage = await getPageBySlug('pages', 'registration', req)

  const galleryPage = await getPageBySlug('pages', 'gallery', req)
  const mainRegistrationPage = await getPageBySlug('pages', 'register', req)

  return {
    navItems: [
      {
        link: {
          type: 'custom',
          label: 'Home',
          url: '/',
        },
      },
      {
        link: {
          type: 'reference',
          label: 'About',
          reference: {
            relationTo: 'pages',
            value: aboutPage?.id,
          },
        },
        subMenuItems: [
          {
            link: {
              type: 'reference',
              label: 'Sambodhi Retreat Centre',
              reference: {
                relationTo: 'pages',
                value: sambodhiRetreatCentrePage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Facilities',
              reference: {
                relationTo: 'pages',
                value: facilitiesPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Guidelines',
              reference: {
                relationTo: 'pages',
                value: guidelinesPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Instructors',
              reference: {
                relationTo: 'pages',
                value: instructorsPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'History Of Mahabodhi',
              reference: {
                relationTo: 'pages',
                value: historyPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Testimonials',
              reference: {
                relationTo: 'pages',
                value: testimonialsPage?.id,
              },
            },
          },
        ],
      },
      {
        link: {
          type: 'reference',
          label: 'About The Founder',
          reference: {
            relationTo: 'pages',
            value: founderPage?.id,
          },
        },
        subMenuItems: [
          {
            link: {
              type: 'reference',
              label: 'Background',
              reference: {
                relationTo: 'pages',
                value: backgroundPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Vision',
              reference: {
                relationTo: 'pages',
                value: visionPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Story',
              reference: {
                relationTo: 'pages',
                value: storyPage?.id,
              },
            },
          },
        ],
      },
      {
        link: {
          type: 'reference',
          label: 'Yoga Courses & Retreats',
          reference: {
            relationTo: 'pages',
            value: coursesRetreatsPage?.id,
          },
        },
        subMenuItems: [
          {
            link: {
              type: 'reference',
              label: 'Yoga Courses',
              reference: {
                relationTo: 'pages',
                value: yogaCoursesPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Shangri-La Retreat',
              reference: {
                relationTo: 'pages',
                value: shangriLaRetreatPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'International Festival Of Yoga & Meditation',
              reference: {
                relationTo: 'pages',
                value: internationalFestivalPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Yoga Customized Courses',
              reference: {
                relationTo: 'pages',
                value: customizedCoursesPage?.id,
              },
            },
          },
        ],
      },
      {
        link: {
          type: 'reference',
          label: 'Changspa Centre',
          reference: {
            relationTo: 'pages',
            value: changspaCentrePage?.id,
          },
        },
        subMenuItems: [
          {
            link: {
              type: 'reference',
              label: 'Regular Yoga & Meditation',
              reference: {
                relationTo: 'pages',
                value: regularYogaPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Meditation Retreats',
              reference: {
                relationTo: 'pages',
                value: meditationRetreatsPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Yoga Courses At Changspa Centre',
              reference: {
                relationTo: 'pages',
                value: changspaCoursesPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Sunday Dhamma Talk',
              reference: {
                relationTo: 'pages',
                value: dhammaTalkPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Upcoming Events',
              reference: {
                relationTo: 'pages',
                value: upcomingEventsPage?.id,
              },
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Registration',
              reference: {
                relationTo: 'pages',
                value: registrationPage?.id,
              },
            },
          },
        ],
      },
      {
        link: {
          type: 'reference',
          label: 'Registration',
          reference: {
            relationTo: 'pages',
            value: mainRegistrationPage?.id,
          },
        },
      },
      {
        link: {
          type: 'reference',
          label: 'Gallery',
          reference: {
            relationTo: 'pages',
            value: galleryPage?.id,
          },
        },
      },
      {
        link: {
          type: 'custom',
          label: 'Shop',
          url: '/shop',
        },
      },
      {
        link: {
          type: 'custom',
          label: 'Account',
          url: '/account',
        },
      },
    ],
  }
}
