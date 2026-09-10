import Image from "next/image";

export const metadata = {
  title: "Waste Removal Plymouth | Timberline",
  description:
    "Reliable waste removal and rubbish clearance in Plymouth and surrounding areas. Garden waste, household rubbish, renovation waste, old fencing, decking and bulky items collected.",
};

export default function WasteRemovalPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <section className="relative isolate overflow-hidden">
        <Image
          src="/service-waste-removal.jpg"
          alt="Waste removal and rubbish clearance in Plymouth by Timberline"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-black/50" />

        <div className="mx-auto flex min-h-[65vh] max-w-7xl items-end px-6 pb-16 pt-32">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Timberline Waste Removal
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              Waste Removal in Plymouth
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Reliable waste collection and clearance for homes, gardens,
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
                href="tel:07933988421"
                className="rounded-2xl border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Call 07933 988 421
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
              Waste Clearance Services
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              A simple, reliable way to clear unwanted waste
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Timberline provides practical waste removal for a wide range of
              domestic and commercial jobs. Whether you're clearing a garden,
              renovating a property or simply need unwanted materials taken
              away, we can help.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Send us a few photos and a description of what needs collecting
              and we can usually provide a quick quotation.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Garden waste removal",
              "Household rubbish clearance",
              "Old fencing and decking removal",
              "Renovation and builders' waste",
              "Furniture and bulky item collection",
              "Landlord and property clearances",
              "Commercial waste collection",
              "General rubbish removal",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 font-semibold"
              >
                ✓ {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
            Areas We Cover
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Waste removal across Plymouth and surrounding areas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide waste removal throughout Plymouth, Plympton, Plymstock,
            Saltash, Ivybridge, Tavistock and nearby areas.
          </p>
        </div>
      </section>

      <section className="bg-amber-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            Need waste collected?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
            Send us photos of what needs removing and we'll provide a free,
            no-obligation quote.
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
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}