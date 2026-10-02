import Link from "next/link";

export default function HumanitarianPage() {
  return (
    <main className="min-h-screen text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Humanitarian
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                THE STRUCTURE
                <br />
                MOVES WITH
                <br />
                THE NEED.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Crisis environments change. Requirements change. Locations can
                change.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is exploring a modular humanitarian shelter concept
                based on a lightweight aluminium frame that can be assembled,
                adapted, dismantled, transported and rebuilt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE KIT */}
      <section className="border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                The Kit
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                ONE KIT.
                <br />
                A COMPLETE
                <br />
                FRAME.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                The concept is to package the structural elements required for
                a complete shelter frame into a transportable modular kit.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Aluminium profiles, 4D-CUBE connection nodes and removable
                connection components form the structural skeleton, while a
                membrane or other suitable enclosure creates the protected
                space.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Additional modules could allow an existing structure to grow
                when requirements increase — or be reduced when they decrease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            Designed For Change
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
            BUILD.
            <br />
            USE.
            <br />
            MOVE.
            <br />
            BUILD AGAIN.
          </h2>

          <div className="mt-20 grid border-t border-white/20 md:grid-cols-3">
            {[
              ["01", "Build", "Assemble the modular frame where it is needed."],
              [
                "02",
                "Use",
                "Create a protected structure around the standardized frame.",
              ],
              [
                "03",
                "Expand / Reduce",
                "Adapt the configuration as requirements change.",
              ],
              [
                "04",
                "Dismantle",
                "Take the structure apart without making the components disposable.",
              ],
              [
                "05",
                "Transport",
                "Move the reusable structural system to another location.",
              ],
              [
                "06",
                "Rebuild",
                "Use the components again in the same or a different configuration.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-b border-white/20 py-10 md:border-r md:px-8 first:md:pl-0"
              >
                <p className="text-xs tracking-[0.22em] text-white/35">
                  {number}
                </p>

                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 max-w-xs leading-7 text-white/55">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MOBILITY MATTERS */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Mobility
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                NEEDS DO NOT
                <br />
                ALWAYS STAY
                <br />
                IN ONE PLACE.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Humanitarian infrastructure is often required in environments
                where circumstances can change quickly.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                A structure that can be dismantled and reconstructed creates
                the possibility for its structural components to follow the
                need instead of being permanently tied to their first
                location.
              </p>

              <div className="mt-12 border-t border-black/20 pt-8">
                <p className="text-3xl font-medium tracking-[-0.03em]">
                  The structure moves with the need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM PRINCIPLES */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            System Principles
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>
              <h3 className="text-2xl font-semibold">Modular</h3>
              <p className="mt-5 leading-7 text-neutral-600">
                Standardized components create repeatable structural modules.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>
              <h3 className="text-2xl font-semibold">Lightweight</h3>
              <p className="mt-5 leading-7 text-neutral-600">
                Aluminium is being explored as the baseline structural material
                for the humanitarian system.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>
              <h3 className="text-2xl font-semibold">Reconfigurable</h3>
              <p className="mt-5 leading-7 text-neutral-600">
                Modules are intended to support expansion, reduction and
                changing configurations.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>
              <h3 className="text-2xl font-semibold">Reusable</h3>
              <p className="mt-5 leading-7 text-neutral-600">
                Structural components are intended for dismantling, transport
                and repeated use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STATUS */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                Development
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                FROM
                <br />
                CONCEPT
                <br />
                TO PROOF.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                The humanitarian kit is currently a development direction, not
                a validated or deployment-ready shelter system.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Engineering, connection development, structural testing,
                enclosure design, packing, transport and assembly requirements
                must be validated before performance claims can be made.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Prove the application.
              <br />
              Then scale the system.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="border-t border-black/15 px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
            Explore another application
          </p>

          <div className="flex flex-wrap gap-8">
            <Link
              href="/applications/home-garden"
              className="border-b border-black pb-1 font-medium transition-opacity hover:opacity-50"
            >
              Home &amp; Garden →
            </Link>

            <Link
              href="/applications/professional"
              className="border-b border-black pb-1 font-medium transition-opacity hover:opacity-50"
            >
              Professional →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}