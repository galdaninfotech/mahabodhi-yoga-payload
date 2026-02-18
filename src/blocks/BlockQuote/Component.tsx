import React from 'react'
import type { BlockQuoteBlock as BlockQuoteBlockProps } from '@/payload-types'

export const BlockQuote: React.FC<BlockQuoteBlockProps> = (props) => {

  return (
    <>
      <div className="block-quote-block bg-white p-2 rounded-lg shadow-md">
        {props.enabled && (
          <>
            <div className="bg-white border-l-4 border-red-700 p-4 my-4">
              <blockquote className="flex items-start">
                <span className="text-6xl text-red-700 font-bold mr-4">&ldquo;</span>
                <p className="text-sm text-gray-800" style={{ fontFamily: 'Oswald, serif' }}>
                  {props.quote}
                </p>
              </blockquote>
              <footer className="text-right text-xs text-gray-500 mt-2">
                <span className="italic">{props.author}</span>
              </footer>
            </div>  
          </>
        )}
      </div>
    </>
  )
}