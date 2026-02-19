# Newsletter Management System

Welcome to the Newsletter Management System documentation. This system is designed to provide a robust, automated way to manage your audience and communicate with them through professional newsletters.

## System Overview

The system is built directly into your Admin Panel and consists of four main collections:

1.  **Newsletters**: Create, design, and send your content.
2.  **Subscribers**: Manage your audience and their active status.
3.  **Subscriber Groups**: Segment your audience for targeted messaging.
4.  **Newsletter Logs**: Track the delivery status of every email sent.

## Core Workflow

1.  **Audience Growth**: Users sign up via the frontend subscription block. New sign-ups are **Inactive** by default.
2.  **Review**: Admins review new subscribers and toggle their **Active** status.
3.  **Segmentation**: Assign subscribers to specific groups (e.g., "General", "Yoga Students").
4.  **Content Creation**: Draft a newsletter using the professional block editor.
5.  **Delivery**: Send the newsletter to a specific group or individuals. The system automatically filters out inactive subscribers and prevents duplicate sends.
6.  **Monitoring**: Review the logs to ensure successful delivery.

## Navigation

- [Managing Subscribers & Groups](./subscribers.md)
- [Creating & Sending Newsletters](./newsletters.md)
- [Understanding Logs & Delivery](./logs.md)
- [Frontend Integration](./frontend.md)

## Testing & Growth

To ensure the system remains stable as it grows, we have implemented comprehensive tests:

### Integration Tests
Focus on core logic, active status defaults, and sending rules.
- **File**: `tests/int/newsletter.int.spec.ts`
- **Run**: `pnpm test:int` (using Vitest)

### E2E Tests
Focus on the full user journey from sign-up to admin delivery.
- **File**: `tests/e2e/newsletter.e2e.spec.ts`
- **Run**: `pnpm test:e2e` (using Playwright)
