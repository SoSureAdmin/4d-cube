import Image from "next/image";
import Link from "next/link";

export default function HomeGardenPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Home &amp; Garden
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                ONE SYSTEM.
                <br />
                BUILD IT
                <br />
                YOUR WAY.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Outdoor projects rarely start with the same dimensions,
                surroundings or requirements.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE applies a standardized connection principle to
                structures that can be configured around different spaces,
                materials and uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Prototype
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <Image
                src="/system-frame.jpeg"
                alt="4D-CUBE timber structure prototype"
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-end">
              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                FROM
                <br />
                CONNECTION
                <br />
                TO STRUCTURE.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Prototype construction is being used to explore how the
                connection principle performs as part of real outdoor
                structures.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Practical construction provides the basis for refining the
                system before finished kits, dimensions and product
                configurations are defined.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 md:flex-row md:justify-between">
            <span>Prototype / Home &amp; Garden Development</span>
            <span>Connection → Frame → Outdoor Structure</span>
          </div>
        </div>
      </section>

      {/* APPLICATION DIRECTIONS */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Application Directions
          </p>

          <div className="grid md:grid-cols-4">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-8">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="text-2xl font-semibold">Pergola</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Modular structural frames for terraces, gardens and outdoor
                living spaces.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="text-2xl font-semibold">Greenhouse</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Configurable frames that can respond to different dimensions,
                locations and enclosure requirements.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-8 md:py-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="text-2xl font-semibold">Garden Room</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                A modular structural basis for enclosed or semi-enclosed
                outdoor spaces.
              </p>
            </div>

            <div className="pt-10 md:pl-8 md:pt-0">
              <p className="mb-5 text-xs tracking-[0.22em] text-neutral-500">
                04
              </p>

              <h2 className="text-2xl font-semibold">Workspace</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Configurable structures for workshops, storage and practical
                everyday uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="border-t border-black/15 bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                A Configurable System
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                START WITH
                <br />
                THE FRAME.
                <br />
                BUILD FURTHER.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Instead of treating every outdoor project as a completely new
                construction method, 4D-CUBE provides a common connection
                principle from which different structural configurations can
                be developed.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                The longer-term objective is to turn proven configurations into
                repeatable building kits while retaining the ability to adapt
                dimensions, materials and applications.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              One connection principle.
              <br />
              Many ways to build.
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