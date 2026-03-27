"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "Fencing",
      description:
        "Strong, well-finished fencing for privacy, security, and a cleaner look around your garden or boundary.",
    },
    {
      title: "Decking",
      description:
        "Timber and composite decking built for relaxing, entertaining, and making better use of your outdoor space.",
    },
    {
      title: "Gates",
      description:
        "Made-to-measure gates and practical timber features finished to suit your property.",
    },
  ];

  const reasons = [
    "Local Plymouth service",
    "Quality timber and composite materials",
    "Tailored designs for each property",
    "Friendly, reliable workmanship",
  ];

  const areas = ["Plymouth", "Saltash", "Ivybridge", "Tavistock", "Surrounding areas"];
  const testimonials = [
  {
    name: "Will Bunch – Plymouth",
    text: "Excellent service from Timberline, super friendly and very good carpenters i would recommend them to anyone",
  },
  {
    name: "Richard Wilson – Saltash",
    text: "From start to finish, Derek and the team did a fantastic job. Their professionalism, pride in their work, communication and pro-active attitude was evident throughout. I cannot speak highly enough about them. Richard W",
  },
  {
    name: "Gemma Alexia – Ivybridge",
    text: "These guys were outstanding. Reliable and prompt communication, did what they said they would, when they said the would. Worked extremely quickly, to good quality, and tidied up after themselves. Would highly recommend. I have commissioned them for a bit more work as I was so happy with them.",
  },
];
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Timberline",
  url: "https://timberlinepl.co.uk",
  telephone: "+447933988421",
  email: "info@timberlinepl.co.uk",
  image: "https://timberlinepl.co.uk/og-image.jpg",
  description:
    "Timberline provides fencing, decking, gates, and outdoor timber services in Plymouth, Saltash, Ivybridge, Tavistock, and surrounding areas.",
  areaServed: [
    "Plymouth",
    "Saltash",
    "Ivybridge",
    "Tavistock",
    "Surrounding areas",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plymouth",
    addressRegion: "Devon",
    addressCountry: "GB",
  },
  sameAs: [
    "https://wa.me/447933988421"
  ],
};

  return (
  
    <main className="min-h-screen bg-white text-slate-900">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(localBusinessSchema),
  }}
/>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-2xl font-black tracking-wide text-slate-900">TIMBERLINE</p>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
              Fencing & Decking
            </p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="transition hover:text-amber-700">
              Services
            </a>
            
            <a href="#about" className="transition hover:text-amber-700">
              About
            </a>
            <a href="#gallery" className="transition hover:text-amber-700">
  Gallery
</a>
            <a href="#areas" className="transition hover:text-amber-700">
              Areas
            </a>
            <a href="#testimonials" className="transition hover:text-amber-700">
  Testimonials
</a>
            <a href="#contact" className="transition hover:text-amber-700">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            Free Quote
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
       <Image
  src="/hero.jpg"
  alt="Timber fencing and decking installation in Plymouth"
  fill
  priority
  sizes="100vw"
  className="absolute inset-0 -z-20 object-cover"
/>

        <div className="absolute inset-0 -z-10 bg-black/5" />

        <div className="mx-auto flex min-h-[82vh] max-w-7xl items-end justify-center px-6 pb-20 pt-32 text-center md:pb-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Fencing, Decking & Gate
              <br />
              Installation in Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Quality timber and composite installations built to last.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 text-center text-sm font-semibold text-slate-700 md:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-xl bg-slate-50 px-4 py-3">
              {reason}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Quality outdoor work, built to last
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We create strong, attractive fencing, decking, gates, and timber features
            designed to suit your property and improve your outdoor space.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
  {services.map((service) => {
   const href =
  service.title === "Fencing"
    ? "/fencing-plymouth"
    : service.title === "Decking"
    ? "/decking-plymouth"
    : service.title === "Gates"
    ? "/gates-plymouth"
    : "#";

    return (
      <a key={service.title} href={href}>
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="relative h-56 overflow-hidden">
            <Image
              src={`/service-${service.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}.jpg`}
              alt={`${service.title} services in Plymouth by Timberline`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-slate-600">{service.description}</p>
          </div>
        </article>
      </a>
    );
  })}
</div>
      </section>
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
  <div className="mx-auto mb-14 max-w-3xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
      Recent Work
    </p>
    <h2 className="mt-3 text-3xl font-black md:text-5xl">
      A look at some of our recent projects
    </h2>
    <p className="mt-4 text-lg leading-8 text-slate-600">
      From fencing and gates to decking installations, here are examples of the
      quality finish we deliver.
    </p>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
    "/gallery-9.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
    "/gallery-12.jpg",
    "/gallery-13.jpg",
    "/gallery-14.jpg",
    "/gallery-15.jpg",
  ].map((image, index) => (
    <a
      key={image}
      href={image}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
  src={image}
  alt={`Timberline fencing or decking project ${index + 1} in Plymouth area`}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>
      </div>
    </a>
  ))}
</div>
</section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Why Choose Timberline
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Local workmanship with a clean, dependable finish
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on quality materials, careful installation, and honest service from start to
              finish. Whether you need a full new boundary, upgraded decking, or custom timber work,
              Timberline delivers results built to suit your property.
            </p>
          </div>

          <div className="grid gap-4">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-lg font-semibold shadow-sm"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Areas We Cover
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">Serving Plymouth and nearby areas</h2>
          <p className="mt-4 text-lg text-slate-600">
            We provide fencing, decking, gates, and timber work across Plymouth and the surrounding
            area.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700"
            >
              {area}
            </span>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
        Our Location
      </p>
      <h2 className="mt-3 text-3xl font-black md:text-4xl">
        Based in Plymouth
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        We provide fencing, decking, and gate installation services across Plymouth, Saltash, Ivybridge, Tavistock, and surrounding areas.
      </p>
    </div>

    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <iframe
        src="https://www.google.com/maps?q=Plymouth&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Timberline service area map"
      ></iframe>
    </div>
  </div>
</section>

      <section id="testimonials" className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">
    
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
        Testimonials
      </p>
      <h2 className="mt-3 text-3xl font-black md:text-5xl">
        What our customers say
      </h2>
      <p className="mt-4 text-lg text-slate-600">
        We take pride in delivering quality work and reliable service.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
          <div className="text-amber-500 mb-2">★★★★★</div>

<p className="text-slate-700 leading-relaxed">
  “{t.text}”
</p>

          <div className="mt-4 font-semibold text-slate-900">
            — {t.name}
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
<section className="bg-amber-700 py-16 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <h2 className="text-3xl font-black md:text-4xl">
      Ready to improve your garden?
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
      Get in touch for fencing, decking, gates, and timber work in Plymouth and surrounding areas. Free, no-obligation quotes available.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <a
        href="#contact"
        className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
      >
        Request a Free Quote
      </a>

      <a
        href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
      >
        Message on WhatsApp
      </a>
    </div>
  </div>
</section>

      <section id="contact" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Get your free quote today
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Planning a new fence, decking area, or gate? Send over a few details and
              we’ll get back to you with a free, no-obligation quote.
            </p>

            <div className="mt-8 space-y-4 text-slate-200">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href="tel:07700111222" className="hover:text-amber-400">
                  07933 988 421
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:info@timberlinepl.co.uk" className="hover:text-amber-400">
                  info@timberlinepl.co.uk
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Areas covered:</span>{" "}
                Plymouth, Saltash, Ivybridge, Tavistock, and surrounding areas
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <p className="mb-4 text-sm text-slate-600">
  Send us a few details and we’ll usually get back to you within a few hours.
</p>
<a
  href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote."
  target="_blank"
  rel="noopener noreferrer"
  className="mb-5 block rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-center font-semibold text-green-700 transition hover:bg-green-100"
>
  Prefer WhatsApp? Message us here for a quick quote
</a>
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
                  <option>Other Timber Work</option>
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
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Timberline Fencing & Decking. All rights reserved.</p>
      </footer>
      <a
  href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
  aria-label="Chat on WhatsApp"
>
  <span className="text-2xl leading-none">💬</span>
  <span className="hidden text-sm font-semibold sm:inline">Chat on WhatsApp</span>
</a>
    </main>
  );
}