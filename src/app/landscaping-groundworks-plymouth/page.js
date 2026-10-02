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
  Complete Garden Makeovers in Plymouth
</h1>

<p className="mt-5 text-lg leading-8 text-slate-200">
  Transform your entire outdoor space with Timberline. From patios and
  porcelain paving to retaining walls, raised planters, fencing, decking,
  groundworks and drainage — we can bring the whole project together from
  preparation to the finished garden.
</p>

            

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                Book a Free Site Visit
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
{/* COMPLETE GARDEN MAKEOVERS */}
<section className="bg-slate-900 py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          Complete Garden Transformations
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-4xl">
          More Than Just a New Patio
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          If your whole garden needs attention, Timberline can bring the
          different parts of the project together. Rather than arranging
          separate contractors for the patio, fencing, decking and groundworks,
          we can plan and carry out the complete transformation.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          We can work with you to develop a practical layout for the space,
          taking into account how you want to use the garden, existing levels,
          access, drainage and the materials and features you would like to
          include.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Whether that means creating a porcelain patio, changing garden
          levels, building retaining walls and raised planters, replacing
          fencing or adding a new deck, the project can be planned as one
          complete outdoor renovation.
        </p>

        <a
          href="/#contact"
          className="mt-8 inline-block rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          Discuss Your Garden Makeover
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          "Patios & Porcelain",
          "Retaining Walls",
          "Raised Planters",
          "Fencing & Gates",
          "Decking",
          "Groundworks",
          "Drainage",
          "Waste Removal",
        ].map((service) => (
          <div
            key={service}
            className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-semibold text-slate-100"
          >
            {service}
          </div>
        ))}
      </div>
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
  Everything Your Garden Transformation Needs
</h2>

<p className="mt-5 text-lg leading-8 text-slate-600">
  Choose a single service or bring several together as part of a complete
  garden makeover. From the groundwork underneath to the finished patio,
  fencing or decking, Timberline can manage the project from start to finish.
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
  <h3 className="text-xl font-bold">Fencing & Gates</h3>
  <p className="mt-3 leading-7 text-slate-600">
    New fencing and garden gates can be incorporated into the wider
    landscaping project, giving the finished garden privacy, security and a
    consistent appearance.
  </p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
  <h3 className="text-xl font-bold">Timber & Composite Decking</h3>
  <p className="mt-3 leading-7 text-slate-600">
    Decking can be incorporated alongside patios, retaining walls and other
    landscaping to create separate seating areas, deal with changing levels
    or make better use of difficult parts of the garden.
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
              From First Visit to Finished Garden
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
  <div className="rounded-3xl border border-slate-200 p-7">
    <div className="text-3xl font-black text-amber-700">1</div>
    <h3 className="mt-4 text-xl font-bold">Free Site Visit</h3>
    <p className="mt-3 leading-7 text-slate-600">
      We visit your property to look at the garden, access, existing levels
      and what you would like to achieve with the space.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 p-7">
    <div className="text-3xl font-black text-amber-700">2</div>
    <h3 className="mt-4 text-xl font-bold">Plan Your New Garden</h3>
    <p className="mt-3 leading-7 text-slate-600">
      We discuss the layout, materials and features that could work together,
      from patios and decking to fencing, retaining walls, planters and
      drainage.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 p-7">
    <div className="text-3xl font-black text-amber-700">3</div>
    <h3 className="mt-4 text-xl font-bold">Detailed Quotation</h3>
    <p className="mt-3 leading-7 text-slate-600">
      Once the project is agreed, we provide a clear quotation covering the
      planned work, materials and the different elements of your garden
      transformation.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 p-7">
    <div className="text-3xl font-black text-amber-700">4</div>
    <h3 className="mt-4 text-xl font-bold">Build & Transform</h3>
    <p className="mt-3 leading-7 text-slate-600">
      We take care of the groundwork and installation, bringing the different
      parts of the project together to create the finished outdoor space.
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
              Garden Makeover & Landscaping Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6">
  <h3 className="text-xl font-bold text-slate-900">
    Do you provide complete garden makeovers in Plymouth?
  </h3>
  <p className="mt-3 leading-7 text-slate-600">
    Yes. Timberline can take care of complete garden transformations,
    combining services such as patios and porcelain paving, retaining walls,
    raised planters, fencing, gates, decking, groundworks, drainage and waste
    removal into one project. We can visit your property, discuss how you want
    to use the space and help plan a practical layout for the finished garden.
  </p>
</div>
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
  Ready to Transform Your Garden?
</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
  Whether you need a new patio or a complete garden makeover, we can visit
  your property, discuss your ideas and put together a plan for transforming
  the space.
</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50"
            >
              Book a Free Site Visit
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