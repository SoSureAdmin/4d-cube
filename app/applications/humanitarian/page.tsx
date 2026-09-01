import Link from "next/link";

export default function HumanitarianPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Humanitarian
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                BUILD WHERE
                <br />
                IT IS
                <br />
                NEEDED.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Humanitarian and crisis environments create demanding
                conditions for construction, transport, materials and local
                assembly.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being explored as a modular connection platform for
                structures that can respond to different local requirements
                while retaining the same underlying building principle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN CONSIDERATIONS */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Design Considerations
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="text-2xl font-semibold">Transport</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Explore how compact connection components combined with
                suitable local structural materials could reduce what needs to
                be transported.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Connect</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Use a standardized connection principle as the common
                interface between structural elements.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Build</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Explore structures that combine standardized connections with
                suitable materials available closer to the point of use.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Adapt</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Investigate how structural configurations could be changed,
                extended or repurposed as requirements evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POTENTIAL APPLICATIONS */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Potential Applications
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                ONE PRINCIPLE.
                <br />
                DIFFERENT
                <br />
                NEEDS.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                A common modular connection platform could support different
                types of temporary and semi-temporary structures without
                requiring a completely different structural principle for each
                application.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Potential applications include shelter, operational
                facilities, storage, community spaces and other structures
                where adaptable construction could provide value.
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
                POTENTIAL
                <br />
                TO PROOF.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Humanitarian use is an application direction for 4D-CUBE, not
                yet a validated deployment solution.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                The next step is to develop and evaluate specific
                configurations against real requirements together with
                relevant technical and humanitarian partners.
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