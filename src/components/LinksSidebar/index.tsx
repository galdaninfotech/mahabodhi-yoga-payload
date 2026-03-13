import React from 'react'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { CMSLink } from '@/components/Link'

export async function LinksSidebar() {
  const linksSidebar = await getCachedGlobal('links-sidebar', 1)()

  if (!linksSidebar) return null

  return (
    <aside className="space-y-6 mt-20">
      {linksSidebar.title && (
        <div className="space-y-1">
          <h3 className="font-oswald text-lg uppercase border-b border-slate-200 tracking-widest text-slate-900" style={{color: '#d19a4a', fontSize: '20px', fontFamily: 'Big Shoulders Display'}}>
            {linksSidebar.title}
          </h3>
          <div className="w-12 h-1 bg-primary" />
        </div>
      )}

      {linksSidebar.links && linksSidebar.links.length > 0 && (
        <nav className="flex flex-col space-y-4 -mt-2">
          {linksSidebar.links.map((linkItem, index) => (
            <CMSLink 
              key={index} 
              {...linkItem.link} 
              className="font-oswald text-md uppercase leading-tight !text-slate-600 hover:text-primary transition-colors" 
            />
          ))}
        </nav>
      )}
    </aside>
  )
}
