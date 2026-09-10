import Image from "next/image";

export const metadata = {
  title: "Waste Removal Plymouth | Rubbish Clearance | Timberline",
  description:
    "Waste removal and rubbish clearance in Plymouth. Garden waste, household rubbish, builders' waste, bulky items and property clearances. Free quotes from Timberline.",
};

const wasteRemovalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Waste Removal Plymouth",
  serviceType: "Waste Removal and Rubbish Clearance",
  description:
    "Waste removal and rubbish clearance for homes, gardens, landlords, tradespeople and businesses across Plymouth and surrounding areas.",
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

export default function WasteRemovalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(wasteRemovalSchema),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-waste-removal.jpg"
          alt="Waste removal and rubbish clearance service in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Timberline Waste Removal
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Waste Removal Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Reliable waste removal and rubbish clearance for homes, gardens,
              landlords, tradespeople and businesses across Plymouth and
              surrounding areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Get a Free Quote
              </a>

              <a
                href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20waste%20removal."
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
              Rubbish Clearance Plymouth
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              A simple way to get unwanted waste cleared
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timberline provides practical waste removal and rubbish clearance
              across Plymouth for domestic and commercial customers. Whether
              you're clearing your garden, renovating a property, replacing old
              fencing or simply need bulky unwanted items taken away, we can help.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From smaller collections to larger property and garden clearances,
              we aim to make the process straightforward. Send us a few photos
              together with a description of what needs removing and we can
              usually provide a quotation without an initial site visit.
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/service-waste-removal.jpg"
              alt="Rubbish and garden waste collection in Plymouth"
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
              What We Collect
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Waste Removal & Clearance Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can help with a wide range of everyday household, garden,
              renovation and property clearance waste.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Garden Waste Removal
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Clearance of branches, hedge cuttings, plants, timber and other
                waste generated while improving or clearing your garden.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Household Rubbish Clearance
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Collection of unwanted household items, general rubbish,
                furniture and bulky items when you're clearing or reorganising
                your property.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Builders & Renovation Waste
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Removal of suitable waste generated during property maintenance,
                refurbishment and improvement work.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Property Clearances
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Waste collection for homeowners, landlords, property managers
                and businesses clearing homes, gardens and other properties.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ADDITIONAL WASTE */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Old Fencing & Decking Removal
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Old fences and decking can leave a surprising amount of timber and
              other material behind. We can collect unwanted fencing, fence
              panels, posts, decking boards and associated waste following
              garden improvements or replacement work.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This service is available whether Timberline completed the original
              installation work or you simply need existing garden materials
              cleared away.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Residential & Commercial Waste Removal
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We provide waste collection for homeowners as well as landlords,
              tradespeople, property managers and local businesses. This can be
              useful after maintenance work, property improvements, garden work
              or general clear-outs.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you're unsure whether we can collect something, send us a photo
              on WhatsApp and we'll let you know.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quick and straightforward waste collection
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-black text-amber-700">1</div>
              <h3 className="mt-4 text-xl font-bold">
                Send Us Some Photos
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Send photos of the waste along with your location and a brief
                description of what needs collecting.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-black text-amber-700">2</div>
              <h3 className="mt-4 text-xl font-bold">
                Receive Your Quote
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We'll review the information and provide a clear,
                no-obligation quotation for the collection.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <div className="text-3xl font-black text-amber-700">3</div>
              <h3 className="mt-4 text-xl font-bold">
                Arrange Collection
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Once you're happy to proceed, we'll arrange a convenient time
                to collect and clear the agreed waste.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
          Areas We Cover
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          Waste Removal Across Plymouth & Surrounding Areas
        </h2>

        <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
          Based in Plymouth, Timberline provides waste removal and rubbish
          clearance across Plymouth, Plympton, Plymstock, Saltash, Ivybridge,
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

      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6">

          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Waste Removal Questions
            </h2>
          </div>

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                What type of waste can you collect?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We can collect a range of household, garden and property
                clearance waste, including garden waste, unwanted furniture,
                old fencing and decking, bulky items and suitable renovation
                waste. Send us photos if you're unsure about a particular item.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Do you provide garden waste removal in Plymouth?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We provide garden waste clearance throughout Plymouth and
                surrounding areas, including waste from garden maintenance,
                landscaping and garden improvement work.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Can you remove old fencing and decking?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We can collect old fence panels, timber, posts, decking
                boards and associated waste following garden renovation or
                replacement work.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                Do you offer waste collection for landlords and businesses?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We work with homeowners, landlords, tradespeople, property
                managers and businesses needing one-off waste removal and
                property clearances.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold">
                How do I get a quote?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Send us some photos of what needs removing together with your
                location and a short description. We can often provide a quote
                from the photos alone.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-2xl font-bold md:text-3xl">
            Related Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Timberline also provides fencing, decking and gate installation
            throughout Plymouth and surrounding areas.
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
              href="/gates-plymouth"
              className="font-semibold text-amber-700 hover:underline"
            >
              Gates Plymouth
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-black md:text-4xl">
            Need Waste Removed in Plymouth?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Send us a few photos of what needs collecting and we'll provide a
            free, no-obligation quote.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
            >
              Request a Free Quote
            </a>

            <a
              href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20waste%20removal."
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