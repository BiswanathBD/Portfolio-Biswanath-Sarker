# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello Biswanath,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to Account settings
2. Find your **Public Key** (User ID)

## 5. Update Contact Component

In `src/components/Contact.jsx`, replace these values:

```javascript
const serviceId = "your_service_id_here"; // Replace with your Service ID
const templateId = "your_template_id_here"; // Replace with your Template ID
const publicKey = "your_public_key_here"; // Replace with your Public Key
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (biswanath.sarker.bd@gmail.com) for the message

## Security Note

The public key is safe to use in frontend code as it's designed for client-side usage. EmailJS handles the security on their end.

## Troubleshooting

- Make sure all IDs are correct
- Check EmailJS dashboard for any error logs
- Verify your email service is properly connected
- Check browser console for any JavaScript errors
