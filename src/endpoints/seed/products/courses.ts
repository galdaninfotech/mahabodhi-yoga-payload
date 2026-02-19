import type { Category, Product, VariantType } from '@/payload-types'
import type { Media } from '@/payload-types'
import { RequiredDataFromCollectionSlug } from 'payload'

type ProductArgs = {
  galleryImage: Media
  metaImage: Media
  variantTypes: VariantType[]
  categories: Category[]
  relatedProducts: Product[]
  title: string
  slug: string
  description: string
  price: number
  inventory?: number
}

export const courseData: (args: ProductArgs) => RequiredDataFromCollectionSlug<'products'> = ({
  galleryImage,
  relatedProducts,
  metaImage,
  variantTypes,
  categories,
  title,
  slug,
  description,
  price,
  inventory = 100,
}) => {
  return {
    meta: {
      title: `${title} | Sambodhi Retreat Centre`,
      image: metaImage,
      description: description,
    },
    _status: 'published',
    layout: [],
    categories: categories,
    description: {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: description,
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1,
            textFormat: 0,
            textStyle: '',
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    },
    gallery: [{ image: galleryImage }],
    title: title,
    slug: slug,
    priceInUSDEnabled: true,
    priceInUSD: price,
    relatedProducts: relatedProducts,
    inventory: inventory,
  }
}
