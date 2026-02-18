import type { Footer } from '@/payload-types'

import React from 'react'

interface Props {
  about: Footer['about']
}

export function FooterAbout({ about }: Props) {
  if (about === undefined) return null

  return (
    <>
      <p>{about.description}</p>
    </>
  )
}
