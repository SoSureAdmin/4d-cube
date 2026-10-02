import Image from "next/image";

export default function SystemPage() {
  return (
    <main className="bg-[#f3f0ea] text-black">
      {/* INTRO */}
      <section className="blueprint-surface border-b border-black/15">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              The System
            </p>

            <h1 className="max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-6xl">
              ONE CONNECTION.
              <br />
              MANY
              <br />
              POSSIBILITIES.
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              At the centre of 4D-CUBE is a standardized connection point
              designed to bring structural elements together through a common
              interface.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              The principle is simple: standardize the connection, then allow
              the structure around it to change according to the application.
            </p>
          </div>
        </div>
      </section>

      {/* CONNECTION PRINCIPLE */}
      <section className="border-b border-black/15">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
            The Connection Principle
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-6 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="text-2xl font-semibold">Connect</h2>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                Structural elements meet at a common connection point.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-6 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Configure</h2>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                The common interface supports structural elements extending in
                different directions and configurations.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-6 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Build</h2>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                Repeating the connection principle creates larger structural
                frameworks.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-6 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Expand</h2>

              <p className="mt-5 text-sm leading-6 text-neutral-600">
                The same modular logic allows structures to be extended,
                adapted or reconfigured as requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="blueprint-surface border-b border-black/15">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                How It Works
              </p>

              <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                THE CUBE
                <br />
                IS CONSTANT.
                <br />
                THE STRUCTURE
                <br />
                CAN CHANGE.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed as a system of standardized
                structural components connected through a common node.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                The objective is to make individual structural elements
                removable and reusable, allowing a configuration to evolve
                without turning the complete structure into a permanent
                assembly.
              </p>
            </div>
          </div>

          <div className="mt-20 border-y border-black/20 py-8">
            <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between">
              <span>Profile</span>
              <span className="text-neutral-400">→</span>
              <span>Connection</span>
              <span className="text-neutral-400">→</span>
              <span>Cube</span>
              <span className="text-neutral-400">→</span>
              <span>Frame</span>
              <span className="text-neutral-400">→</span>
              <span>Structure</span>
            </div>
          </div>

          <div className="grid md:grid-cols-5">
            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:pr-6">
              <p className="text-xs tracking-[0.22em] text-neutral-500">01</p>

              <h3 className="mt-6 text-xl font-semibold">Profile</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                150 × 150 mm structural elements form the current baseline for
                timber and aluminium development.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-6">
              <p className="text-xs tracking-[0.22em] text-neutral-500">02</p>

              <h3 className="mt-6 text-xl font-semibold">Connection</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                A removable interface between the structural profile and the
                Cube.
              </p>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
                Under development
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-6">
              <p className="text-xs tracking-[0.22em] text-neutral-500">03</p>

              <h3 className="mt-6 text-xl font-semibold">Cube</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                The standardized structural node at the centre of the 4D-CUBE
                system.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-6">
              <p className="text-xs tracking-[0.22em] text-neutral-500">04</p>

              <h3 className="mt-6 text-xl font-semibold">Frame</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Repeated connections combine profiles and Cubes into
                configurable structural frames.
              </p>
            </div>

            <div className="py-10 md:pl-6">
              <p className="text-xs tracking-[0.22em] text-neutral-500">05</p>

              <h3 className="mt-6 text-xl font-semibold">Structure</h3>

              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Frames create structures that can be adapted as requirements,
                locations and applications change.
              </p>
            </div>
          </div>

          <div className="border-t border-black/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
              Build. Use. Expand or reduce.
              <br />
              Dismantle. Transport. Rebuild.
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE IMAGE */}
      <section className="border-b border-black/15">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200">
            <Image
              src="/system-frame.jpeg"
              alt="4D-CUBE prototype structural frame using standardized connection points"
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <div className="mt-5 flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 md:flex-row md:items-center md:justify-between">
            <span>Prototype / System Development</span>
            <span>Connection → Frame → Structure</span>
          </div>
        </div>
      </section>

      {/* FROM PRINCIPLE TO PLATFORM */}
      <section className="blueprint-surface border-b border-black/15">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
              From Principle to Platform
            </p>

            <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              A COMMON POINT
              <br />
              FOR DIFFERENT
              <br />
              STRUCTURES.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              The current prototype explores how a single connection geometry
              can provide multiple attachment points around a structural node.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Repeating the connection principle creates the basis for larger
              structural frames while dimensions, materials and configurations
              can change around the common interface.
            </p>

            <div className="mt-14 border-t border-black/20 pt-8">
              <p className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.02em]">
                Standardize the connection.
                <br />
                Free the structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM LOGIC */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
                System Logic
              </p>

              <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                KEEP THE
                <br />
                CONNECTION.
                <br />
                CHANGE THE REST.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE does not prescribe one finished structure. The
                connection provides a common starting point from which
                different structural systems can be configured.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                That distinction is central to the platform: keep the
                connection standardized while allowing the surrounding
                structure to respond to its material, location and intended
                use.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}