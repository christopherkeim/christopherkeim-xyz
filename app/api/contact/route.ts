import { createTransport } from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body) {
      return Response.json({ error: "Invalid request" }, { status: 400 });
    }

    const { name, email, message } = body;

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return Response.json({ error: "Email is invalid" }, { status: 400 });
    }

    if (!message) {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length < 60) {
      return Response.json(
        { error: "Message should be at least 60 characters" },
        { status: 400 },
      );
    }

    const transporter = createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"ChristoperKeim.xyz - Form Handler 👻" <${process.env.NODEMAILER_USER}>`, // sender address
      to: `"${process.env.CONTACT_FORM_RECIPIENT}"`, // list of receivers
      subject: `Contact Form ✔ - ${name}`, // Subject line
      text: `From: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `<p>Name: ${name}<br>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    return Response.json(info, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
