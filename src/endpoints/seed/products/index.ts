import type { Payload } from 'payload'
import { courseData } from './courses'
import type { Media } from '@/payload-types'

const categories = ['Yoga Courses', 'Meditation Retreats']

export const seedProducts = async ({
  payload,
  images,
}: {
  payload: Payload
  images: {
    imageHat: Media
    imageTshirtBlack: Media
    imageTshirtWhite: Media
    imageHero: Media
  }
}) => {
  const { imageHero } = images

  payload.logger.info(`— Seeding categories...`)

  const [coursesCategory, retreatsCategory] = await Promise.all(
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category.toLowerCase().replace(/ /g, '-'),
        },
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  payload.logger.info(`— Seeding products (courses and retreats)...`)

  const retreat = await payload.create({
    collection: 'products',
    depth: 0,
    data: courseData({
      title: '7-Day Silent Meditation Retreat',
      slug: '7-day-silent-meditation-retreat',
      description: 'A transformative 7-day silent meditation retreat in the heart of the mountains.',
      price: 50000,
      galleryImage: imageHero,
      metaImage: imageHero,
      variantTypes: [],
      categories: [retreatsCategory],
      relatedProducts: [],
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const course = await payload.create({
    collection: 'products',
    depth: 0,
    data: courseData({
      title: 'Beginner Hatha Yoga Course',
      slug: 'beginner-hatha-yoga-course',
      description: 'Master the basics of Hatha yoga in this 4-week comprehensive course.',
      price: 25000,
      galleryImage: imageHero,
      metaImage: imageHero,
      variantTypes: [],
      categories: [coursesCategory],
      relatedProducts: [retreat],
    }),
    context: {
      disableRevalidate: true,
    },
  })

  return {
    coursesCategory,
    retreatsCategory,
    productRetreat: retreat,
    productCourse: course,
    // Maintaining compatibility with other seed scripts if they expect these keys
    accessoriesCategory: coursesCategory, 
    productHat: retreat,
    productTshirt: course,
    // Variants are not needed for courses yet, but we provide nulls to avoid errors in seedEcommerce
    smallTshirtHoodieVariant: null,
    mediumTshirtHoodieVariant: null,
    largeTshirtHoodieVariant: null,
    xlargeTshirtHoodieVariant: null,
  }
}
