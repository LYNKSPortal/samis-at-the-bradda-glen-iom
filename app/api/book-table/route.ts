import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, specialRequests } = body;

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
      subject: `New Table Booking Request - ${name}`,
      html: `
        <h2>New Table Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong></p>
        <p>${specialRequests || 'None'}</p>
      `,
    };

    // Confirmation email to customer
    const customerEmail = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Booking Request Received - Sami's at the Bradda Glen`,
      html: `
        <h2>Thank You for Your Booking Request</h2>
        <p>Dear ${name},</p>
        <p>We have received your table booking request for <strong>${guests} guests</strong> on <strong>${date}</strong> at <strong>${time}</strong>.</p>
        <p>We will review your request and confirm your reservation shortly. You will receive a confirmation email from us within 24 hours.</p>
        <p>If you have any questions, please don't hesitate to contact us at 01624 837713.</p>
        <br>
        <p>Best regards,<br>The Team at Sami's at the Bradda Glen</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(restaurantEmail);
    await transporter.sendMail(customerEmail);

    return NextResponse.json({ success: true, message: 'Booking request sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
