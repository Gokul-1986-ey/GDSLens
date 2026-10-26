const capabilities = [
  {
    title: "Assess maturity",
    description: "Explore strengths and opportunities across your value chain.",
  },
  {
    title: "Validate insights",
    description: "Bring stakeholders together to review findings and priorities.",
  },
  {
    title: "Simulate opportunities",
    description: "Explore potential benefits and shape a transformation roadmap.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-6 py-6 text-xl font-semibold tracking-tight">
          GDSLens
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">
          Value chain assessment &amp; simulation
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          See your value chain more clearly.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          GDSLens brings maturity assessment, stakeholder insights, and benefit
          simulation into one place to help teams plan their next steps.
        </p>
        <section aria-labelledby="capabilities" className="mt-16">
          <h2 id="capabilities" className="text-2xl font-semibold">
            A foundation for better decisions
          </h2>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {capabilities.map((capability) => (
              <li key={capability.title} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">{capability.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {capability.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-10 text-sm text-slate-400">
          This initial release provides the GDSLens home page. Assessment,
          workshop, and simulation workflows are planned.
        </p>
      </main>
    </div>
  );
}
