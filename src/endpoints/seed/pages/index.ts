import type { Payload } from 'payload'
import { homePageData } from './home'
import { contactPageData } from './contact'
import { aboutPageData } from './about/about'
import { sambodhiRetreatCentreData } from './about/sambodhi-retreat-centre'
import { facilitiesPageData } from './about/facilities'
import { guidelinesPageData } from './about/guidelines'
import { instructorsPageData } from './about/instructors'
import { historyPageData } from './about/history'
import { testimonialsPageData } from './about/testimonials'
import { founderPageData } from './founder/founder'
import { backgroundPageData } from './founder/background'
import { visionPageData } from './founder/vision'
import { storyPageData } from './founder/story'
import { coursesRetreatsPageData } from './courses-retreats/yoga-courses-and-retreats'
import { yogaCoursesPageData } from './courses-retreats/yoga-courses'
import { shangriLaRetreatPageData } from './courses-retreats/shangri-la-retreat'
import { internationalFestivalPageData } from './courses-retreats/international-festival-of-yoga-and-meditation'
import { customizedCoursesPageData } from './courses-retreats/yoga-customized-courses'
import { changspaCentrePageData } from './changspa-centre/changspa-centre'
import { regularYogaPageData } from './changspa-centre/regular-yoga-and-meditation'
import { meditationRetreatsPageData } from './changspa-centre/meditation-retreats'
import { changspaCoursesPageData } from './changspa-centre/yoga-courses-at-changspa-centre'
import { dhammaTalkPageData } from './changspa-centre/sunday-dhamma-talk'
import { upcomingEventsPageData } from './changspa-centre/upcoming-events'
import { registrationPageData } from './changspa-centre/registration'
import { galleryPageData } from './gallery'
import { mainRegistrationPageData } from './registration'
import type { Media } from '@/payload-types'

export const seedPages = async ({
  payload,
  contactForm,
  mediaMap,
}: {
  payload: Payload
  contactForm: any
  mediaMap: Record<string, Media>
}) => {
  const imageHat = mediaMap['imageHat']
  const imageHero = mediaMap['imageHero']

  payload.logger.info(`— Seeding pages in order...`)

  // 1. Home
  const homePage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: homePageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 2. About Parent
  const aboutPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: aboutPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 3. About Subpages
  const sambodhiRetreatCentrePage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: sambodhiRetreatCentreData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const facilitiesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: facilitiesPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const guidelinesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: guidelinesPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const instructorsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: instructorsPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const historyPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: historyPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const testimonialsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: testimonialsPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 4. Founder Parent
  const founderPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: founderPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 5. Founder Subpages
  const backgroundPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: backgroundPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const visionPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: visionPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const storyPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: storyPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 6. Courses & Retreats Parent
  const coursesRetreatsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: coursesRetreatsPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 7. Courses & Retreats Subpages
  const yogaCoursesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: yogaCoursesPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const shangriLaRetreatPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: shangriLaRetreatPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const internationalFestivalPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: internationalFestivalPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const customizedCoursesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: customizedCoursesPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 8. Changspa Centre Parent
  const changspaCentrePage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: changspaCentrePageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 9. Changspa Centre Subpages
  const regularYogaPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: regularYogaPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const meditationRetreatsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: meditationRetreatsPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const changspaCoursesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: changspaCoursesPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const dhammaTalkPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: dhammaTalkPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const upcomingEventsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: upcomingEventsPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const registrationPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: registrationPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 11. Gallery
  const galleryPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: galleryPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 12. Main Registration
  const mainRegistrationPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: mainRegistrationPageData({
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  // 10. Contact & others
  const contactPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: contactPageData({
      contactForm: contactForm,
      mediaMap,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  return {
    homePage,
    contactPage,
    aboutPage,
    sambodhiRetreatCentrePage,
    facilitiesPage,
    guidelinesPage,
    instructorsPage,
    historyPage,
    testimonialsPage,
    founderPage,
    backgroundPage,
    visionPage,
    storyPage,
    coursesRetreatsPage,
    yogaCoursesPage,
    shangriLaRetreatPage,
    internationalFestivalPage,
    customizedCoursesPage,
    changspaCentrePage,
    regularYogaPage,
    meditationRetreatsPage,
    changspaCoursesPage,
    dhammaTalkPage,
    upcomingEventsPage,
    registrationPage,
    galleryPage,
    mainRegistrationPage,
  }
}