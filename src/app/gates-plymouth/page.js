import Image from "next/image";

export const metadata = {
  title: "Gates Plymouth | Timber Garden Gates & Installation | Timberline",
  description:
    "Gate installation in Plymouth. Timberline supplies and installs timber garden gates, side gates, replacement gates and made-to-measure gates across Plymouth and surrounding areas. Free quotes.",
};

const gatesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gate Installation Plymouth",
  serviceType: "Garden Gate Installation and Replacement",
  description:
    "Timber garden gate installation, replacement and made-to-measure gates across Plymouth and surrounding areas.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Timberline",
    url: "https://timberlinepl.co.uk",
    telephone: "+447933988421",
  },
  areaServed: [
    "Plymouth",
    "Plympton",
    "Plymstock",
    "Saltash",
    "Ivybridge",
    "Tavistock",
    "Torpoint",
    "Yelverton",
    "Wembury",
  ],
};

export default function GatesPlymouthPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gatesSchema),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-gates.jpg"
          alt="Timber garden gate installation in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Timberline Gates
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Gates Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Timber garden gates, side gates and made-to-measure gates supplied
              and installed across Plymouth and surrounding areas.
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
                Send Photos on WhatsApp
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Gate Installation Plymouth
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Timber Gates Built to Suit Your Property
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timberline supplies and installs timber garden gates for homes
              across Plymouth. Whether you need a side gate for better privacy
              and security, a replacement for an old damaged gate, or a
              made-to-measure gate to fit an existing opening, we can build a
              practical solution to suit your property.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Gates can be installed as part of a new fencing project or as a
              standalone job. Where required, we can also install new posts,
              suitable ironmongery and other timber details needed to create a
              strong and tidy finished entrance.
            </p>

          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src="/gallery-21.jpg"
              alt="Made-to-measure timber garden gate installed by Timberline in Plymouth"
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

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Our Gate Services
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Garden Gates & Side Gates in Plymouth
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From simple garden access gates to larger privacy gates, we can
              provide a solution designed around your opening, fencing and
              outdoor space.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Timber Garden Gates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Timber garden gates supplied and installed to provide practical
                access while complementing your garden and existing fencing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Side & Privacy Gates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Side gates and taller timber gates can provide additional
                privacy and create a secure, tidy entrance to the side or rear
                of your property.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Replacement Gates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Old, damaged or poorly fitting gates can be removed and replaced
                with a new gate, including replacement posts or fittings where
                required.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Made-to-Measure Gates
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Custom timber gates can be made to suit unusual openings,
                existing fencing and the style or level of privacy required.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CUSTOM GATES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Made to Fit
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Made-to-Measure Timber Gates
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not every entrance is a standard size. A made-to-measure timber
              gate can be built around the actual opening rather than trying to
              make an off-the-shelf gate fit a space it was not designed for.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The height, width and style can be chosen to suit the property,
              whether the priority is easy garden access, privacy or matching
              an existing run of timber fencing.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Complete Installation
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Posts, Hinges & Gate Fittings
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A good gate depends on more than the gate itself. The supporting
              posts and fittings need to be suitable for the size and weight of
              the gate so that it opens and closes properly.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Where required, we can install new gate posts and suitable hinges,
              latches and fittings as part of the job, leaving you with a
              complete finished installation.
            </p>
          </div>

        </div>
      </section>

      {/* FENCING */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Gates & Fencing
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Gates to Match Your New or Existing Fencing
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            If you are having new fencing installed, a gate can be incorporated
            into the same project for a consistent finish. We can also replace
            an existing gate or create a new gate to work with fencing already
            in place.
          </p>

          <div className="mt-8">
            <a
              href="/fencing-plymouth"
              className="inline-flex rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
            >
              View Fencing Services
            </a>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Getting a Quote
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              From Measurement to Installation
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">1</div>

              <h3 className="mt-4 text-xl font-bold">
                Send Photos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Send us a few photos of the opening and approximate measurements,
                or arrange for us to visit the property.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">2</div>

              <h3 className="mt-4 text-xl font-bold">
                Choose the Gate
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We can discuss the size, height, style and level of privacy you
                need, along with any posts or fittings required.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">3</div>

              <h3 className="mt-4 text-xl font-bold">
                Installation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                The gate and supporting components are installed, adjusted and
                checked so everything operates correctly and the area is left
                tidy.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* AREAS */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Areas We Cover
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Gate Installation Across Plymouth & Surrounding Areas
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Based in Plymouth, Timberline provides timber gate installation and
            replacement across Plymouth, Plympton, Plymstock, Saltash, Ivybridge,
            Tavistock, Torpoint, Yelverton, Wembury and surrounding areas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Plymouth",
              "Plympton",
              "Plymstock",
              "Saltash",
              "Ivybridge",
              "Tavistock",
              "Torpoint",
              "Yelverton",
              "Wembury",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700"
              >
                {area}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-4xl px-6">

          <div className="mb-12 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Gate Questions
            </h2>

          </div>

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you install garden gates in Plymouth?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Timberline supplies and installs timber garden gates, side
                gates and replacement gates across Plymouth and surrounding areas.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you make a gate to fit a specific opening?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Made-to-measure timber gates can be built to suit the width,
                height and style required for your property.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you replace the gate posts as well?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. If the existing posts are damaged, unsuitable or need
                repositioning, new supporting posts can be installed as part of
                the gate replacement.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you install a gate as part of new fencing?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Gates can be included as part of a new fencing installation
                and designed to complement the style and height of the fencing.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you offer free gate quotes?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. We provide free, no-obligation quotes across Plymouth and
                surrounding areas. You can also send photos and approximate
                measurements on WhatsApp to help us assess the job.
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

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Timberline also provides fencing, decking and waste removal across
            Plymouth and surrounding areas.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-5">

            <a
              href="/fencing-plymouth"
              className="font-semibold text-amber-700 hover:underline"
            >
              Fencing Plymouth
            </a>

            <a
              href="/decking-plymouth"
              className="font-semibold text-amber-700 hover:underline"
            >
              Decking Plymouth
            </a>

            <a
              href="/waste-removal"
              className="font-semibold text-amber-700 hover:underline"
            >
              Waste Removal Plymouth
            </a>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-black md:text-4xl">
            Need a New Gate in Plymouth?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Contact Timberline for a free, no-obligation quote for a timber
            garden gate, side gate or replacement gate.
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
              Send Photos on WhatsApp
            </a>

            <a
              href="tel:07933988421"
              className="rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call 07933 988 421
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}