import type { Media, Product } from '@/payload-types' // Keep Product type for now as the collection slug is still 'products'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Gallery } from '@/components/product/Gallery' // Component might need adjustment if it relies on variant-specific logic
import { ProgrammeDescription } from '@/components/product/ProgrammeDescription' // New component for description
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'
import { Metadata } from 'next'

type Args = {
  params: Promise<{
    slug: string
  }>
}

// Assuming Programme type will be available or Product type can be used as a base
export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const programme = await queryProgrammeBySlug({ slug }) // Changed function name

  if (!programme) return notFound()

  // Adjustments for gallery and meta image structure if needed
  const gallery = programme.gallery?.filter((item) => typeof item.image === 'object') || []
  const metaImage = typeof programme.meta?.image === 'object' ? programme.meta.image : undefined
  const canIndex = programme._status === 'published'

  const seoImage = metaImage || (gallery.length ? (gallery[0]?.image as Media) : undefined)

  return {
    description: programme.meta?.description || '',
    openGraph: seoImage?.url
      ? {
          images: [
            {
              alt: seoImage?.alt,
              height: seoImage.height!,
              url: seoImage?.url,
              width: seoImage.width!,
            },
          ],
        }
      : null,
    robots: {
      follow: canIndex,
      googleBot: {
        follow: canIndex,
        index: canIndex,
      },
      index: canIndex,
    },
    title: programme.meta?.title || programme.title,
  }
}

export default async function ProgrammePage({ params }: Args) {
  const { slug } = await params
  const programme = await queryProgrammeBySlug({ slug }) // Changed function name

  if (!programme) return notFound()

  // Adjustments for gallery structure if needed
  const gallery =
    programme.gallery
      ?.filter((item) => typeof item.image === 'object')
      .map((item) => ({
        ...item,
        image: item.image as Media,
      })) || []

  const metaImage = typeof programme.meta?.image === 'object' ? programme.meta.image : undefined
  // Removed variant/inventory specific logic as we're simplifying

  const price = programme.price // Use the new price field

  const programmeJsonLd = {
    name: programme.title,
    '@context': 'https://schema.org',
    '@type': 'Product', // Schema.org type remains Product for general items
    description: programme.description,
    image: metaImage?.url,
    offers: {
      '@type': 'Offer', // Changed from AggregateOffer to Offer as we have a single price
      availability: 'https://schema.org/InStock', // Assuming always in stock for programmes
      price: price,
      priceCurrency: 'USD',
    },
  }

  return (
    <React.Fragment>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programmeJsonLd),
        }}
        type="application/ld+json"
      />
      <div className="container pt-8 pb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/programmes">
            <ChevronLeftIcon />
            All programmes
          </Link>
        </Button>
        <div className="flex flex-col gap-12 rounded-lg border p-8 md:py-12 lg:flex-row lg:gap-8 bg-primary-foreground">
          <div className="h-full w-full basis-full lg:basis-1/2">
            <Suspense
              fallback={
                <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
              }
            >
              {Boolean(gallery?.length) && <Gallery gallery={gallery} />}
            </Suspense>
          </div>

          <div className="basis-full lg:basis-1/2">
            {/* Use a new component or adapt ProductDescription */}
            <ProgrammeDescription programme={programme} />
            {programme.paymentLink && (
              <Button
                asChild
                className="mt-4 w-full"
                // onClick={() => window.open(programme.paymentLink, '_blank')} // Removed inline onClick for better practice, rely on href
              >
                <Link href={programme.paymentLink} target="_blank" rel="noopener noreferrer">
                  Book Now
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {programme.layout?.length ? <RenderBlocks blocks={programme.layout} /> : <></>}
    </React.Fragment>
  )
}

// Renamed function and updated it to use 'programmes' collection and fetch programme-specific fields
const queryProgrammeBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'products', // Using 'products' slug as per backend config, but fetching Programme data
    depth: 3,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        ...(draft ? [] : [{ _status: { equals: 'published' } }]),
      ],
    },
    // Removed variant population as it's no longer relevant
    populate: {
      categories: { title: true }, // Populate categories if needed for display
    },
  })

  return result.docs?.[0] || null
}
