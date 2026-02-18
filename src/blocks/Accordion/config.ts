import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Accordion: Block = {
  slug: 'accordion',
  imageURL: '/images/blocks/accordion.jpg',
  imageAltText: 'Thumbnail for accordion block',
  interfaceName: 'AccordionBlock',
  fields: [
    {
        name: 'enabled',
        type: 'checkbox',
        label: 'Enabled',
        defaultValue: true,
    },
    {
        name: 'accordion',
        type: 'array',
        maxRows: 10,
        admin: {
            initCollapsed: true,
        },
        fields: [
            {
                name: 'title',
                type: 'text',
            },
            {
                name: 'content',
                type: 'richText',
                localized: true,
                editor: lexicalEditor({
                    features: ({ rootFeatures }) => {
                        return [
                            ...rootFeatures,
                            HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                            FixedToolbarFeature(),
                            InlineToolbarFeature(),
                        ]
                    },
                }),
            },
        ]
    },
  ],
}