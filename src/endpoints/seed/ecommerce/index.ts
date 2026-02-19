import type { Payload } from 'payload'
import type { Address, Transaction, User, Product, Variant } from '@/payload-types'

const baseAddressUSData: Transaction['billingAddress'] = {
  title: 'Dr.',
  firstName: 'Otto',
  lastName: 'Octavius',
  phone: '1234567890',
  company: 'Oscorp',
  addressLine1: '123 Main St',
  addressLine2: 'Suite 100',
  city: 'New York',
  state: 'NY',
  postalCode: '10001',
  country: 'US',
}

const baseAddressUKData: Transaction['billingAddress'] = {
  title: 'Mr.',
  firstName: 'Oliver',
  lastName: 'Twist',
  phone: '1234567890',
  addressLine1: '48 Great Portland St',
  city: 'London',
  postalCode: 'W1W 7ND',
  country: 'GB',
}

export const seedEcommerce = async ({
  payload,
  customer,
  products,
}: {
  payload: Payload
  customer: User
  products: {
    productHat: Product
    productTshirt: Product
    smallTshirtHoodieVariant?: Variant | null
    mediumTshirtHoodieVariant?: Variant | null
  }
}) => {
  const { productHat, productTshirt, smallTshirtHoodieVariant, mediumTshirtHoodieVariant } = products

  payload.logger.info(`— Seeding addresses...`)

  await Promise.all([
    payload.create({
      collection: 'addresses',
      depth: 0,
      data: {
        customer: customer.id,
        ...(baseAddressUSData as Address),
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'addresses',
      depth: 0,
      data: {
        customer: customer.id,
        ...(baseAddressUKData as Address),
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info(`— Seeding transactions...`)

  const [pendingTransaction, succeededTransaction] = await Promise.all([
    payload.create({
      collection: 'transactions',
      data: {
        currency: 'USD',
        customer: customer.id,
        paymentMethod: 'stripe',
        stripe: {
          customerID: 'cus_123',
          paymentIntentID: 'pi_123',
        },
        status: 'pending',
        billingAddress: baseAddressUSData,
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'transactions',
      data: {
        currency: 'USD',
        customer: customer.id,
        paymentMethod: 'stripe',
        stripe: {
          customerID: 'cus_123',
          paymentIntentID: 'pi_123',
        },
        status: 'succeeded',
        billingAddress: baseAddressUSData,
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info(`— Seeding carts...`)

  const oldTimestamp = new Date('2023-01-01T00:00:00Z').toISOString()

  await Promise.all([
    payload.create({
      collection: 'carts',
      data: {
        customer: customer.id,
        currency: 'USD',
        items: [
          {
            product: productTshirt.id,
            ...(mediumTshirtHoodieVariant?.id ? { variant: mediumTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'carts',
      data: {
        currency: 'USD',
        createdAt: oldTimestamp,
        items: [
          {
            product: productHat.id,
            quantity: 1,
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'carts',
      data: {
        customer: customer.id,
        currency: 'USD',
        purchasedAt: new Date().toISOString(),
        subtotal: 7499,
        items: [
          {
            product: productTshirt.id,
            ...(smallTshirtHoodieVariant?.id ? { variant: smallTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
          {
            product: productTshirt.id,
            ...(mediumTshirtHoodieVariant?.id ? { variant: mediumTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
        ],
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  payload.logger.info(`— Seeding orders...`)

  await Promise.all([
    payload.create({
      collection: 'orders',
      data: {
        amount: 7499,
        currency: 'USD',
        customer: customer.id,
        shippingAddress: baseAddressUSData,
        items: [
          {
            product: productTshirt.id,
            ...(smallTshirtHoodieVariant?.id ? { variant: smallTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
          {
            product: productTshirt.id,
            ...(mediumTshirtHoodieVariant?.id ? { variant: mediumTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
        ],
        status: 'completed',
        transactions: [succeededTransaction.id],
      },
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'orders',
      data: {
        amount: 7499,
        currency: 'USD',
        customer: customer.id,
        shippingAddress: baseAddressUSData,
        items: [
          {
            product: productTshirt.id,
            ...(smallTshirtHoodieVariant?.id ? { variant: smallTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
          {
            product: productTshirt.id,
            ...(mediumTshirtHoodieVariant?.id ? { variant: mediumTshirtHoodieVariant.id } : {}),
            quantity: 1,
          },
        ],
        status: 'processing',
        transactions: [succeededTransaction.id],
      },
      context: {
        disableRevalidate: true,
      },
    }),
  ])
}
