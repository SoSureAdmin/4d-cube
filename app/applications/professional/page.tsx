import Link from "next/link";

export default function ProfessionalPage() {
  return (
    <main className="min-h-screen text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Professional
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                BUILD ONCE.
                <br />
                CONFIGURE
                <br />
                AGAIN.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Professional structures often change from one project,
                location or requirement to the next.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed as a modular construction platform
                where standardized components can form different structures
                without making every new requirement a completely new build.
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

              <h2 className="text-2xl font-semibold">Repeat</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Use a common structural platform across repeat projects and
                installations.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Reconfigure</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Change dimensions and layouts by reorganising reusable
                structural components.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Redeploy</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Dismantle structural systems and deploy the components at
                another project or location.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Reuse</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Keep structural components productive beyond a single
                installation or configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM VALUE */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Platform Value
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              INVEST IN
              <br />
              COMPONENTS.
              <br />
              NOT ONLY
              <br />
              STRUCTURES.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              A conventional project often creates value for one specific
              installation. When that installation is no longer required,
              much of the structural value may be difficult to retain.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              4D-CUBE explores a different model: retain value in standardized
              components that can potentially move from one configuration,
              project or location to another.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em]">
                The project can end.
                <br />
                The system remains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION DIRECTIONS */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Application Directions
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="text-2xl font-semibold">Retail</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Configurable structures for temporary retail, shop-in-shop
                concepts and changing commercial environments.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Exhibition</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Structural systems that can be transported, rebuilt and
                reconfigured across events and locations.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Facilities</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Modular frames for temporary or adaptable operational spaces
                and facilities.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Projects</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                A common structural platform for partners developing repeatable
                project-specific configurations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            Built For Reuse
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
            ONE SYSTEM.
            <br />
            MULTIPLE PROJECTS.
          </h2>

          <div className="mt-20 grid border-t border-white/20 md:grid-cols-3">
            {[
              [
                "01",
                "Build",
                "Configure the structural system for the first requirement.",
              ],
              [
                "02",
                "Deploy",
                "Use the configuration for its intended project or location.",
              ],
              [
                "03",
                "Reconfigure",
                "Change dimensions or layout when the requirement changes.",
              ],
              [
                "04",
                "Dismantle",
                "Separate the structure into reusable system components.",
              ],
              [
                "05",
                "Redeploy",
                "Move the components to another project or location.",
              ],
              [
                "06",
                "Reuse",
                "Create the next configuration from the same underlying system.",
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

      {/* PARTNERSHIP MODEL */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Partnership
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A PLATFORM
              <br />
              FOR PARTNERS
              <br />
              TO BUILD ON.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              The long-term opportunity is not limited to structures developed
              directly by 4D-CUBE.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              A standardized platform could allow selected manufacturers,
              designers, distributors and project partners to develop
              application-specific solutions around the same underlying
              system.
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT LOGIC */}
      <section className="border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
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
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              Professional applications must be engineered, tested and
              validated for their specific structural requirements and
              intended use.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Once configurations are proven, the underlying platform can
              provide the basis for repeatable products, project systems and
              partner-led applications.
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