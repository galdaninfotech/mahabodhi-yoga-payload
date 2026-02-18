import React from 'react'

import type { YouTubeVideoBlock } from 'src/payload-types'

type Props = Omit<YouTubeVideoBlock, 'blockType' | 'blockName' | 'id'>

export const YouTubeVideoComponent: React.FC<Props> = ({ enabled, videoId: rawVideoId, title, className }) => {
  // console.log('YouTubeVideoComponent received props:', { enabled, rawVideoId, title, className })

  // If the block is explicitly disabled, return null
  if (enabled === false) {
    // console.log('YouTubeVideoComponent returning null because it is disabled.')
    return null
  }

  // Extract the pure video ID, removing any query parameters
  const videoIdMatch = rawVideoId?.match(/([a-zA-Z0-9_-]{11})/)
  const videoId = videoIdMatch ? videoIdMatch[1] : null

  if (!videoId) {
    // console.log('YouTubeVideoComponent returning null because videoId could not be extracted or was missing.')
    return null
  }

  return (
    <>
      {title && <h2 className='mb-8' style={{ fontFamily: '"Big Shoulders Display", sans-serif' }}>{ title }</h2>}
      <div className={`w-full aspect-video ${className || ''}`}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </>
  )
}