import { Block } from 'payload'

export const AboutUs: Block = {
    slug: 'aboutUs',
    imageURL: '/images/blocks/aboutUs.jpg',
    imageAltText: 'Thumbnail for aboutUs block',
    interfaceName: 'AboutUs',
    labels: {
        singular: 'About Us Block',
        plural: 'About Us Blocks',
    },
    fields: [
        {
            name: 'image1',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'subtitle',
            type: 'text',
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'list',
            type: 'array',
            maxRows: 5,
            admin: {
                initCollapsed: true,
            },
            fields: [
                {
                    name: 'item',
                    type: 'text',
                },
            ],
        },
        {
            name: 'yearsOfExperience',
            type: 'number',
        },
        {
            name: 'meditationInstructors',
            type: 'number',
        },
        {
            name: 'coursesAvailable',
            type: 'number',
        },
        {
            name: 'satisfiedClients',
            type: 'number',
            admin: {
                description: 'Eg. Enter 1 for one thousand, and so on',
            },
        },
    ],
}