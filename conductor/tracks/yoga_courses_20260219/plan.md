# Plan: Transition to Yoga Courses and Retreats

## Phase 1: Discovery and Investigation
- [x] Task: Analyze existing `Products` collection schema and seeding logic in `src/endpoints/seed`
- [x] Task: Identify all legacy product records currently in the database
- [~] Task: Conductor - User Manual Verification 'Discovery and Investigation' (Protocol in workflow.md)

## Phase 2: Data Cleanup and Course Seeding
- [ ] Task: Write failing integration tests to verify:
    - Products collection is empty (pre-seed)
    - Products collection contains exactly 2 records (post-seed)
- [ ] Task: Implement logic to delete all existing documents in the `Products` collection
- [ ] Task: Implement seeding logic for 2 dummy yoga courses/retreats
- [ ] Task: Run tests and confirm they pass (Green Phase)
- [ ] Task: Conductor - User Manual Verification 'Data Cleanup and Course Seeding' (Protocol in workflow.md)

## Phase 3: Final Verification
- [ ] Task: Verify the 2 new courses appear correctly in the Payload Admin Panel
- [ ] Task: Verify the 2 new courses are rendered on the frontend `/products` page
- [ ] Task: Conductor - User Manual Verification 'Final Verification' (Protocol in workflow.md)
