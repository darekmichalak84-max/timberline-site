"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const response = await fetch("https://formspree.io/f/xwvwkzzj", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          setSubmitted(true);
          e.target.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      }}
      className="space-y-5"
    >
      <input type="text" name="_gotcha" style={{ display: "none" }} />
      <input type="hidden" name="_subject" value="New Timberline enquiry" />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-600"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-600"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-600"
          placeholder="Your email address"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-600"
        >
          <option>Fencing</option>
          <option>Decking</option>
          <option>Gates</option>
          <option>Landscaping & Groundworks</option>
          <option>Waste Removal</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-600"
          placeholder="Tell us a bit about what you need..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-2xl bg-amber-700 px-6 py-4 font-semibold text-white transition hover:bg-amber-800"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="mt-4 text-center font-semibold text-green-600">
          ✅ Thanks! Your message has been sent.
        </p>
      )}
    </form>
  );
}