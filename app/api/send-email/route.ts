import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { guestName, guestEmail } = await req.json();
    console.log("🚀 ~ POST ~ guestName, guestEmail:", guestName, guestEmail);

    console.log(process.env.NEXT_PUBLIC_EMAIL_USER);
    console.log(process.env.NEXT_PUBLIC_EMAIL_PASS);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Ria & Vivek" <${process.env.EMAIL_USER}>`,
      to: guestEmail,
      subject: "RSVP Confirmation – Ria & Vivek",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; background: #fafafa; padding: 30px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="text-align: center; color: #b91c1c;">Ria & Vivek</h2>
            <p>Dear <strong>${guestName}</strong>,</p>
            <p>Thank you for your RSVP! We have received your confirmation and are excited to celebrate our special day with you.</p>
            <p>If you need any further information or have any questions, please feel free to reach out to us at:</p>
            <p style="line-height: 1.6;">
              📞 <strong>+91 97691 09082</strong><br />
              📧 <a href="mailto:riawedsvivek@gmail.com" style="color: #2563eb;">riawedsvivek@gmail.com</a>
            </p>
            <p style="margin-top: 30px;">With love and excitement,<br/> <strong>Ria & Vivek</strong><br/> Nagpal & Gandhi Families</p>
          </div>
          <p style="text-align: center; font-size: 12px; color: #888; margin-top: 20px;">
            © 2025 Ria & Vivek Wedding Celebration
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
