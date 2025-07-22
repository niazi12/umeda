// app/actions/sendContactEmail.ts
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod'; // For validation

// Define the form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function sendContactEmail(prevState, formData) {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    // Validate form data
    const validatedFields = ContactFormSchema.safeParse(rawFormData);

    // Return early if validation fails
    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors[0].message,
        error: true,
        success: false,
      };
    }

    // Configure SMTP transporter for Gmail using app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // your app-specific password
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Create subject based on service interest or default
    const emailSubject = validatedFields.data.service 
      ? `Contact Form: ${validatedFields.data.service} Inquiry`
      : 'Contact Form: General Inquiry';

    // Prepare email content
    const mailOptions = {
      from: `"${validatedFields.data.name}" <${process.env.SMTP_USER}>`, // Use your SMTP user as sender
      replyTo: validatedFields.data.email, // Set reply-to as the form submitter's email
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Recipient email
      subject: emailSubject,
      text: `
        New Contact Form Submission
        
        Name: ${validatedFields.data.name}
        Email: ${validatedFields.data.email}
        ${validatedFields.data.company ? `Company: ${validatedFields.data.company}` : ''}
        ${validatedFields.data.phone ? `Phone: ${validatedFields.data.phone}` : ''}
        ${validatedFields.data.service ? `Service Interest: ${validatedFields.data.service}` : ''}
        
        Message:
        ${validatedFields.data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedFields.data.name}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
        ${validatedFields.data.company ? `<p><strong>Company:</strong> ${validatedFields.data.company}</p>` : ''}
        ${validatedFields.data.phone ? `<p><strong>Phone:</strong> ${validatedFields.data.phone}</p>` : ''}
        ${validatedFields.data.service ? `<p><strong>Service Interest:</strong> ${validatedFields.data.service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${validatedFields.data.message.replace(/\n/g, '<br>')}
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success state
    return {
      message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      success: true,
      error: false,
    };

  } catch (error) {
    // Handle errors
    console.error('Contact form error:', error);
    return {
      message: "Sorry, something went wrong. Please try again later or contact us directly.",
      success: false,
      error: true,
    };
  }
}
