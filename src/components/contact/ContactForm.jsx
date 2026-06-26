"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      );

      formData.append("subject", "New Project Inquiry - MasumDev");
      formData.append("from_name", "MasumDev Portfolio");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
      />

      <input
        type="text"
        name="projectType"
        placeholder="Project Type"
        className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Tell me about your project..."
        required
        className="resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[var(--primary)] px-6 py-4 font-semibold text-white cursor-pointer"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
