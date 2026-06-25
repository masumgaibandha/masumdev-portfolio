"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const budget = formData.get("budget");
    const message = formData.get("message");

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Name, email, and message are required.",
      };
    }

    await resend.emails.send({
      from: "MasumDev Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
        <p><strong>Budget:</strong> ${budget || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return {
      success: true,
      message: "Message sent successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};
