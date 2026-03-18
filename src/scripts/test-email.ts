import 'dotenv/config'
import { getPayload } from 'payload'

import config from '../payload.config'

const recipient = 'galdaninfotech@gmail.com'

const main = async () => {
  const payload = await getPayload({ config })

  try {
    const result = await payload.sendEmail({
      to: recipient,
      subject: 'Payload SMTP test',
      html: `
        <div style="font-family: sans-serif; padding: 24px;">
          <h1>Payload SMTP Test</h1>
          <p>This is a test email sent from the Yoga Ecommerce project.</p>
          <p>If you received this, SMTP delivery from Payload is working at handoff level.</p>
        </div>
      `,
    })

    console.log('Email send result:', result == null ? null : JSON.stringify(result, null, 2))
    process.exit(0)
  } catch (error) {
    console.error('Email send failed:', error)
    process.exit(1)
  }
}

void main()
