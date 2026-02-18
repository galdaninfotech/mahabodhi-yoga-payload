import { RegistrationFormClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { SambodhiRetreatCentre, RegistrationFormBlock } from '@/payload-types'

export async function RegistrationForm(props: RegistrationFormBlock) {
  const sambodhiRetreatCentreData: SambodhiRetreatCentre = await getCachedGlobal('sambodhiRetreatCentre', 1)()

  return <RegistrationFormClient {...props} sambodhiRetreatCentreData={sambodhiRetreatCentreData} />
}