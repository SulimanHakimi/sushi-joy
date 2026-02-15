import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { type, name, email, message } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Use environment variables for SMTP configuration
        const host = process.env.SMTP_HOST || 'smtp.gmail.com';
        const port = parseInt(process.env.SMTP_PORT || '587');
        const user = process.env.SMTP_USER;
        const pass = process.env.SMTP_PASS;

        if (!user || !pass) {
            console.warn('SMTP credentials missing. Please set SMTP_USER and SMTP_PASS in .env.local');
            return NextResponse.json({ error: 'Server configuration error: Missing SMTP credentials.' }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user,
                pass,
            },
        });

        // Prepare email content based on form type
        let subject = 'New Message from Sushi Joy Website';
        let textContent = '';
        let htmlContent = '';

        if (type === 'newsletter') {
            subject = 'New Newsletter Subscription: Sushi Joy';
            textContent = `New subscriber: ${email}`;
            htmlContent = `<p><strong>New subscriber:</strong> ${email}</p>`;
        } else {
            // Contact form
            subject = `New Contact Inquiry from ${name || 'Sushi Joy Visitor'}`;
            textContent = `
Name: ${name}
Email: ${email}
Message: ${message}
      `;
            htmlContent = `
        <h2>New Message from Sushi Joy Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `;
        }

        const from = process.env.SMTP_FROM || user; // Default to authenticated user

        // Send email to admin (yourself)
        await transporter.sendMail({
            from: `Sushi Joy Website <${from}>`,
            to: user, // Send to the authenticated user (admin)
            subject,
            text: textContent,
            html: htmlContent,
        });

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 });
    }
}
