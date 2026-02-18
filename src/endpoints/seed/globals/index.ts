import type { Payload, PayloadRequest } from 'payload'
import { headerData } from './header'
import { footerData } from './footer'
import { sambodhiRetreatCentreData } from './sambodhiRetreatCentre'
import { settingsData } from './settings'

export const seedGlobals = async ({ payload, req }: { payload: Payload; req: PayloadRequest }) => {
  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: await headerData({ req }),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: await footerData({ req }),
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'sambodhiRetreatCentre',
      data: sambodhiRetreatCentreData,
      context: {
        disableRevalidate: true,
      },
    }),
    payload.updateGlobal({
      slug: 'settings',
      data: settingsData,
      context: {
        disableRevalidate: true,
      },
    }),
  ])
}
