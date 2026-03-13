import { RichText } from '@/components/RichText'
import configPromise from '@payload-config'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'

import type { Post as PostType } from '@/payload-types'

import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Media as MediaComponent } from '@/components/Media'
import { NewsSidebar } from '@/components/NewsSidebar'
import { LinksSidebar } from '@/components/LinksSidebar'
import { generateMeta } from '@/utilities/generateMeta'
import { ChevronLeft, ChevronRight, Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageClient from './page.client'
import { PostHero } from '@/heros/PostHero'
import { formatDateTime } from '@/utilities/formatDateTime'
import { formatAuthors } from '@/utilities/formatAuthors'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)

  const { post, nextPost, prevPost } = await queryPostAndNeighbors({ slug: decodedSlug })

  if (!post) return notFound()

  const hasAuthors = post.populatedAuthors && post.populatedAuthors.length > 0
  const hasCategories = post.categories && post.categories.length > 0

  return (
    <>
      <article className="pt-16 pb-16">
        <PageClient />

        {draft && <LivePreviewListener />}

        <PostHero post={post} />

        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-9 mt-12">

            {post.heroImage && typeof post.heroImage !== 'string' && (
              <div className="mb-12 rounded-sm overflow-hidden shadow-lg border border-slate-100">
                <MediaComponent
                  resource={post.heroImage}
                  imgClassName="w-full h-auto object-cover max-h-[600px]"
                />
              </div>
            )}

            <h1 
              className="mb-4 font-big-shoulders uppercase tracking-tight leading-wider text-slate-900"
              style={{ fontSize: '18px', letterSpacing: '1px' }}
            >
              {post.title}
            </h1>

            {/* Post Meta Data */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-8 mb-10 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 border-b border-slate-100 pb-8">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span className="leading-none">{formatDateTime({ date: post.publishedAt || post.createdAt, format: 'MMMM dd, yyyy' })}</span>
              </div>

              {hasAuthors && (
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span className="leading-none">By {formatAuthors(post.populatedAuthors as any)}</span>
                </div>
              )}

              {hasCategories && (
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <div className="flex flex-wrap gap-1 leading-none">
                    {post.categories?.map((category, index) => {
                      if (typeof category === 'object' && category !== null) {
                        return (
                          <span key={category.id}>
                            {category.title}{index < (post.categories?.length || 0) - 1 ? ',' : ''}
                          </span>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              )}
            </div>

            <RichText className="" data={post.content} enableGutter={false} />

            {/* Post Navigation */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between gap-6">
              {prevPost ? (
                <Link
                  href={`/posts/${prevPost.slug}`}
                  className="flex-1 group p-6 border border-slate-100 rounded-sm hover:border-gray-300 transition-colors bg-slate-50/30"
                >
                  <span className="flex items-center text-xs uppercase tracking-[0.2em] text-[#d19a4a] mb-2 group-hover:text-black transition-colors">
                    <ChevronLeft className="mr-1 w-4 h-4" /> Previous
                  </span>
                  <span className="font-big-shoulders tracking-widest text-sm text-slate-900 group-hover:text-black transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Link
                  href={`/posts/${nextPost.slug}`}
                  className="flex-1 group p-6 border border-slate-100 rounded-sm text-right hover:border-gray-300 transition-colors bg-slate-50/30"
                >
                  <span className="flex items-center justify-end text-xs uppercase tracking-[0.2em] text-[#d19a4a] mb-2 group-hover:text-black transition-colors">
                    Next <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                  <span className="font-big-shoulders tracking-widest text-sm text-slate-900 group-hover:text-black transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </main>

          <aside className="lg:col-span-3 space-y-12 mt-12">
            <NewsSidebar />
            <LinksSidebar />
          </aside>
        </div>
      </article>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug)
  const { post } = await queryPostAndNeighbors({ slug: decodedSlug })

  if (!post) return notFound()

  return generateMeta({ doc: post })
}

const queryPostAndNeighbors = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  // 1. Get current post
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = result.docs?.[0] || null

  if (!post) return { post: null, nextPost: null, prevPost: null }

  // 2. Get Next and Previous posts based on createdAt
  const neighbors = await Promise.all([
    // Previous Post (created before current)
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: '-createdAt',
      where: {
        createdAt: {
          less_than: post.createdAt,
        },
      },
      select: { title: true, slug: true },
    }),
    // Next Post (created after current)
    payload.find({
      collection: 'posts',
      limit: 1,
      sort: 'createdAt',
      where: {
        createdAt: {
          greater_than: post.createdAt,
        },
      },
      select: { title: true, slug: true },
    }),
  ])

  return {
    post,
    prevPost: (neighbors[0].docs?.[0] as PostType) || null,
    nextPost: (neighbors[1].docs?.[0] as PostType) || null,
  }
})
