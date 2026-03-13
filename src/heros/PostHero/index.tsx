import React from 'react'
import type { Post } from '@/payload-types'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const PostHero: React.FC<{
  post?: Post
}> = ({ post }) => {
  return (
    <div
      className="relative -mt-[13rem] w-full h-[30vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-black/80 lg:-mt-[13rem]"
      data-theme="dark"
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-slate-900" />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pt-32 flex flex-col items-center text-center text-white">
        <Breadcrumbs />
      </div>
    </div>
  )
}
