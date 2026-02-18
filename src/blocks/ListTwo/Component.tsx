import React from 'react'
import type { ListTwoBlock as ListTwoBlockProps } from '@/payload-types'
import { FaDharmachakra } from "react-icons/fa6";

export const ListTwo: React.FC<ListTwoBlockProps> = (props) => {
  const { lists, marginTop, marginLeft, space } = props
  // console.log(lists)

  return (
    <div className="list-two-block">
      {lists && lists.length > 0 ? (
        <div className="text-gray-700 my-6">
          <ul className="flex flex-col gap-1" style={{ marginTop: `${marginTop}`, marginLeft: `${marginLeft}` }}>
            {lists.map((list, index) => (
              <li key={index} className="flex items-start justify-start" style={{ marginTop:`${space}` }}>
                <span style={{ marginTop: '4px' }}>
                  <FaDharmachakra color="#ff5300" className='mt-0.5' />
                </span>
                <div className="flex flex-col ml-4">
                  { list.title && <span className="text-[14px]/6 text-gray-700 tracking-wider" style={{ fontFamily: 'Oswald' }}>{list.title}</span> }
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