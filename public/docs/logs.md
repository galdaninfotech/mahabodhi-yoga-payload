# Understanding Logs & Delivery

Transparency is key to a reliable email system. The **Newsletter Logs** collection provides a complete history of your communication.

## Newsletter Logs

Every single email attempt is recorded here.

### Tracking a Send:
- **Newsletter**: Which content was sent.
- **Subscriber**: Who it was sent to.
- **Sent At**: The exact timestamp of the delivery attempt.
- **Status**: 
    - **Success**: The email was handed off to the mail server successfully.
    - **Failed**: Something went wrong.
- **Error Message**: If a send fails, the specific error (like an invalid email address) is recorded here for troubleshooting.

## Viewing History

### By Newsletter:
Within each Newsletter record, you can view a "Sent History" tab. This filtered view shows you exactly who has received that specific newsletter.

### By Subscriber:
Within each Subscriber record, you can view a "History" tab. This shows you every newsletter that specific person has ever been sent.

## Deliverability Tips
- Periodically check the logs for **Failed** statuses.
- If you see multiple failures for the same email address, consider marking that subscriber as **Inactive** to maintain your sender reputation.
