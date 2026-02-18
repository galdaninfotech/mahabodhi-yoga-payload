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
import { coursesRetreatsPageData } from './courses-retreats/courses-retreats'
import { yogaCoursesPageData } from './courses-retreats/yoga-courses'
import { shangriLaRetreatPageData } from './courses-retreats/shangri-la-retreat'
import { internationalFestivalPageData } from './courses-retreats/international-festival'
import { customizedCoursesPageData } from './courses-retreats/customized-courses'
import { changspaCentrePageData } from './changspa-centre/changspa-centre'
import { regularYogaPageData } from './changspa-centre/regular-yoga'
import { meditationRetreatsPageData } from './changspa-centre/meditation-retreats'
import { changspaCoursesPageData } from './changspa-centre/changspa-courses'
import { dhammaTalkPageData } from './changspa-centre/dhamma-talk'
import { upcomingEventsPageData } from './changspa-centre/upcoming-events'
import { registrationPageData } from './changspa-centre/registration'
import { galleryPageData } from './gallery'
import { mainRegistrationPageData } from './registration'
import type { Media } from '@/payload-types'

export const seedPages = async ({
  payload,
  images,
  contactForm,
}: {
  payload: Payload
  images: {
    imageHat: Media
    imageHero: Media
  }
  contactForm: any
}) => {
  const { imageHat, imageHero } = images

  payload.logger.info(`— Seeding pages in order...`)

  // 1. Home
  const homePage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: homePageData({
      contentImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
      topContentImage: imageHero,
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
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const facilitiesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: facilitiesPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const guidelinesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: guidelinesPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const instructorsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: instructorsPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const historyPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: historyPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const testimonialsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: testimonialsPageData({
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const visionPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: visionPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const storyPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: storyPageData({
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const shangriLaRetreatPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: shangriLaRetreatPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const internationalFestivalPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: internationalFestivalPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const customizedCoursesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: customizedCoursesPageData({
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const meditationRetreatsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: meditationRetreatsPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const changspaCoursesPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: changspaCoursesPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const dhammaTalkPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: dhammaTalkPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const upcomingEventsPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: upcomingEventsPageData({
      heroImage: imageHero,
      metaImage: imageHat,
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const registrationPage = await payload.create({
    collection: 'pages',
    depth: 0,
    data: registrationPageData({
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
      metaImage: imageHat,
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
      heroImage: imageHero,
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