import type { Payload } from 'payload'
import { productHatData } from './hat'
import { productTshirtData, productTshirtVariant } from './tshirt'
import type { Media, VariantOption } from '@/payload-types'

const categories = ['Accessories', 'T-Shirts', 'Hats']

const sizeVariantOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
  { label: 'X Large', value: 'xlarge' },
]

const colorVariantOptions = [
  { label: 'Black', value: 'black' },
  { label: 'White', value: 'white' },
]

export const seedProducts = async ({
  payload,
  images,
}: {
  payload: Payload
  images: {
    imageHat: Media
    imageTshirtBlack: Media
    imageTshirtWhite: Media
    imageHero: Media
  }
}) => {
  const { imageHat, imageTshirtBlack, imageTshirtWhite, imageHero } = images

  payload.logger.info(`— Seeding categories...`)

  const [accessoriesCategory, tshirtsCategory, hatsCategory] = await Promise.all(
    categories.map((category) =>
      payload.create({
        collection: 'categories',
        data: {
          title: category,
          slug: category,
        },
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  payload.logger.info(`— Seeding variant types and options...`)

  const sizeVariantType = await payload.create({
    collection: 'variantTypes',
    data: {
      name: 'size',
      label: 'Size',
    },
    context: {
      disableRevalidate: true,
    },
  })

  const sizeVariantOptionsResults: VariantOption[] = []

  for (const option of sizeVariantOptions) {
    const result = await payload.create({
      collection: 'variantOptions',
      data: {
        ...option,
        variantType: sizeVariantType.id,
      },
      context: {
        disableRevalidate: true,
      },
    })
    sizeVariantOptionsResults.push(result)
  }

  const [small, medium, large, xlarge] = sizeVariantOptionsResults

  const colorVariantType = await payload.create({
    collection: 'variantTypes',
    data: {
      name: 'color',
      label: 'Color',
    },
    context: {
      disableRevalidate: true,
    },
  })

  const [black, white] = await Promise.all(
    colorVariantOptions.map((option) => {
      return payload.create({
        collection: 'variantOptions',
        data: {
          ...option,
          variantType: colorVariantType.id,
        },
        context: {
          disableRevalidate: true,
        },
      })
    }),
  )

  payload.logger.info(`— Seeding products...`)

  const productHat = await payload.create({
    collection: 'products',
    depth: 0,
    data: productHatData({
      galleryImage: imageHat,
      metaImage: imageHat,
      variantTypes: [colorVariantType],
      categories: [hatsCategory],
      relatedProducts: [],
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const productTshirt = await payload.create({
    collection: 'products',
    depth: 0,
    data: productTshirtData({
      galleryImages: [
        { image: imageTshirtBlack, variantOption: black },
        { image: imageTshirtWhite, variantOption: white },
      ],
      metaImage: imageTshirtBlack,
      contentImage: imageHero,
      variantTypes: [colorVariantType, sizeVariantType],
      categories: [tshirtsCategory],
      relatedProducts: [productHat],
    }),
    context: {
      disableRevalidate: true,
    },
  })

  const [
    smallTshirtHoodieVariant,
    mediumTshirtHoodieVariant,
    largeTshirtHoodieVariant,
    xlargeTshirtHoodieVariant,
  ] = await Promise.all(
    [small, medium, large, xlarge].map((variantOption) =>
      payload.create({
        collection: 'variants',
        depth: 0,
        data: productTshirtVariant({
          product: productTshirt,
          variantOptions: [variantOption, white],
        }),
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  await Promise.all(
    [small, medium, large, xlarge].map((variantOption) =>
      payload.create({
        collection: 'variants',
        depth: 0,
        data: productTshirtVariant({
          product: productTshirt,
          variantOptions: [variantOption, black],
          ...(variantOption.value === 'medium' ? { inventory: 0 } : {}),
        }),
        context: {
          disableRevalidate: true,
        },
      }),
    ),
  )

  return {
    accessoriesCategory,
    tshirtsCategory,
    hatsCategory,
    productHat,
    productTshirt,
    smallTshirtHoodieVariant,
    mediumTshirtHoodieVariant,
    largeTshirtHoodieVariant,
    xlargeTshirtHoodieVariant,
  }
}
