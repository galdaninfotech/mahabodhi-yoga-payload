import { RequiredDataFromCollectionSlug } from 'payload'

export const subscriber1Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Jain Lokesh',
  email: 'jainlokesg83@yahoo.co.in',
  groups: groupIds,
})

export const subscriber2Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Ahimsa Trust',
  email: 'ahimsa.trust@gmail.com',
  groups: groupIds,
})

export const subscriber3Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Vishwa Ahimsa',
  email: 'vishwa.ahimsa@gmail.com',
  groups: groupIds,
})



export const subscriber4Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Albora Newsletters',
  email: 'albora.newsletters@gmail.com',
  groups: groupIds,
})

export const subscriber5Data = (groupIds: number[]): RequiredDataFromCollectionSlug<'subscribers'> => ({
  active: true,
  name: 'Alekhya Shastri',
  email: 'alekhyashastri@gmail.com',
  groups: groupIds,
})
