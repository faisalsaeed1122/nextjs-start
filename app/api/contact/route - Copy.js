// Example of adding SendGrid in the API route
// pages/api/contact.js

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      await sendgrid.send({
        to: "faisalsaeed128@gmail.com",
        from: "no-reply@example.com",
        subject: `New Contact Form Submission from ${name}`,
        text: message,
        html: `<p>${message}</p><p>From: ${email}</p>`,
      });
      return res
        .status(200)
        .json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
