import type { Payload, File } from 'payload'
import { imageHatData } from './image-hat'
import { imageTshirtBlackData } from './image-tshirt-black'
import { imageTshirtWhiteData } from './image-tshirt-white'
import { imageHero1Data } from './image-hero-1'

export const seedMedia = async ({ payload }: { payload: Payload }) => {
  payload.logger.info(`— Seeding media...`)

  const [imageHatBuffer, imageTshirtBlackBuffer, imageTshirtWhiteBuffer, heroBuffer] =
    await Promise.all([
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/hat-logo.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/tshirt-black.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/ecommerce/src/endpoints/seed/tshirt-white.png',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
      ),
    ])

  const [imageHat, imageTshirtBlack, imageTshirtWhite, imageHero] = await Promise.all([
    payload.create({
      collection: 'media',
      data: imageHatData,
      file: imageHatBuffer,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'media',
      data: imageTshirtBlackData,
      file: imageTshirtBlackBuffer,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'media',
      data: imageTshirtWhiteData,
      file: imageTshirtWhiteBuffer,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.create({
      collection: 'media',
      data: imageHero1Data,
      file: heroBuffer,
      context: {
        disableRevalidate: true,
      },
    }),
  ])

  return {
    imageHat,
    imageTshirtBlack,
    imageTshirtWhite,
    imageHero,
  }
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
