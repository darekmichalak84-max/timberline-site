export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
          Enquiry Sent
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Thanks, we’ve received your message
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          We’ll get back to you as soon as possible regarding your fencing,
          decking, or gate project.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-2xl bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}