import React from 'react'
import type { ParagraphOneBlock as ParagraphOneBlockProps } from '@/payload-types'

export const ParagraphOne: React.FC<ParagraphOneBlockProps> = (props) => {
  const { content } = props

  return (
    <div className="paragraph-one-block">
      {content && (
        <div>
          <p className="text-xs/6 text-gray-700 my-6">{content}</p>
        </div>
      )}
    </div>
  )
}