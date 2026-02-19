# Track Specification: UI/UX Terminology Update to "Programmes"

## Overview
This track focuses on a comprehensive terminology update across the entire application. All instances of "Products" and "Shop" will be rebranded as "Programmes" to better align with Sambodhi Retreat Centre's core mission of offering yoga courses and meditation retreats. This includes updates to the Payload CMS admin panel, the frontend navigation, page content, and URL structures.

## Functional Requirements
1.  **Backend (Payload CMS) Updates:**
    *   Update the `Products` collection labels (singular and plural) in `src/collections/Products/index.ts` to "Programme" and "Programmes".
    *   Ensure the sidebar and admin UI reflect these new labels.
2.  **Frontend Terminology Replacement:**
    *   Update labels in the main navigation (Header/Footer).
    *   Update page headers, breadcrumbs, and button text (e.g., "Add to Cart" remains, but "Back to Shop" becomes "Back to Programmes").
    *   Update transactional UI components (Cart, Checkout, Order Summary) to use "Programme" where appropriate.
3.  **Routing and Slug Updates:**
    *   Change the base route from `/products` to `/programmes`.
    *   Update `slug` field generation logic or prefixes if any.
    *   Implement 301 redirects in `redirects.js` (or Next.js config) from `/products` to `/programmes` and `/products/[slug]` to `/programmes/[slug]`.

## Non-Functional Requirements
*   **SEO Preservation:** Use permanent redirects (301) to ensure search engine rankings and bookmarks are preserved.
*   **Consistency:** Every user-facing instance of "Product" must be identified and replaced to ensure a professional, unified experience.

## Acceptance Criteria
- [ ] Payload Admin Panel displays "Programmes" in the sidebar and collection headers.
- [ ] Main website navigation link is labeled "Programmes".
- [ ] Navigating to `/programmes` displays the list of courses/retreats with a "Programmes" header.
- [ ] Individual programme pages have correct breadcrumbs and titles.
- [ ] Entering `/products` in the browser automatically redirects to `/programmes`.
- [ ] Cart and Checkout flows use "Programme" terminology (e.g., "1 Programme in Cart").

## Out of Scope
*   Changing database table names (only labels and URLs are changed).
*   Changing internal variable names or code symbols (e.g., `Product` type in TypeScript remains `Product` to avoid massive refactoring, unless strictly necessary for the CMS label).
