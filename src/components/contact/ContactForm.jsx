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
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium">
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
          required
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-project-type" className="text-sm font-medium">
          Project Type <span className="text-[var(--muted-foreground)]">(optional)</span>
        </label>
        <input
          id="contact-project-type"
          type="text"
          name="projectType"
          autoComplete="off"
          placeholder="SaaS platform, dashboard, marketplace..."
          className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          name="message"
          placeholder="Tell me about your project..."
          required
          className="resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[var(--primary)] px-6 py-4 font-semibold text-[var(--primary-foreground)] cursor-pointer"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
