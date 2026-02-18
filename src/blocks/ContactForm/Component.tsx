import { ContactFormClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { SambodhiRetreatCentre, ContactFormBlock } from '@/payload-types'

export async function ContactForm(props: ContactFormBlock) {
  const sambodhiRetreatCentreData: SambodhiRetreatCentre = await getCachedGlobal( 'sambodhiRetreatCentre', 1, )()

  return <ContactFormClient {...props} sambodhiRetreatCentreData={sambodhiRetreatCentreData} />
}
