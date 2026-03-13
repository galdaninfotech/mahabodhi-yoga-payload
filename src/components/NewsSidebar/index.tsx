import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { formatDateTime } from '@/utilities/formatDateTime'
import { ChevronRight } from 'lucide-react'

export async function NewsSidebar() {
  const newsSidebar = await getCachedGlobal('news-sidebar', 1)()
  const payload = await getPayload({ config: configPromise })

  if (!newsSidebar) return null

  const { docs: latestPosts } = await payload.find({
    collection: 'posts',
    limit: newsSidebar.limit || 5,
    sort: '-publishedAt',
    depth: 1,
    where: {
      _status: {
        equals: 'published',
      },
    },
  })

  // Helper function to extract plain text from Payload's richText object
  const getPlainTextExcerpt = (richText: any): string => {
    if (!richText?.root?.children) return ''
    
    let text = ''
    const traverse = (nodes: any[]) => {
      nodes.forEach(node => {
        if (node.type === 'text') text += node.text + ' '
        if (node.children) traverse(node.children)
      })
    }
    
    traverse(richText.root.children)
    const trimmed = text.trim()
    return trimmed.length > 120 ? trimmed.substring(0, 120) + '...' : trimmed
  }

  return (
    <aside className="space-y-10">
      {newsSidebar.title && (
        <div className="space-y-1">
          <h3 className="font-big-shoulders text-sm uppercase border-b border-slate-200 tracking-widest text-slate-900" style={{color: '#d19a4a', fontSize: '20px', fontFamily: 'Big Shoulders Display'}}>
            {newsSidebar.title}
          </h3>
          <div className="w-12 h-1 bg-primary" />
        </div>
      )}

      <div className="flex flex-col space-y-4">
        {latestPosts.map((post) => (
          <div key={post.id} className="group border-b border-slate-100 pb-6 last:border-0 last:pb-0">
            <div className="flex flex-col space-y-2">              
              <Link 
                href={`/posts/${post.slug}`}
                className="font-big-shoulders text-xs uppercase leading-tight text-slate-900 group-hover:text-primary transition-colors"
                style={{color: '#000', fontSize: '15px', fontFamily: 'Big Shoulders Display', letterSpacing: '1px'}}
              >
                {post.title}
              </Link>

              {post.publishedAt && (
                <div className="flex items-center gap-2 justify-end">
                  <time className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                    {formatDateTime({ date: post.publishedAt || post.createdAt, format: 'MMMM dd, yyyy' })}
                  </time>
                </div>
              )}

              <p className="text-xs text-slate-500 line-clamp-4 leading-tight" style={{lineHeight: '20px'}}>
                {getPlainTextExcerpt(post.content)}
              </p>

              <Link 
                href={`/posts/${post.slug}`}
                className="inline-flex items-center justify-end text-[10px] uppercase tracking-tight font-bold text-primary group-hover:gap-2 transition-all"
              >
                Read More <ChevronRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link 
        href="/posts"
        className="block w-full py-4 border border-slate-200 text-center font-big-shoulders text-xs uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
      >
        View All Stories
      </Link>
    </aside>
  )
}
