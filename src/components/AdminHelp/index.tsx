'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { HelpCircle, X, Download, GripVertical } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { getHelpFile } from '@/admin/helpConfig'
import ReactMarkdown from 'react-markdown'
import GithubSlugger from 'github-slugger'

const flattenText = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(flattenText).join('')
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return flattenText(node.props.children)
  }
  return ''
}

const toEmbeddableUrl = (rawPath: string): string => {
  const trimmed = rawPath.trim()
  if (!/^https?:\/\//i.test(trimmed)) return encodeURI(trimmed)

  try {
    const url = new URL(trimmed)
    const parts = url.pathname.split('/').filter(Boolean)

    if (url.hostname === 'docs.google.com' && parts.length >= 3) {
      const [kind, marker, id] = parts
      if (marker === 'd' && id) {
        if (kind === 'document') return `https://docs.google.com/document/d/${id}/preview`
        if (kind === 'spreadsheets') return `https://docs.google.com/spreadsheets/d/${id}/preview`
        if (kind === 'presentation') return `https://docs.google.com/presentation/d/${id}/embed`
      }
    }
  } catch {
    return trimmed
  }

  return trimmed
}

const HEADER_HEIGHT = 120; // px
const MIN_SHEET_WIDTH = 250
const MIN_LEFT_GUTTER = 50
const MOBILE_BREAKPOINT = 768

const AdminHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mdContent, setMdContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [toc, setToc] = useState<{ level: number; text: string; id: string }[]>([])
  const [width, setWidth] = useState(800)
  const [isResizingActive, setIsResizingActive] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(1200)
  const [mounted, setMounted] = useState(false)
  const isResizing = useRef(false)
  const resizeStartX = useRef(0)
  const resizeStartWidth = useRef(800)
  const pathname = usePathname()
  const helpFile = getHelpFile(pathname)
  const isExternal = /^https?:\/\//i.test(helpFile.filePath)
  const contentUrl = toEmbeddableUrl(helpFile.filePath)
  const filePathLower = contentUrl.toLowerCase()
  const isPdf = filePathLower.endsWith('.pdf') || helpFile.type === 'pdf'
  const isMarkdown = !isExternal && (filePathLower.endsWith('.md') || (helpFile.type === 'md' && !isPdf))
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    setViewportWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isMobileViewport = viewportWidth < MOBILE_BREAKPOINT
  const sheetWidth = isMobileViewport ? viewportWidth : width
  const contentPadding = isMobileViewport ? '16px' : '40px 60px'
  const headerPadding = isMobileViewport ? '20px 16px' : '30px 40px'

  useEffect(() => {
    if (isMobileViewport) return
    const maxWidth = viewportWidth - MIN_LEFT_GUTTER
    setWidth((prev) => Math.min(Math.max(prev, MIN_SHEET_WIDTH), maxWidth))
  }, [isMobileViewport, viewportWidth])

  useEffect(() => {
    if (!isMarkdown || !isOpen || loading || !scrollContainerRef.current) {
      if (!isOpen) setToc([])
      return
    }

    const rafId = window.requestAnimationFrame(() => {
      const headings = Array.from(
        scrollContainerRef.current?.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]') || [],
      )
      const nextToc = headings.map((el) => ({
        level: Number(el.tagName[1]),
        text: (el.textContent || '').trim(),
        id: el.id,
      }))
      setToc(nextToc)
    })

    return () => window.cancelAnimationFrame(rafId)
  }, [isOpen, loading, mdContent, isMarkdown])

  const handleTocClick = (id: string) => {
    const container = scrollContainerRef.current
    if (!container) return;

    const element = container.querySelector(`[id="${id}"]`) as HTMLElement;
    if (element) {
      const targetPos = element.offsetTop - 30;
      container.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  }

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing.current) return
    const deltaX = e.clientX - resizeStartX.current
    const nextWidth = resizeStartWidth.current - deltaX
    const maxWidth = window.innerWidth - MIN_LEFT_GUTTER
    const clampedWidth = Math.min(Math.max(nextWidth, MIN_SHEET_WIDTH), maxWidth)
    setWidth(clampedWidth)
  }, [])

  const stopResizing = useCallback(() => {
    isResizing.current = false
    setIsResizingActive(false)
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', stopResizing)
    document.body.style.cursor = 'default'
    document.body.style.userSelect = ''
  }, [handleMouseMove])

  const startResizing = useCallback((e: React.MouseEvent) => {
    if (isMobileViewport) return
    e.preventDefault()
    isResizing.current = true
    resizeStartX.current = e.clientX
    resizeStartWidth.current = width
    setIsResizingActive(true)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', stopResizing)
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [handleMouseMove, isMobileViewport, stopResizing, width])

  useEffect(() => {
    if (!isOpen) return

    if (isMarkdown) {
      setLoading(true)
      fetch(contentUrl)
        .then(res => res.text())
        .then(text => setMdContent(text))
        .catch(() => setMdContent('# Error\nFailed to load help document.'))
        .finally(() => setLoading(false))
      return
    }

    setMdContent(null)
    setToc([])
    setLoading(false)
  }, [isOpen, contentUrl, isMarkdown])
  
  if (!mounted) return null
  
  const renderSlugger = new GithubSlugger()

  const HeadingRenderer = ({
    level,
    children,
    ...props
  }: {
    level: number
    children?: React.ReactNode
  } & React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = flattenText(children)
    const id = renderSlugger.slug(text);
    const headingTags: Record<number, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6',
    }
    const Tag = headingTags[level] ?? 'h6'
    return <Tag id={id} className="scroll-mt-32" {...props}>{children}</Tag>;
  };

  const sheet = (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: `${sheetWidth}px`,
            height: '100vh',
            backgroundColor: 'white',
            boxShadow: '-10px 0 50px rgba(0,0,0,0.2)',
            zIndex: 2147483647,
            borderLeft: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {!isMobileViewport && (
            <div
              onMouseDown={startResizing}
              title="Drag to resize"
              aria-label="Resize help panel"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '14px',
                height: '100%',
                cursor: 'col-resize',
                zIndex: 20,
                background: 'linear-gradient(to right, rgba(0,0,0,0.08), rgba(0,0,0,0.02), transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '999px',
                  padding: '4px 0',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                }}
              >
                <GripVertical size={14} className="text-gray-500" />
              </div>
            </div>
          )}
          
          <header style={{ height: `${HEADER_HEIGHT}px`, padding: headerPadding, borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h2 className="text-xl font-extrabold truncate text-gray-900">{helpFile.title}</h2>
              <p className="text-[10px] uppercase tracking-widest font-black text-red-700 mt-1">Documentation</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '24px' }}>
              <a
                href={contentUrl}
                download={isExternal ? undefined : ''}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full hover:bg-gray-100"
              >
                <Download size={18} />
              </a>
              <button onClick={() => setIsOpen(false)} className="p-3 rounded-full hover:bg-red-50"><X size={20} /></button>
            </div>
          </header>

          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            {isMarkdown && toc.length > 0 && (
              <div style={{ borderBottom: '1px solid #e5e7eb', padding: isMobileViewport ? '10px 12px' : '12px 24px', overflowY: 'auto', flexShrink: 0, maxHeight: '180px' }}>
                <nav style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                  {toc.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleTocClick(item.id)}
                      className="whitespace-nowrap rounded-full border border-gray-200 px-3 py-1 text-xs hover:border-red-300 hover:text-red-700"
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            )}
            <div
              ref={scrollContainerRef}
              style={{
                flex: 1,
                overflowY: isMarkdown ? 'auto' : 'hidden',
                padding: isMarkdown ? contentPadding : 0,
                position: 'relative',
              }}
            >
              <div style={{ minHeight: '100%', height: '100%' }}>
                {loading ? (
                  <div>Loading...</div>
                ) : isPdf || isExternal ? (
                  <iframe
                    key={contentUrl}
                    src={contentUrl}
                    title={helpFile.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      pointerEvents: isResizingActive ? 'none' : 'auto',
                    }}
                  />
                ) : (
                  <div className="prose-help">
                    <ReactMarkdown
                      components={{
                        h1: (props) => <HeadingRenderer level={1} {...props} />,
                        h2: (props) => <HeadingRenderer level={2} {...props} />,
                        h3: (props) => <HeadingRenderer level={3} {...props} />,
                        h4: (props) => <HeadingRenderer level={4} {...props} />,
                        h5: (props) => <HeadingRenderer level={5} {...props} />,
                        h6: (props) => <HeadingRenderer level={6} {...props} />,
                      }}
                    >
                      {mdContent || ''}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <HelpCircle size={22} className="text-gray-500 hover:text-red-700" />
      </button>
      {mounted && createPortal(sheet, document.body)}
    </>
  )
}

export default AdminHelp
