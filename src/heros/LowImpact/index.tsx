import React from 'react'

import { Media } from '@/components/Media'
import type { Page } from '@/payload-types'

import { Breadcrumbs } from '@/components/Breadcrumbs'

export const LowImpactHero: React.FC<Page['hero']> = ({ media }) => {
  return (
    <div
      className="relative -mt-[11rem] w-full h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black/80 lg:-mt-[11rem]"
      data-theme="dark"
    >
      {media && typeof media === 'object' ? (
        <div className="absolute inset-0 z-0 h-full w-full">
          <Media fill imgClassName="object-cover" priority resource={media} />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 h-full w-full bg-slate-900" />
      )}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 pt-32 flex justify-center text-center text-white">
        <Breadcrumbs />
      </div>
    </div>
  )
}
