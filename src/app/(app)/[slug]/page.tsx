import type { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { CMSLink } from '@/components/Link'
import { homeStaticData } from '@/endpoints/seed/pages/home-static'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import type { Page, Sidebar } from '@/payload-types'
import { notFound } from 'next/navigation'

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
  const url = '/' + slug

  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  let page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStaticData() as Page
  }

  if (!page) {
    return notFound()
  }

  const sidebar = (await payload.findGlobal({
    slug: 'sidebar',
    draft,
  })) as Sidebar

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
            <aside className="lg:col-span-1 lg:mt-16">
              {sidebar?.title && (
                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Oswald, serif' }}>
                  {sidebar.title}
                </h3>
              )}
              {sidebar?.links && sidebar.links.length > 0 && (
                <nav className="flex flex-col gap-4">
                  {sidebar.links.map((linkItem, index) => (
                    <CMSLink key={index} {...linkItem.link} className="text-lg hover:underline" />
                  ))}
                </nav>
              )}
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
