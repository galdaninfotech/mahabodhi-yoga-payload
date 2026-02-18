import { DataFromGlobalSlug } from 'payload'

export const settingsData: Partial<DataFromGlobalSlug<'settings'>> = {
  newsletter: {
    subscriberGroupMode: 'multiple',
  },
}
