import type { Block } from 'payload'

export const Address: Block = {
  slug: 'address', imageURL: '/images/blocks/address.jpg',
  imageAltText: 'Thumbnail for address block',
  interfaceName: 'AddressBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
      },
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'description',
        type: 'text',
      },
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