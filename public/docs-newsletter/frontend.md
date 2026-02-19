# Frontend Integration

The Newsletter Management System is seamlessly integrated with your public website through a dedicated subscription block.

## Newsletter Subscription Block

You can add this block to any page (usually the Home page or Footer) to capture new leads.

### Configuration Options:
- **Title & Subtitle**: Customize the call-to-action text.
- **Description**: Add a detailed explanation of why users should subscribe.
- **Show Name Field**: A toggle to decide if you want to capture just the email or both the name and email.
- **Media**: Add an optional professional image to be displayed alongside the form.

### Subscriber Experience:
1. The user enters their details and clicks "Subscribe Now".
2. The system validates the email address.
3. If it's a new email, a record is created in the **Subscribers** collection with an **Inactive** status.
4. The user sees a success message: "Thank you for subscribing!".

### Why are they inactive by default?
To protect your site from spam and ensure you have a high-quality list, we set new sign-ups to inactive. This gives you the control to approve subscribers before they start receiving your content.
