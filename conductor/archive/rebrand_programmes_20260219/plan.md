# Plan: UI/UX Terminology Update to "Programmes"

## Phase 1: Discovery and Routing Setup [checkpoint: 1ed96b0]
- [x] Task: Identify all user-facing strings containing "Product", "Products", and "Shop" using `grep`
- [x] Task: Map out all Next.js routes and components related to the `/products` path
- [x] Task: Conductor - User Manual Verification 'Discovery and Routing Setup' (Protocol in workflow.md)

## Phase 2: Backend Label Updates
- [x] Task: Update labels (singular/plural) in `src/collections/Products/index.ts`
- [x] Task: Verify the Payload Admin UI sidebar and collection view reflect "Programmes"
- [x] Task: Conductor - User Manual Verification 'Backend Label Updates' (Protocol in workflow.md)

## Phase 3: Frontend Terminology and URL Migration [checkpoint: 83ec01e]
- [x] Task: Write failing tests for:
    - 301 Redirect from `/products` to `/programmes`
    - Terminology presence on the `/programmes` page
- [x] Task: Update the base route directory from `src/app/(app)/products` to `src/app/(app)/programmes` (if applicable)
- [x] Task: Update global components (Header, Footer, Navigation) with "Programmes" labels
- [x] Task: Update transactional components (Cart, Checkout, Orders) terminology
- [x] Task: Configure permanent redirects in `next.config.js` or `redirects.js`
- [x] Task: Run tests and confirm they pass (Green Phase)
- [x] Task: Conductor - User Manual Verification 'Frontend Terminology and URL Migration' (Protocol in workflow.md)

## Phase 4: Final Verification
- [x] Task: Verify the complete user flow from navigation to checkout uses "Programmes"
- [x] Task: Verify SEO redirects are functioning correctly
- [x] Task: Conductor - User Manual Verification 'Final Verification' (Protocol in workflow.md)
