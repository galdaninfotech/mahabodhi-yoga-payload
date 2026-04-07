# Newsletter Management: The Master Guide

This guide provides a comprehensive overview of the Newsletter Management System for the Mahabodhi Yoga Centre. It covers everything from audience management to the technical "engine" that handles your email delivery.

<br />
<br />

## 1. Audience Management

### Subscribers
The **Subscribers** collection is your primary database of recipients.

*   **Active vs. Inactive**: The system **only** sends emails to "Active" subscribers. New sign-ups are "Inactive" by default to allow for verification.
*   **Duplicate Prevention**: The system automatically ensures a subscriber never receives the same newsletter twice, even if they are in multiple groups or you click "Send" again.

<br />

### Subscriber Groups
**Groups** allow you to segment your audience (e.g., "Retreat Participants," "Local Students"). 

*   When sending a newsletter, you can target specific groups or the entire active list.

<br />
<br />

## 2. Designing & Creating Content

Every newsletter is built using a powerful block editor, allowing you to create rich, visually appealing layouts.

<br />

### Key Content Fields:
*   **Title**: The subject line of your email as it will appear in the recipient's inbox.
*   **Hero Image**: A featured image that appears at the top of the email.
*   **Content (Block Editor)**: A flexible rich-text editor where you can add:
    *   **Rich Text**: Standard formatting, headings, and lists.
    *   **Banners & Images**: High-quality visuals for engagement.
    *   **Call to Action (CTA)**: Buttons that link back to your website or registration forms.
*   **Upload PDF (Predesigned PDF)**: Optionally attach or link to a predesigned flyer or brochure. 
    *   The system automatically attaches this file to every email sent.
    *   **Technical Note**: Large PDFs may slightly slow down the sending process, as the server must process the file for every recipient.

<br />
<br />

## 3. The "Send" Process

Once your newsletter is ready and **Published**, you can initiate the delivery process.

<br />

### How to Send:
1.  Open the newsletter you want to send.
2.  Ensure its status is set to **Published**.
3.  Click the **Send Newsletter** button at the top of the page.
4.  Select your target:
    *   **Subscriber Group**: Send to everyone in a specific segment.
    *   **Specific Subscribers**: Choose individual people from your list.
5.  Click **Confirm Send**.

<br />
<br />

## 4. The Sending Engine (Behind the Scenes)

When you click the **"Confirm Send"** button, the system doesn't send the emails instantly. Instead, it places them into a **Job Queue** for background processing. This allows you to continue working while the system handles thousands of emails.

<br />

### Intelligent Delivery Features
*   **Active Only**: The system automatically filters your list and will **only** attempt to send to subscribers marked as **Active**.
*   **Duplicate Protection**: Before every send, the system checks the delivery logs. If a subscriber has already successfully received this specific newsletter, they will be skipped.

<br />

### The "Heartbeat" (Cron Job)
A background process (called a "Cron Job") wakes up your server **every 5 minutes** to check for work.
*   **Batch Processing**: To prevent your email account from being flagged as spam, the system sends emails in batches (currently 10 emails every 5 minutes).
*   **Backlog**: If you send to 1,000 subscribers, it will take several hours to complete the entire run. This is a safety feature to ensure high deliverability.

<br />

### Automated Retries
Email delivery can sometimes fail due to temporary network issues or mail server timeouts.
*   **3 Retry Attempts**: If an email fails, the system will automatically try to send it again up to **3 more times**.
*   **Final Status**: Only after 4 total failed attempts (1 initial + 3 retries) will a subscriber be marked as "Failed" in your logs.

<br />
<br />

## 5. Monitoring & Logs

Transparency is key to a reliable email system. Every single email attempt is recorded in the **Newsletter Logs** collection.

<br />

### Tracking a Send:
*   **Newsletter**: Which content was sent.
*   **Subscriber**: Who it was sent to.
*   **Sent At**: The exact timestamp of the delivery attempt.
*   **Status**: 
    *   **Success**: The email was accepted by the recipient's mail server.
    *   **Failed**: Something went wrong. Check the "Error Message" field for details (e.g., "Invalid Email Address").

<br />

### Viewing History:
*   **By Newsletter**: Within each Newsletter record, you can view a **"Sent History"** tab. This filtered view shows you exactly who has received that specific newsletter.
*   **By Subscriber**: Within each Subscriber record, you can view a **"History"** tab. This shows you every newsletter that specific person has ever been sent.

<br />

### Understanding System Messages:
You may occasionally see technical logs from the background process. Here is what they mean:
*   **"No tasks or workflows with schedules are defined"**: This is a normal message. It simply means there are no "recurring" daily/weekly tasks set up, and the system is proceeding to check for "manual" tasks (like your newsletter).
*   **"Remaining Jobs: 0"**: This means the current 5-minute batch is finished.
*   **"Remaining Jobs: [Number]"**: This means there are still emails waiting in the queue to be sent in the next 5-minute cycle.

<br />
<br />

## 6. Troubleshooting FAQ

**Q: I clicked "Send," but my subscribers haven't received it yet.**
*   Check the **Payload Jobs** collection or **Logs**. Remember that the system waits for its 5-minute "heartbeat" to start, and sends in batches of 10. For a large list, it may take a few hours.

<br />

**Q: Why did an email fail?**
*   Open the log entry for that subscriber. Common reasons include:
    *   The email address is misspelled.
    *   The recipient's inbox is full.
    *   The recipient's mail server blocked the email (Spam filter).

<br />

**Q: Can I stop a newsletter send after I click "Confirm"?**
*   Since jobs are processed in batches, you can delete "Queued" jobs from the **Payload Jobs** collection in the admin panel to stop the remaining emails from going out.

<br />

**Q: How do I maintain deliverability?**
*   Periodically check the logs for **Failed** statuses. If you see multiple failures for the same email address, consider marking that subscriber as **Inactive** to maintain your sender reputation.

<br />
<br />