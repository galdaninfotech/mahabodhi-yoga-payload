# Admission System: Administrator Guide

Welcome to the **Mahabodhi Residential School** Admission Management System. This guide will walk you through the entire lifecycle of a student application, from submission to final acceptance.

![MIMC School Campus](/images/slides/slide1.jpg)

---


## 1. System Overview

The Admission System is designed to be high-performance and user-friendly. It handles all technical validations automatically, allowing you to focus purely on reviewing the student's eligibility.

### Core Workflow
1. **Submission:** Parents complete the 4-stage wizard on the website.

2. **Notification:** You receive an automated email at `edu.mimc@yahoo.com`.

3. **Review:** You access the record in the Admin Panel.

4. **Action:** Update status to `Accepted` or `Rejected`.

---


## 2. Navigating the Admissions Collection

To manage applications, navigate to the **Admissions** link in your sidebar.

### The Dashboard View
The list view provides a quick "at-a-glance" status of all current applicants. You can see:
- **Student Name**
- **Applying Class** (Primary identification)
- **Status** (New, Under Review, etc.)
- **Hostel Requirement** (Indicated by a checkbox)

> **Pro Tip:** Use the search bar at the top to instantly filter by student name or Aadhaar number.

![Admin Dashboard Placeholder](https://placehold.co/800x400/b91c1c/white?text=Admin+Collection+View+Screenshot)

---

## 3. Managing an Application

When you click on a student's name, you enter the **Detailed View**. The information is organized into tabs for easy reading.

### A. Student Profile
Contains legal details, Date of Birth, and Aadhaar. Ensure these match the physical documents provided by the parent during the interview.

### B. Guardian Information
Contact details for both parents. The system ensures at least one valid phone number is present.

### C. Medical & Emergency
Critical information regarding allergies or chronic conditions. 

### D. Hostel & Consent
If `Hostel Required` is checked, the **Local Guardian** section must be filled. This is a mandatory requirement for school policy.

---

## 4. Manual Data Entry

If a parent brings a paper form to the school office, you should enter it manually to keep the digital records synchronized.

1. Click **"Create New"**.
2. Fill in the fields as per the physical form.
3. The system will apply the same **formatting rules** (e.g., auto-dashes in Aadhaar) as the frontend form.
4. Click **Save** at the bottom.

---

## 5. Detailed Field Guide

This section explains the specific requirements for every field in the system to ensure data consistency.

### Student Information
- **Full Name:** Enter as per the Birth Certificate. Avoid nicknames.
- **Date of Birth:** Use the date picker. Age is automatically calculated for class eligibility.
- **Gender:** Select from the dropdown. This is used for hostel allocation logic.
- **Aadhaar Number:** Enter 12 digits. The system will format it as `XXXX-XXXX-XXXX`.

### Parent Details
- **Father's Name:** Mandatory field.
- **Mother's Name:** Mandatory field.
- **Contact Number:** Must be a valid 10-digit Indian mobile number. 

### Residential Details
- **Full Address:** Include House Number, Village/Ward, and Landmarks.
- **State:** Select from the dropdown (Default: Ladakh).
- **PIN Code:** 6-digit postal code.

---

## 6. Communication System

The system manages several automated touchpoints to keep everyone informed.

### Automated Emails
- **To Admin:** Sent immediately upon submission to `edu.mimc@yahoo.com`. Contains a direct link to the record.
- **To Parents:** Sent to the email addresses provided in the form. Confirms that the school has received the application and lists the next steps (Interview date, etc.).

### Status Updates
When you change the status of an application in the admin panel, it is recorded in the system logs. Future updates will include automated email triggers for these status changes.

---

## 7. Troubleshooting & FAQs

#### How do I export the data?
You can use the built-in Payload export tools (if enabled) or contact the technical team for a full PostgreSQL database dump for year-end reporting.

#### Can I delete a test entry?
Yes. Simply select the record in the list view and choose **Delete**. *Warning: This action is permanent.*

#### What if a parent enters the wrong phone number?
You can edit any field in an existing record. Simply change the number and click **Save**.

#### The form says "Aadhaar Already Exists"
The system prevents duplicate applications for the same student. If you see this, search for the student in the list view; they likely already have an application.

---

*For technical support, please contact the Galdan Infotech team.*
