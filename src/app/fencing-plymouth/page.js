import Image from "next/image";

export const metadata = {
 title: "Fencing Plymouth | Fence Installation & Replacement | Timberline",
  description:
    "Fencing installation in Plymouth. Timberline provides garden fencing, fence replacement and timber fencing across Plymouth, Saltash, Ivybridge and surrounding areas. Free quotes available.",
};

export default function FencingPlymouthPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-fencing.jpg"
          alt="Fencing installation in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/45" />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Timberline
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
  Fencing Plymouth
</h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
  Professional garden fencing, fence replacement and new fence installation
  across Plymouth and surrounding areas.
</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
              >
                Get a Free Quote
              </a>

              <a
                href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20fencing."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">
  Professional Garden Fencing in Plymouth
</h2>

            <p className="mt-5 text-lg text-slate-600">
  We install a wide range of garden fencing across Plymouth, including
  featheredge fencing, timber fence panels, concrete posts and gravel boards,
  timber posts, capping and custom-built fencing. Whether you need a complete
  new boundary, replacement fencing or repairs to an existing fence, Timberline
  provides a strong, tidy finish built to last.
</p>

            <p className="mt-5 text-lg text-slate-600">
              We cover Plymouth, Saltash, Ivybridge, Tavistock, and surrounding
              areas, offering free quotes and friendly, local service.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/gallery-1.jpg"
              alt="Fencing project in Plymouth"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black md:text-4xl">
              Our fencing services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
  {
    title: "Featheredge Fencing",
    text: "Traditional featheredge fencing built on site, with options including timber or concrete posts, gravel boards and capping.",
  },
  {
    title: "Fence Panels & Replacement",
    text: "New fence panels and complete replacement of old, damaged or storm-damaged fencing, including posts and gravel boards where required.",
  },
  {
    title: "Fence Repairs & Gates",
    text: "Repairs to existing fencing, replacement posts and damaged sections, plus timber garden gates built or installed to suit your property.",
  },
].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm border"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-black md:text-4xl">
          Fencing in Plymouth and nearby areas
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
  Based in Plymouth, Timberline provides fencing installation, replacement and
  repairs across Plymouth, Plympton, Plymstock, Saltash, Ivybridge, Tavistock,
  Torpoint, Yelverton, Wembury and surrounding areas. If you're unsure whether
  we cover your location, get in touch and we'll be happy to help.
</p>
      </section>
      {/* FAQ */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-4xl px-6">
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-black md:text-4xl">
        Fencing Questions
      </h2>
    </div>

    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Do you install fencing with concrete posts and gravel boards?
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Yes. We install fencing using concrete posts and gravel boards, as well
          as traditional timber posts, depending on the style and requirements
          of the property.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Can you replace damaged or storm-damaged fencing?
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Yes. We can replace individual damaged sections or complete runs of
          fencing, including posts, panels, featheredge boards and gravel boards
          where required.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Do you remove and dispose of the old fencing?
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Yes. Old fencing and related materials can be removed as part of the
          job, so the area is left clean and tidy once the new fencing is installed.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900">
          Do you offer free fencing quotes in Plymouth?
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Yes. Timberline offers free, no-obligation fencing quotes across
          Plymouth and surrounding areas.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Related Services
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
  <a href="/decking-plymouth" className="text-amber-700 font-semibold hover:underline">
    Decking Plymouth
  </a>
  <a href="/gates-plymouth" className="text-amber-700 font-semibold hover:underline">
    Gates Plymouth
  </a>
  <a href="/waste-removal" className="text-amber-700 font-semibold hover:underline">
    Waste Removal Plymouth
  </a>
</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16 text-white text-center">
        <h2 className="text-3xl font-black md:text-4xl">
          Need fencing in Plymouth?
        </h2>

        <p className="mt-4 text-lg">
          Get in touch today for a free, no-obligation quote.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/#contact"
            className="bg-white text-amber-700 px-6 py-3 rounded-2xl font-semibold"
          >
            Request a Quote
          </a>

          <a
            href="https://wa.me/447933988421"
            className="border px-6 py-3 rounded-2xl"
          >
            WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}