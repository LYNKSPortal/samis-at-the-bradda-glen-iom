import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventType, date, guests, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to restaurant
    const restaurantEmail = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Event Enquiry - ${eventType} - ${name}`,
      html: `
        <h2>New Event Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Date:</strong> ${date}</p>
        <p><strong>Expected Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Event Enquiry Received - Sami's at the Bradda Glen`,
      html: `
        <h2>Thank You for Your Event Enquiry</h2>
        <p>Dear ${name},</p>
        <p>We have received your enquiry for a <strong>${eventType}</strong> event on <strong>${date}</strong> for approximately <strong>${guests} guests</strong>.</p>
        <p>Our events team will review your request and get back to you within 24 hours to discuss your requirements and provide a tailored quote.</p>
        <p>If you have any urgent questions, please call us at 01624 837713.</p>
        <br>
        <p>Best regards,<br>The Events Team at Sami's at the Bradda Glen</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(restaurantEmail);
    await transporter.sendMail(customerEmail);

    return NextResponse.json({ success: true, message: 'Event enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send event enquiry' },
      { status: 500 }
    );
  }
}
