import { RequiredDataFromCollectionSlug } from 'payload'

export const subscriber1Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'John Doe',
  email: 'john@example.com',
  groups: groupIds,
})

export const subscriber2Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Jane Smith',
  email: 'jane@example.com',
  groups: groupIds,
})
