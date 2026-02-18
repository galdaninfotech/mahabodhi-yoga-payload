import React from 'react'

import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'

export const LowImpactHero: React.FC<Page['hero']> = ({ media }) => {
  return (
    <div className="relative w-full h-[40vh] min-h-100">
      {media && typeof media === 'object' && (
        <Media fill imgClassName="object-cover" priority resource={media} />
      )}
    </div>
  )
}
