import type { GlobalConfig } from 'payload'

export const SambodhiRetreatCentre: GlobalConfig = {
  slug: 'sambodhiRetreatCentre',
  label: 'SambodhiRetreatCentre',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'slogan',
      type: 'text',
    },

    {
      type: 'row',
      fields: [
        {
          name: 'contactPerson',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'designation',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'phone1',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'phone2',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'email1',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'email2',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      type: 'row',
      fields: [
        {
          name: 'addressline1',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'addressline2',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'facebook',
      type: 'text',
    },
    {
      name: 'twitter',
      type: 'text',
    },
    {
      name: 'instagram',
      type: 'text',
    },
    {
      name: 'youtube',
      type: 'text',
    },
    {
      name: 'whatsapp',
      type: 'text',
    },
    
  ],
}