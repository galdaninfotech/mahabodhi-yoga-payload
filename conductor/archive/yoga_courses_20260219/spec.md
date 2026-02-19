# Track Specification: Transition to Yoga Courses and Retreats

## Overview
Sambodhi Retreat Centre is moving away from selling physical products to offering exclusively yoga courses and meditation retreats. This track focuses on cleaning up the existing product data and seeding the system with two initial course offerings using the existing Payload CMS ecommerce plugin structure.

## Functional Requirements
1.  **Data Cleanup:**
    *   Programmatically or via seeding, delete all existing records/documents within the `Products` collection.
2.  **Initial Seeding:**
    *   Create two new records in the `Products` collection to represent the initial yoga offerings.
    *   Use placeholder/dummy data for:
        *   Title (e.g., "7-Day Silent Meditation Retreat", "Beginner Hatha Yoga Course")
        *   Description
        *   Price
        *   Associated Categories/Images (if required by the plugin)
3.  **Plugin Preservation:**
    *   Ensure NO structural changes are made to the collections or fields provided by the Payload ecommerce plugin.
    *   The behavior of the ecommerce plugin must remain intact.

## Non-Functional Requirements
*   **Data Integrity:** The deletion process should only affect records, not the schema.
*   **Consistency:** The new records must adhere to the existing field requirements of the `Products` collection to avoid frontend or backend errors.

## Acceptance Criteria
- [ ] The `Products` collection contains zero legacy product records.
- [ ] Exactly two new records representing yoga offerings are visible in the Payload CMS admin panel.
- [ ] The two new offerings are correctly rendered on the frontend "Products" page.
- [ ] No changes have been made to the UI labels or navigation (remains "Products").
- [ ] The ecommerce plugin continues to function without errors.

## Out of Scope
*   Modifying the schema of the `Products` collection.
*   Renaming UI labels, navigation items, or page headers.
*   Deleting categories or other related ecommerce collections (unless necessary to remove legacy product associations).
