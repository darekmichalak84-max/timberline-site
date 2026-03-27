import Image from "next/image";

export const metadata = {
  title: "Gate Installation in Plymouth",
  description:
    "Timberline provides custom gate installation and timber features in Plymouth, Saltash, Ivybridge, Tavistock, and surrounding areas. Get a free quote today.",
};

export default function GatesPlymouthPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-gates.jpg"
          alt="Gate installation in Plymouth by Timberline"
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
              Gate Installation in Plymouth
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Made-to-measure timber gates and practical outdoor timber features
              for homes and gardens across Plymouth and nearby areas. Timberline
              delivers quality workmanship, reliable service, and free
              no-obligation quotes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Get a Free Quote
              </a>
              <a
                href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20a%20gate."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Our Gate Work
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quality gates built to suit your property
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We install timber gates designed to improve access, privacy, and
              the finish of your outdoor space. Whether you need a side gate, a
              garden gate, or a custom timber feature to match your fencing,
              Timberline provides a tidy, dependable finish built to suit your
              property.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We work across Plymouth, Saltash, Ivybridge, Tavistock, and
              surrounding areas, offering free quotes and friendly advice on the
              best gate option for your property.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/gallery-21.jpg"
              alt="Timberline gate project in Plymouth"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Gate services for homes and gardens
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Gate Installation",
                text: "New timber gates installed to improve access, privacy, and the overall finish of your property.",
              },
              {
                title: "Replacement Gates",
                text: "Replacement for old, worn, or damaged gates with a fresh and reliable finish.",
              },
              {
                title: "Custom Timber Features",
                text: "Made-to-measure gates and timber details designed to match your fencing and outdoor space.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Areas Covered
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Gate installation in Plymouth and nearby areas
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Timberline provides gate installation across Plymouth, Saltash,
            Ivybridge, Tavistock, and surrounding areas. If you are looking for
            reliable gate installers in Plymouth, get in touch for a free quote.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Plymouth", "Saltash", "Ivybridge", "Tavistock", "Surrounding areas"].map(
            (area) => (
              <span
                key={area}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700"
              >
                {area}
              </span>
            )
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Gate questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you install gates in Plymouth?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes, Timberline provides gate installation and replacement
                across Plymouth and surrounding areas.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can I get a free gate quote?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes, we offer free no-obligation quotes. You can contact us
                through the website or send us a message on WhatsApp.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you make gates to match fencing?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes, we can provide made-to-measure gates and timber features
                designed to suit your fencing and property.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-16">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <h2 className="text-2xl font-bold md:text-3xl">
      Related Services
    </h2>

    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <a href="/fencing-plymouth" className="font-semibold text-amber-700 hover:underline">
        Fencing Plymouth
      </a>
      <a href="/decking-plymouth" className="font-semibold text-amber-700 hover:underline">
        Decking Plymouth
      </a>
      <a href="/gates-plymouth" className="font-semibold text-amber-700 hover:underline">
        Gates Plymouth
      </a>
    </div>
  </div>
</section>

      <section className="bg-amber-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Need a gate installed in Plymouth?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Contact Timberline today for a free, no-obligation quote for timber
            gates and outdoor timber features in Plymouth and surrounding areas.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
            >
              Request a Free Quote
            </a>

            <a
              href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20a%20gate."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}