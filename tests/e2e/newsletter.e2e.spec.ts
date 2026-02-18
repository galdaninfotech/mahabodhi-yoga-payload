import { test, expect, Page } from '@playwright/test'

test.describe('Newsletter Management System E2E', () => {
  const baseURL = 'http://localhost:3001'
  const adminEmail = 'admin-newsletter@test.com'
  const adminPassword = 'password'

  test.beforeAll(async ({ request }) => {
    console.log('Ensuring admin user exists...')
    await request.post(`${baseURL}/api/users`, {
      data: {
        email: adminEmail,
        password: adminPassword,
        roles: ['admin'],
      },
    }).catch(() => {})
  })

  test('Guest can subscribe and appears as inactive in Admin', async ({ page }) => {
    console.log('Test: Guest can subscribe...')
    await page.goto(baseURL)
    
    const testEmail = `test-e2e-${Date.now()}@example.com`
    const emailInput = page.locator('input[type="email"]').first()
    await emailInput.fill(testEmail)
    
    await page.getByRole('button', { name: /Subscribe/i }).click()
    await page.waitForTimeout(2000) 

    await loginFromUI(page, adminEmail, adminPassword)
    await page.goto(`${baseURL}/admin/collections/subscribers`)
    
    await page.waitForSelector('table')
    const subscriberRow = page.locator('tr', { hasText: testEmail })
    await expect(subscriberRow).toBeVisible()
    
    const activeCell = subscriberRow.locator('td.cell-active')
    await expect(activeCell).toContainText('false', { ignoreCase: true })
    console.log('Verified subscriber is inactive in Admin.')
  })

  test('Admin cannot see Send button enabled for Draft newsletters', async ({ page }) => {
    console.log('Test: Admin Draft check...')
    await loginFromUI(page, adminEmail, adminPassword)
    
    await page.goto(`${baseURL}/admin/collections/newsletters/create`)
    await page.getByRole('textbox', { name: /Title/i }).fill('Draft Test Newsletter')
    
    await page.locator('#action-save').click()
    await page.waitForTimeout(3000)
    
    // Verify status is Draft
    await expect(page.locator('main').getByText('Draft')).toBeVisible()
    
    const sendButton = page.getByRole('button', { name: 'Send', exact: true })
    await expect(sendButton).toBeDisabled()
    
    console.log('Verified Send button is disabled for drafts.')
  })

  test('Admin can activate subscriber and Send published newsletter', async ({ page }) => {
    console.log('Test: Admin Send workflow...')
    await loginFromUI(page, adminEmail, adminPassword)
    
    const testEmail = `active-test-${Date.now()}@example.com`
    await page.goto(`${baseURL}/admin/collections/subscribers/create`)
    await page.getByRole('textbox', { name: /Email/i }).fill(testEmail)
    
    // Toggle active
    await page.locator('label[for="field-active"]').click()
    await page.locator('#action-save').click()
    await page.waitForTimeout(3000)

    await page.goto(`${baseURL}/admin/collections/newsletters/create`)
    await page.getByRole('textbox', { name: /Title/i }).fill('Published Test Newsletter')
    
    // First save as draft
    await page.locator('#action-save').click() 
    await page.waitForTimeout(3000)
    
    // Specifically click "Publish changes" to move out of Draft
    const publishButton = page.getByRole('button', { name: /Publish changes/i })
    await publishButton.click()
    
    // Wait for status to change to Published
    await expect(page.locator('main').getByText('Published')).toBeVisible({ timeout: 10000 })
    
    // Reload to ensure all UI states (like the Send button) are refreshed
    await page.reload()
    await page.waitForTimeout(3000)
    
    const sendButton = page.getByRole('button', { name: 'Send', exact: true })
    await expect(sendButton).toBeEnabled({ timeout: 10000 })
    await sendButton.click()
    
    await expect(page.locator('h3:has-text("Send Newsletter")')).toBeVisible()
    await page.getByRole('button', { name: /Send to/i }).click()
    
    await page.waitForTimeout(3000)
    
    await page.goto(`${baseURL}/admin/collections/newsletter-logs`)
    await expect(page.locator(`tr:has-text("${testEmail}")`)).toBeVisible()
    console.log('Verified log entry created.')
  })

  async function loginFromUI(page: Page, email: string, password: string) {
    await page.goto(`${baseURL}/admin/login`)
    if (page.url().includes('/login')) {
      await page.getByRole('textbox', { name: /Email/i }).fill(email)
      await page.getByRole('textbox', { name: /Password/i }).fill(password)
      await page.getByRole('button', { name: /Login/i }).click()
      await page.waitForURL(url => !url.href.includes('/login'))
    }
  }
})
