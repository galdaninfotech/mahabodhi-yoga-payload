import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CarouselBlock } from '@/blocks/Carousel/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ThreeItemGridBlock } from '@/blocks/ThreeItemGrid/Component'

import { AboutUsBlock as AboutUsBlockComponent } from '@/blocks/AboutUs/Component'
import { Accordion } from '@/blocks/Accordion/Component'
import { Address } from '@/blocks/Address/Component'
import { BlockQuote } from '@/blocks/BlockQuote/Component'
import { ClientTestimonials } from '@/blocks/ClientTestimonials/Component'
import { ContactForm } from '@/blocks/ContactForm/Component'
import { ContentWithMedia } from '@/blocks/ContentWithMedia/Component'
import { Gallery } from '@/blocks/Gallery/Component'
import { ListOne } from '@/blocks/ListOne/Component'
import { ListTwo } from '@/blocks/ListTwo/Component'
import { NewsletterSubscription } from '@/blocks/NewsletterSubscription/Component'
import { ParagraphOne } from '@/blocks/ParagraphOne/Component'
import { RecentPosts } from '@/blocks/RecentPosts/Components'
import { RegistrationForm } from '@/blocks/RegistrationForm/Component'
import { YouTubeVideoComponent } from '@/blocks/YouTubeVideo/Component'

import { toKebabCase } from '@/utilities/toKebabCase'
import React, { Fragment } from 'react'

import type { Page } from '../payload-types'

const blockComponents = {
  archive: ArchiveBlock,
  banner: BannerBlock,
  carousel: CarouselBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  threeItemGrid: ThreeItemGridBlock,
  contentWithMedia: ContentWithMedia,
  recentPosts: RecentPosts,
  clientTestimonials: ClientTestimonials,
  newsletterSubscription: NewsletterSubscription,
  contactForm: ContactForm,
  listOne: ListOne,
  listTwo: ListTwo,
  paragraphOne: ParagraphOne,
  blockQuote: BlockQuote,
  address: Address,
  registrationForm: RegistrationForm,
  aboutUs: AboutUsBlockComponent,
  accordion: Accordion,
  gallery: Gallery,
  youTubeVideo: YouTubeVideoComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore - weird type mismatch here */}
                  <Block id={toKebabCase(blockName!)} {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
