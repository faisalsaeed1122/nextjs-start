// app/api/contact/route.js
import { sendContactEmail } from "../../api/emailService"; // Email service that uses SendGrid

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("Form data received:", { name, email, message });

    if (!name || !email || !message) {
      return new Response("All fields are required.", { status: 400 });
    }

    // Log before calling email service
    console.log("Calling sendContactEmail...");
    await sendContactEmail({ name, email, message });
    console.log("Email sent successfully");
    return new Response("Form submitted successfully", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Something went wrong, please try again later.", {
      status: 500,
    });
  }
}
