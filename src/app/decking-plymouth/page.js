import Image from "next/image";

export const metadata = {
  title: "Decking Plymouth | Timber & Composite Decking | Timberline",
  description:
    "Decking installation in Plymouth. Timberline installs timber and composite decking, replacement decking and raised decks across Plymouth and surrounding areas. Free quotes.",
};

const deckingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Decking Installation Plymouth",
  serviceType: "Decking Installation and Replacement",
  description:
    "Timber and composite decking installation, replacement and raised decking across Plymouth and surrounding areas.",
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

export default function DeckingPlymouthPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(deckingSchema),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-decking.jpg"
          alt="Timber and composite decking installation in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl text-white">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Timberline Decking
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Decking Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Timber and composite decking installation, replacement and
              custom-built garden decking across Plymouth and surrounding areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Get a Free Quote
              </a>

              <a
                href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20decking."
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
              Decking Installation Plymouth
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Quality Garden Decking Built to Last
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timberline designs and installs timber and composite decking for
              gardens and outdoor spaces across Plymouth. From simple ground-level
              decks to raised decking and larger entertaining areas, every project
              is built around the property and how you want to use the space.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can install completely new decking or replace an existing deck,
              including removal of old boards and frames where required. Particular
              attention is given to the supporting structure underneath, creating
              a strong and properly constructed base for the finished decking.
            </p>

          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src="/gallery-2.jpg"
              alt="Completed garden decking project by Timberline in Plymouth"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

        </div>
      </section>

      {/* DECKING TYPES */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Our Decking Services
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Timber & Composite Decking in Plymouth
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you prefer traditional timber or low-maintenance composite
              boards, we can build a deck to suit your garden, property and budget.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Timber Decking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Traditional timber decking provides a natural finish and can be
                designed to suit everything from compact gardens to larger outdoor
                entertaining spaces.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Composite Decking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Composite decking provides a modern, low-maintenance alternative
                to traditional timber, with a wide choice of colours and finishes
                available.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Decking Replacement
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Old or damaged decking can be removed and replaced, including the
                supporting frame where it has deteriorated or no longer provides
                a suitable base.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Raised & Custom Decking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Custom decking can help make sloping or awkward garden spaces more
                practical, including raised decks, steps, handrails and tailored
                layouts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TIMBER VS COMPOSITE */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Timber Decking
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timber remains a popular choice for garden decking because of its
              natural appearance and versatility. A properly constructed timber
              deck can be shaped around your garden and finished with steps,
              handrails or balustrades where required.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timber decking will require periodic maintenance to help protect
              its appearance and condition, but it can be an attractive and
              cost-effective option for many gardens.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Composite Decking
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Composite decking is a popular choice for customers looking for a
              modern finish with less routine maintenance than traditional timber
              boards. It is available in a range of colours, textures and profiles.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can install composite decking on a properly constructed
              supporting frame and advise on the layout and finish that best suits
              your outdoor space.
            </p>
          </div>

        </div>
      </section>

      {/* REPLACEMENT */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Existing Decking
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Decking Replacement & Old Deck Removal
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              If your existing decking has become worn, damaged or unsafe, we can
              remove the old decking and assess the structure underneath. Where
              necessary, the old frame can be replaced with a new properly
              reinforced treated timber frame before new timber or composite
              boards are installed.
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              Old decking and associated materials can also be removed and
              disposed of as part of the project, leaving the area clean and
              ready to enjoy.
            </p>

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              From Quote to Installation
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Planning Your New Deck
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">1</div>

              <h3 className="mt-4 text-xl font-bold">
                Tell Us About Your Project
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Send us photos and approximate measurements, or arrange for us
                to visit and look at the space.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">2</div>

              <h3 className="mt-4 text-xl font-bold">
                Choose Your Decking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We can discuss timber or composite boards, the layout, steps,
                handrails and other details needed for your garden.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">3</div>

              <h3 className="mt-4 text-xl font-bold">
                Installation
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Your decking is constructed with attention to the supporting
                frame, levels and finished appearance, followed by a tidy-up of
                the working area.
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
            Decking Across Plymouth & Surrounding Areas
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Based in Plymouth, Timberline provides timber and composite decking
            installation and replacement across Plymouth, Plympton, Plymstock,
            Saltash, Ivybridge, Tavistock, Torpoint, Yelverton, Wembury and
            surrounding areas.
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
              Decking Questions
            </h2>

          </div>

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you install both timber and composite decking?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Timberline installs both timber and composite decking. The
                best option depends on the appearance, maintenance requirements
                and budget you have in mind for your garden.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you replace my existing decking?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. We can remove existing decking, inspect the frame underneath
                and replace the frame where necessary before installing the new
                decking.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you build raised decking?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. We can construct raised decking and tailored layouts to make
                better use of sloping, uneven or awkward garden spaces, including
                steps and handrails where required.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you remove and dispose of old decking?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. Removal and disposal of existing decking and related
                materials can be included as part of a decking replacement
                project.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you offer free decking quotes in Plymouth?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yes. We provide free, no-obligation decking quotes across
                Plymouth and surrounding areas. Photos and approximate
                measurements can also help us provide an initial estimate.
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
            Timberline also provides fencing, garden gates and waste removal
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
              href="/gates-plymouth"
              className="font-semibold text-amber-700 hover:underline"
            >
              Gates Plymouth
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
            Thinking About New Decking in Plymouth?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Contact Timberline for a free, no-obligation quote for timber,
            composite or replacement decking.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/#contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
            >
              Request a Free Quote
            </a>

            <a
              href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20decking."
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