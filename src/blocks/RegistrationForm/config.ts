import type { Block } from 'payload'

export const RegistrationForm: Block = {
  slug: 'registrationForm',
  imageURL: '/images/blocks/registrationForm.jpg',
  imageAltText: 'Thumbnail for registrationForm block',
  interfaceName: 'RegistrationFormBlock',
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
  ],
}