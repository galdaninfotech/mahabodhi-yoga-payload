import type { Payload } from 'payload'
import { customerData } from './customer'
import { adminData } from './admin'

export const seedUsers = async ({ payload }: { payload: Payload }) => {
  payload.logger.info(`— Seeding customer and customer data...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: customerData.email,
      },
    },
    context: {
      disableRevalidate: true,
    },
  })

  const customer = await payload.create({
    collection: 'users',
    data: customerData,
    context: {
      disableRevalidate: true,
    },
  })

  payload.logger.info(`— Seeding admin user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: adminData.email,
      },
    },
    context: {
      disableRevalidate: true,
    },
  })

  const admin = await payload.create({
    collection: 'users',
    data: adminData,
    context: {
      disableRevalidate: true,
    },
  })

  return {
    customer,
    admin,
  }
}
