import type { Payload } from 'payload'
import { contactFormData } from './contact'

export const seedForms = async ({ payload }: { payload: Payload }) => {
  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData(),
    context: {
      disableRevalidate: true,
    },
  })

  return {
    contactForm,
  }
}
