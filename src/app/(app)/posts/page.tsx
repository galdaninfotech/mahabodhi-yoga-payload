import type { Metadata } from 'next/types'

import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'
import { PostHero } from '@/heros/PostHero'
import { NewsSidebar } from '@/components/NewsSidebar'
import { LinksSidebar } from '@/components/LinksSidebar'
import { PostCard } from '@/components/PostCard'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 10,
    overrideAccess: false,
  })

  return (
    <>
      <PostHero />

      <div className="container mx-auto pt-24 pb-24 px-4">
        <PageClient />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <main className="lg:col-span-9">
            <div className="mb-12">
              <h1 className="font-big-shoulders text-sm md:text-xl uppercase tracking-tight text-slate-900 mb-4">
                Latest News Posts
              </h1>
              <p className="text-slate-500 max-w-2xl text-sm">
                Explore our latest stories, travel tips, and updates from the heart of the Himalayas.
              </p>
            </div>

            <div className="mb-8 border-b border-slate-100 pb-4">
              <PageRange
                collection="posts"
                currentPage={posts.page}
                limit={10}
                totalDocs={posts.totalDocs}
              />
            </div>

            <div className="flex flex-col">
              {posts.docs?.map((post, index) => (
                <PostCard key={index} doc={post} showCategories />
              ))}
            </div>

            <div className="mt-12">
              {posts.totalPages > 1 && posts.page && (
                <Pagination className="text-xs font-normal" page={posts.page} totalPages={posts.totalPages} />
              )}
            </div>
          </main>

          <aside className="lg:col-span-3 space-y-12">
            <NewsSidebar />
            <LinksSidebar />
          </aside>
        </div>
      </div>
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Sambodhi Retreat Centre Blog - Yoga, Meditation & Spiritual Life in Ladakh`,
    description: 'Explore the latest news, spiritual insights, and meditation guides from Sambodhi Retreat Centre. Experience the path of mindfulness and peace in the heart of the Himalayas.',
    alternates: {
      canonical: '/posts',
    },
  }
}
