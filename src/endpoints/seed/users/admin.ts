import { RequiredDataFromCollectionSlug } from 'payload'

export const adminData: RequiredDataFromCollectionSlug<'users'> = {
  name: 'Admin',
  email: 'galdaninfotech@gmail.com',
  password: 'admin',
  roles: ['admin'],
}
