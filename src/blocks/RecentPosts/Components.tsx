'use client'
import React, { useEffect, useState } from 'react'
import type { RecentPosts as RecentPostsBlock, Post } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'

export const RecentPosts: React.FC<RecentPostsBlock> = (props) => {
  const { limit, categories } = props
  const [posts, setPosts] = useState<Post[]>([])
  const postsArray = Array.isArray(posts) ? posts : [posts]

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)
      try {
        const queryParams = new URLSearchParams()
        if (limit) {
          queryParams.append('limit', String(limit))
        }

        if (categories && categories.length > 0) {
          const categoryIds = categories
            .map((cat) => (typeof cat === 'object' ? cat.id : cat))
            .join(',')
          if (categoryIds) {
            queryParams.append('where[categories][in]', categoryIds)
          }
        }

        const url = `/api/posts?${queryParams.toString()}`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setPosts(data.docs)
      } catch (err: any) {
        setError(err.message)
        console.error('Failed to fetch tour posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [limit, categories])

  if (loading) {
    return <div>Loading recent tours...</div>
  }

  if (error) {
    return <div>Error loading tours: {error}</div>
  }

  // Helper function to extract plain text from Payload's richText object
const getPlainTextExcerpt = (richText: any): string => {
    if (
      !richText ||
      typeof richText !== 'object' ||
      !richText.root ||
      !Array.isArray(richText.root.children)
    ) {
      return 'No description available.'
    }

    let text = ''

    // Recursive function to traverse the node tree
    const traverse = (nodes: any[]) => {
      if (!nodes || !Array.isArray(nodes)) {
        return
      }

      for (const node of nodes) {
        if (node.type === 'text' && typeof node.text === 'string') {
          text += node.text + ' '
        }

        if (node.children && Array.isArray(node.children)) {
          traverse(node.children)
        }
      }
    }

    traverse(richText.root.children)

    const trimmedText = text.trim()
    if (trimmedText.length === 0) {
      return 'No description available.'
    }

    return trimmedText.length > 150 ? trimmedText.substring(0, 150) + '...' : trimmedText
  }

  // console.log(posts)
  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '2em', marginBottom: '30px' }}>LATEST NEWS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsArray.map((post) => {
          const imageUrl =
            post.heroImage && typeof post.heroImage === 'object' && 'url' in post.heroImage
              ? (post.heroImage.url as string)
              : ''
          const postTitle = post.title || ''
          const publishedDate = post.publishedAt ? new Date(post.publishedAt) : null

          return (
            <div
              key={post.id}
              style={{
                border: '1px solid #eee',
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '15px',
                  fontSize: '0.0em',
                  color: '#999',
                }}
              >
                {imageUrl ? (
                  <Link href={`/posts/${post.slug}`}>
                    <Image src={imageUrl} alt={postTitle} width={150} height={150} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Link>
                ) : (
                  <span>No Image</span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                {publishedDate && (
                  <div style={{ backgroundColor: '#ff5300', color: 'white', padding: '8px 12px', textAlign: 'center', marginRight: '15px', }} >
                    <div style={{ fontSize: '0.8em', fontWeight: 'bold', lineHeight: 1 }}> {publishedDate.getDate()} </div>
                    <div style={{ fontSize: '0.6em', textTransform: 'uppercase' }}>
                      {publishedDate.toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                )}
                <Link href={`/posts/${post.slug}`}>
                  <h3 style={{ margin: 0, fontSize: '0.8em', fontFamily: 'Oswald', textTransform: 'uppercase', }} > {postTitle} </h3>
                </Link>
              </div>
              <p style={{ fontSize: '0.7em', color: '#555', flexGrow: 1, marginBottom: '5px' }}>
                {getPlainTextExcerpt(post.content)}
              </p>

              <Link className='text-[12px] uppercase font-oswald text-right' style={{fontFamily: 'Oswald'}} href={`/posts/${post.slug}`}>Read More</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
