import { RequiredDataFromCollectionSlug } from 'payload'

export const customerData: RequiredDataFromCollectionSlug<'users'> = {
  name: 'Editor',
  email: 'editor@mahabodhiyogacentre.com',
  password: 'password',
  roles: ['admin'],
}
 