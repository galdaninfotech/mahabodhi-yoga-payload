import { RequiredDataFromCollectionSlug } from 'payload'

export const customerData: RequiredDataFromCollectionSlug<'users'> = {
  name: 'Customer',
  email: 'customer@example.com',
  password: 'password',
  roles: ['customer'],
}
