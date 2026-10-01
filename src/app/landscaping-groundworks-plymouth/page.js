import Image from "next/image";

export const metadata = {
  title: "Landscaping & Groundworks Plymouth | Timberline",
  description:
    "Landscaping and groundworks in Plymouth. Patios, porcelain paving, retaining walls, raised planters, garden bases, drainage and ground preparation. Free quotes.",
};

const landscapingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landscaping & Groundworks Plymouth",
  serviceType: "Landscaping, Groundworks, Patios and Retaining Walls",
  description:
    "Landscaping and groundwork services including patios, porcelain paving, retaining walls, raised planters, garden bases, drainage and ground preparation across Plymouth and surrounding areas.",
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

export default function LandscapingGroundworksPlymouthPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landscapingSchema),
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-landscaping-groundworks.jpg"
          alt="Landscaping, patios and groundworks in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
              Timberline Landscaping & Groundworks
            </p>

            <h1 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Landscaping & Groundworks Plymouth
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-200">
              Patios, porcelain paving, retaining walls, raised planters and
              professional ground preparation across Plymouth and surrounding
              areas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Get a Free Quote
              </a>

              <a
                href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20landscaping%20or%20groundworks."
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
              Landscaping & Groundworks Plymouth
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Transforming Outdoor Spaces from the Ground Up
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timberline provides hard landscaping and groundwork services for
              gardens and outdoor spaces across Plymouth. From a new patio or
              porcelain paved area to retaining walls, raised planters and
              complete ground preparation, we can help turn unused or difficult
              areas into practical outdoor spaces.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Good landscaping starts underneath the finished surface. We take
              care of excavation, levels, sub-base preparation and drainage
              where required, creating a properly prepared foundation before
              the finished paving, wall or garden feature is installed.
            </p>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/service-landscaping-groundworks.jpg"
              alt="Landscaped garden with patio and retaining wall in Plymouth"
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
              Our Landscaping Services
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Landscaping & Groundwork Services in Plymouth
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From preparing the ground to installing the finished landscaping,
              we can take care of a wide range of outdoor projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Patios & Paving</h3>
              <p className="mt-3 leading-7 text-slate-600">
                New patios and paved areas built with careful attention to
                levels, falls, drainage and ground preparation for a durable
                finished outdoor space.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Porcelain Paving</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Modern porcelain patios provide a clean, contemporary finish
                with a wide range of colours, sizes and styles available to
                complement your garden.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Retaining Walls</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Retaining walls can help manage changes in garden level, support
                raised areas and create a more practical layout in sloping or
                uneven gardens.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Raised Planters</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Built raised planters can create attractive planting areas,
                define different garden levels and add structure to a new
                landscaping design.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">Garden Bases</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Properly prepared bases for sheds, garden buildings and other
                outdoor structures, including excavation, sub-base preparation
                and a suitable finished surface.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold">
                Excavation & Ground Preparation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ground can be excavated, levelled and prepared for patios,
                landscaping, retaining walls, decking and other garden
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PATIOS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Patios Plymouth
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Patios & Porcelain Paving
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A new patio can completely change how you use your garden,
              creating a practical area for outdoor furniture, entertaining,
              barbecues or simply enjoying the space.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We can install traditional paving or modern porcelain paving and
              prepare the ground underneath, including excavation, sub-base,
              levels and appropriate falls for drainage.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Garden Structures
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Retaining Walls & Raised Planters
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Retaining walls are particularly useful where gardens have
              different levels or sloping ground. They can help create flatter,
              more usable sections of garden while providing structure to the
              overall landscaping.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Raised planters can also be incorporated into patios and
              landscaped areas to create defined planting zones and an
              attractive finished garden layout.
            </p>
          </div>
        </div>
      </section>

      {/* GROUNDWORK */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Ground Preparation
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Proper Preparation Makes the Difference
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            The quality of the finished patio, wall or landscaped area depends
            heavily on what is underneath it. We can excavate and prepare the
            area, install suitable sub-base material, establish the required
            levels and falls, and consider drainage before the finished work is
            installed.
          </p>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Soil, old paving, timber and other waste produced during the work
            can also be removed as part of the project, helping keep the entire
            job with one local contractor.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              From Idea to Finished Garden
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Planning Your Landscaping Project
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">1</div>
              <h3 className="mt-4 text-xl font-bold">
                Tell Us About Your Project
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Send photos and approximate measurements or arrange a visit so
                we can look at the garden, access and existing ground levels.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">2</div>
              <h3 className="mt-4 text-xl font-bold">Plan the Work</h3>
              <p className="mt-3 leading-7 text-slate-600">
                We discuss the proposed layout, materials, ground preparation,
                drainage and any retaining walls, planters or other features
                required.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-7">
              <div className="text-3xl font-black text-amber-700">3</div>
              <h3 className="mt-4 text-xl font-bold">
                Groundworks & Installation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                The area is prepared and the landscaping installed with
                attention to levels, structure, drainage and the final
                appearance of the garden.
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
            Landscaping & Groundworks Across Plymouth
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Based in Plymouth, Timberline provides landscaping, patios,
            retaining walls and groundwork services across Plymouth, Plympton,
            Plymstock, Saltash, Ivybridge, Tavistock, Torpoint, Yelverton,
            Wembury and surrounding areas.
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
              Landscaping & Groundworks Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you install patios in Plymouth?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Timberline installs patios and paved outdoor areas across
                Plymouth and surrounding areas, including modern porcelain
                paving.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you build retaining walls?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We can build retaining walls as part of landscaping
                projects to manage changes in ground level and create more
                usable garden areas.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you prepare the ground before laying a patio?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Ground preparation can include excavation, levelling,
                sub-base preparation and establishing suitable falls before the
                paving is installed.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you build a base for a shed or garden building?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We can prepare suitable bases for sheds and garden
                buildings, depending on the structure and the existing ground
                conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Can you remove soil and waste from the project?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. Soil, old paving and other waste generated during the work
                can be removed and disposed of as part of the project where
                agreed.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Do you offer free landscaping quotes in Plymouth?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yes. We provide free, no-obligation quotes for landscaping and
                groundwork projects across Plymouth and surrounding areas.
                Photos and approximate measurements can help us provide an
                initial estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Related Services</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Timberline also provides fencing, decking, garden gates and waste
            removal throughout Plymouth and surrounding areas.
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
            Planning a Landscaping Project in Plymouth?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Contact Timberline for a free, no-obligation quote for patios,
            paving, retaining walls, planters and groundworks.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
            >
              Request a Free Quote
            </a>

            <a
              href="https://wa.me/447933988421?text=Hi%20Timberline%2C%20I%27d%20like%20a%20quote%20for%20landscaping%20or%20groundworks."
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