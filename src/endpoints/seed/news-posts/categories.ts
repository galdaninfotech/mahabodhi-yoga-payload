import type { Payload } from 'payload'

const postCategories = [
  'Yoga Practice',
  'Mindfulness',
  'Holistic Health',
  'Community',
  'Spirituality',
  'Meditation Tips',
  'Wellness Journey'
]

export const seedPostCategories = async ({
  payload,
}: {
  payload: Payload
}) => {
  payload.logger.info(`— Seeding post categories...`)

  const categories = await Promise.all(
    postCategories.map((title) =>
      payload.create({
        collection: 'categories',
        data: {
          title,
          slug: title.toLowerCase().replace(/ /g, '-'),
        },
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  return categories
}
