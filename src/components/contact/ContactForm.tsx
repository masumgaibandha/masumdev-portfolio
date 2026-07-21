"use client";

import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";

const fieldClasses =
  "rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground " +
  "placeholder:text-muted-foreground focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-ring";

const labelClasses = "text-sm font-medium text-foreground";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // Fail loudly rather than posting a request that can only be rejected.
    if (!accessKey) {
      toast.error("Form is not configured. Please email me directly.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(form);

      formData.append("access_key", accessKey);
      formData.append("subject", "New Project Inquiry - MasumDev");
      formData.append("from_name", "MasumDev Portfolio");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result: { success?: boolean; message?: string } =
        await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-2">
        <label htmlFor="contact-name" className={labelClasses}>
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
          required
          className={fieldClasses}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-email" className={labelClasses}>
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className={fieldClasses}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-project-type" className={labelClasses}>
          Project Type{" "}
          <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="contact-project-type"
          type="text"
          name="projectType"
          autoComplete="off"
          placeholder="SaaS platform, dashboard, marketplace..."
          className={fieldClasses}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          name="message"
          placeholder="Tell me about your project..."
          required
          className={`resize-none ${fieldClasses}`}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
