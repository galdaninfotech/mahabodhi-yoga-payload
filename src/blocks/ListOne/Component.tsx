import React from 'react'
import type { ListOneBlock as ListOneBlockProps } from '@/payload-types'

export const ListOne: React.FC<ListOneBlockProps> = (props) => {
  const { lists, marginTop, marginLeft, space } = props

  const space1 = '100px';

  return (
    <div className="list-one-block">
      {lists && lists.length > 0 ? (
        <div className="text-gray-700">
          <ul className="flex flex-col" style={{ marginTop: `${marginTop}`, marginLeft: `${marginLeft}` }}>
            {lists.map((list, index) => (
              <li key={index} className="flex items-start justify-start" style={{ marginTop:`${space}` }}>
                <span className="left-number text-[darkred] text-xs mr-3" style={{ fontFamily: 'Oswald', marginTop: '5px' }}>{String(index + 1).padStart(2, '0')}</span>
                <div className="flex flex-col">
                  { list.title && <span className="text-[15px]/6 text-gray-600 tracking-normal" style={{ fontFamily: 'Oswald' }}>{list.title}</span> }
                  <p className="text-xs/6 text-gray-700">{list.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}