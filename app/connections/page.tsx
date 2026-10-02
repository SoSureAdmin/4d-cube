import Image from "next/image";

export default function FittingsPage() {
  return (
    <main className="min-h-screen text-[#161616]">
      {/* HERO */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Connection Development
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                THE CUBE
                <br />
                EXISTS.
                <br />
                THE CONNECTION
                <br />
                COMES NEXT.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                The 4D-CUBE concept depends on more than the Cube itself.
                Structural profiles must connect to the Cube in a way that
                supports assembly, disassembly and reconfiguration.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Developing that removable interface is now one of the central
                engineering tasks in turning the concept into a practical
                modular building system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT BASELINE */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Current Baseline
          </p>

          <div className="grid md:grid-cols-3">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="mt-6 text-2xl font-semibold">
                Cube
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                The first physical Cube establishes the central node around
                which the connection system is being developed.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="mt-6 text-2xl font-semibold">
                150 × 150
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                150 × 150 mm is the current development baseline for the
                structural interface in both timber and aluminium directions.
              </p>
            </div>

            <div className="pt-10 md:pl-10 md:pt-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="mt-6 text-2xl font-semibold">
                Connection
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                The removable mechanical interface between Cube and structural
                profile remains under development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE ENGINEERING QUESTION */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              The Engineering Question
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              HOW DO WE
              <br />
              CONNECT
              <br />
              WITHOUT MAKING
              <br />
              IT PERMANENT?
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              A permanent joint can create a structure. But 4D-CUBE requires
              more: the structural element should be capable of being removed
              without destroying the Cube or unnecessarily sacrificing the
              profile.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              That requirement is fundamental to expansion, reduction,
              dismantling, transport and rebuilding.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em]">
                Assembly is only half the problem.
                <br />
                Disassembly matters too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EARLY CONNECTION STUDY */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-24">
            <div className="flex flex-col justify-between">
              <div>
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                  Early Connection Study
                </p>

                <h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  FROM
                  <br />
                  QUESTION
                  <br />
                  TO SKETCH.
                </h2>
              </div>

              <p className="mt-10 max-w-md text-sm leading-7 text-neutral-600 md:mt-16">
                Early architectural input exploring how structural profiles
                could meet the Cube. The connection geometry shown here is a
                development study, not a final engineering solution.
              </p>
            </div>

            <div>
              <div className="relative h-[380px] overflow-hidden bg-[#e4d8c4] md:h-[520px]">
                <Image
                  src="/connection-study-01.jpeg"
                  alt="Early architectural connection study for the 4D-CUBE system"
                  fill
                  sizes="(max-width: 768px) 100vw, 760px"
                  className="scale-[1.75] object-cover object-center"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2 border-t border-black/15 pt-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500 md:flex-row md:items-center md:justify-between">
                <span>Connection Study / Development Process</span>
                <span>Concept — Not For Construction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN REQUIREMENTS */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Development Requirements
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                Connect
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Create a practical mechanical interface between the Cube and
                structural profile.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                Secure
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Develop a connection capable of transferring the loads required
                by the intended configuration.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                Release
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Allow the structural element to be disconnected as part of
                deliberate dismantling or reconfiguration.
              </p>
            </div>

            <div className="pt-10 md:pl-8">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h3 className="mt-6 text-2xl font-semibold">
                Reuse
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Preserve useful system components so they can form part of the
                next configuration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL DIRECTIONS */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                Material Directions
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                ONE CUBE.
                <br />
                DIFFERENT
                <br />
                STRUCTURAL
                <br />
                MATERIALS.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Timber and aluminium create different engineering conditions,
                but both are being explored around the same 150 × 150 mm
                development baseline.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Whether one connection design can serve both materials, or
                whether material-specific interfaces are required, remains an
                engineering question to be resolved through development and
                testing.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/20 md:grid-cols-2">
            <div className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:pr-12">
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                Timber
              </p>

              <h3 className="mt-6 text-3xl font-medium">
                Home &amp; Garden
              </h3>

              <p className="mt-5 max-w-lg leading-7 text-white/55">
                Connection development for timber structures, prototypes and
                future modular outdoor applications.
              </p>
            </div>

            <div className="py-10 md:pl-12">
              <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                Aluminium
              </p>

              <h3 className="mt-6 text-3xl font-medium">
                Lightweight Systems
              </h3>

              <p className="mt-5 max-w-lg leading-7 text-white/55">
                Connection development for lightweight modular frames,
                including the humanitarian kit direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Development Process
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h3 className="mt-6 text-2xl font-semibold">Define</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Establish the mechanical and structural requirements of the
                connection.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h3 className="mt-6 text-2xl font-semibold">Prototype</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Develop candidate connection geometries and physical
                prototypes.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h3 className="mt-6 text-2xl font-semibold">Test</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Evaluate structural behaviour, assembly, disassembly and
                repeated use.
              </p>
            </div>

            <div className="pt-10 md:pl-8">
              <p className="text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h3 className="mt-6 text-2xl font-semibold">Validate</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Determine which solution should become part of the 4D-CUBE
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Current Status
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              SOLVE THE
              <br />
              FIRST CONNECTION
              <br />
              BEFORE BUILDING
              <br />
              A FAMILY.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              Additional fittings and interfaces may become relevant as the
              platform develops.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              For now, the priority is deliberately narrower: develop,
              prototype and validate the core removable connection between the
              Cube and the structural profile.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="text-3xl font-medium tracking-[-0.03em]">
                Cube → Connection → Profile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}