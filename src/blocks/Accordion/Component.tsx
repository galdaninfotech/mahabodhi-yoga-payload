import { RichText } from '@/components/RichText'
import type { AccordionBlock as AccordionBlockProps } from '@/payload-types'
import React from 'react'

export const Accordion: React.FC<AccordionBlockProps> = (props) => {
  const { accordion } = props

  return (
    <div className="container p-4 bg-light">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {accordion?.map((item, index) => (
          <div key={index} className="accordion-item rounded-3 border-0 shadow mb-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button border-bottom collapsed fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse-${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse-${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`flush-collapse-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="text-gray-700 my-6">
                  <RichText data={item.content as any} enableGutter={false} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
