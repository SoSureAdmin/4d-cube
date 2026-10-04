import Link from "next/link";

export default function MissionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Mission
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            BUILDINGS SHOULD
            <br />
            ADAPT TO LIFE.
            <br />
            <span className="text-black/35">
              NOT THE OTHER WAY AROUND.
            </span>
          </h1>
        </div>
      </section>

      {/* Mission statement */}
      <section className="border-t border-black/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              Our Mission
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed tracking-[-0.02em] md:text-3xl">
              To create a modular building system that allows structures to
              change, expand, reduce, move and rebuild using the same
              components.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/60">
              4D-CUBE is based on a simple principle: a structure should not
              become obsolete because needs or circumstances change.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
              By combining standardized profiles, reusable connections and a
              modular construction logic, components can remain useful across
              different configurations, locations and stages of life.
            </p>
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-[#292722] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Designed for change
          </p>

          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            {[
              ["01", "Build"],
              ["02", "Use"],
              ["03", "Expand / Reduce"],
              ["04", "Dismantle"],
              ["05", "Transport"],
              ["06", "Rebuild"],
            ].map(([number, title]) => (
              <div key={number} className="bg-[#292722] p-8 md:p-10">
                <p className="text-xs tracking-[0.2em] text-white/30">
                  {number}
                </p>

                <p className="mt-8 text-xl font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Build what you need today.
            <br />
            Change it when tomorrow changes.
          </h2>

          <Link
            href="/system"
            className="text-sm font-medium uppercase tracking-[0.15em] underline underline-offset-8"
          >
            Explore the system →
          </Link>
        </div>
      </section>
    </main>
  );
}