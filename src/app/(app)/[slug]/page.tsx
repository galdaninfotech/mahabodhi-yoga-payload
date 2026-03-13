import type { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import type { Page } from '@/payload-types'
import { notFound } from 'next/navigation'
import { NewsSidebar } from '@/components/NewsSidebar'
import { LinksSidebar } from '@/components/LinksSidebar'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params

  let page = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  const { hero, layout } = page

  const hideSidebar = ['home', 'results', 'gallery'].includes(slug)

  return (
    <article className="pb-24">
      <RenderHero {...hero} />
      <div className="container-xl pt-12">
        {hideSidebar ? (
          <RenderBlocks blocks={layout} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <RenderBlocks blocks={layout} />
            </div>
            <aside className="lg:col-span-1 lg:mt-16 space-y-12">
              <NewsSidebar />
              <LinksSidebar />
            </aside>
          </div>
        )}
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug = 'home' } = await params

  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
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
  })

  return result.docs?.[0] || null
}
