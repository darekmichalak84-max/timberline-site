import Image from "next/image";

export const metadata = {
  title: "Fencing Services in Plymouth",
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
              Fencing Services in Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Quality garden fencing installed across Plymouth and surrounding areas.
              Timberline delivers strong, clean finishes built to last.
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
              Reliable fencing for homes and gardens
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              We install strong, attractive fencing designed to improve privacy,
              security, and the overall look of your outdoor space. Whether you
              need new fencing or replacement panels, Timberline delivers a
              professional finish every time.
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
                title: "Fence Installation",
                text: "New fencing installed for privacy, security, and a clean finish.",
              },
              {
                title: "Fence Replacement",
                text: "Replace old or damaged fencing with strong, reliable panels.",
              },
              {
                title: "Custom Fencing",
                text: "Tailored fencing solutions designed to suit your property.",
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

        <p className="mt-5 text-lg text-slate-600">
          Timberline provides fencing services across Plymouth, Saltash,
          Ivybridge, Tavistock, and surrounding areas.
        </p>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Related Services
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="/fencing-plymouth" className="text-amber-700 font-semibold">
              Fencing Plymouth
            </a>
            <a href="/decking-plymouth" className="text-amber-700 font-semibold">
              Decking Plymouth
            </a>
            <a href="/gates-plymouth" className="text-amber-700 font-semibold">
              Gates Plymouth
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