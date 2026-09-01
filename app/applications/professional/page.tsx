import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Professional
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                STANDARDIZE
                <br />
                THE
                <br />
                CONNECTION.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Professional applications require more than a successful
                one-off structure. They require consistency, repeatability and
                the ability to adapt a common principle across different
                projects.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE applies a standardized connection principle to a
                modular construction platform that can form the basis for
                repeatable structural configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL VALUE */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Professional Value
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="text-2xl font-semibold">Standardize</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Establish a common connection principle as a repeatable
                interface across different structural configurations.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Configure</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Adapt structural frames to different dimensions, layouts,
                materials and intended uses.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Integrate</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Develop interfaces around the same platform for structural
                elements, materials and additional building components.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Repeat</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Turn validated configurations into repeatable projects, kits
                and structural systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION DIRECTIONS */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Application Directions
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                FROM
                <br />
                ONE-OFF
                <br />
                TO SYSTEM.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                The value of a standardized connection principle increases
                when structures are repeated, adapted across sites or
                incorporated into broader product and distribution models.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Potential directions include commercial structures, retail
                concepts, temporary installations, modular facilities,
                exhibitions and configurable building systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT LOGIC */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                Development Logic
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                PROVE.
                <br />
                REPEAT.
                <br />
                SCALE.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Professional value depends on more than the connection concept.
                Individual configurations must be engineered, tested and
                validated for their intended use.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Once a configuration is proven, the same underlying platform
                can provide the basis for repeatable products, project systems
                and broader commercial applications.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Standardize the connection.
              <br />
              Prove the configuration.
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
              href="/applications/humanitarian"
              className="border-b border-black pb-1 font-medium transition-opacity hover:opacity-50"
            >
              Humanitarian →
            </Link>

            <Link
              href="/applications/home-garden"
              className="border-b border-black pb-1 font-medium transition-opacity hover:opacity-50"
            >
              Home &amp; Garden →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}