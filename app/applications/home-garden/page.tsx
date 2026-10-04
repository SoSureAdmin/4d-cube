import Image from "next/image";
import Link from "next/link";

export default function HomeGardenPage() {
  return (
    <main className="min-h-screen text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Home &amp; Garden
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                BUILD IT.
                <br />
                CHANGE IT.
                <br />
                BUILD AGAIN.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Outdoor structures should not have to become permanent simply
                because they have been built.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed around reusable structural
                components that can be configured for one space, dismantled
                and potentially used again somewhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE IDEA */}
      <section className="border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              A Different Approach
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              THE VALUE
              <br />
              STAYS IN THE
              <br />
              COMPONENTS.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              A pergola, garden structure or outdoor workspace is normally
              designed for one location and one configuration.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              4D-CUBE explores another approach: standardized Cubes,
              structural profiles and removable connections that can remain
              useful even when the original structure is no longer needed.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Move home, change the garden or change the requirement — the
              components can potentially move and change with you.
            </p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
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
                The objective is not only to make structures easier to build,
                but to develop a system that can also be taken apart,
                reconfigured and used again.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-neutral-500 md:flex-row md:justify-between">
            <span>Prototype / Home &amp; Garden Development</span>
            <span>Connection → Frame → Structure</span>
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

              <h2 className="text-2xl font-semibold">Pergola</h2>

              <p className="mt-5 max-w-xs leading-7 text-neutral-600">
                Modular frames for terraces, gardens, shade and outdoor living.
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
                Reconfigurable structures for workshops, storage and practical
                everyday uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-[#292722] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            Designed To Stay Useful
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
            YOUR NEEDS CHANGE.
            <br />
            YOUR STRUCTURE CAN TOO.
          </h2>

          <div className="mt-20 grid border-t border-white/20 md:grid-cols-3">
            {[
              [
                "01",
                "Build",
                "Configure the structure for the space you have today.",
              ],
              [
                "02",
                "Use",
                "Use the structure for its current purpose.",
              ],
              [
                "03",
                "Expand / Reduce",
                "Add or remove structural modules as requirements change.",
              ],
              [
                "04",
                "Dismantle",
                "Take the structure apart while preserving reusable components.",
              ],
              [
                "05",
                "Move",
                "Take the structural components with you when circumstances change.",
              ],
              [
                "06",
                "Rebuild",
                "Create the same structure again — or configure something different.",
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

      {/* MOBILITY */}
      <section className="blueprint-surface border-t border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Built To Move
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              YOUR STRUCTURE
              <br />
              DOESN&apos;T HAVE
              <br />
              TO STAY WHEN
              <br />
              YOU MOVE.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              For homeowners, garden owners and other users, a change of
              location should not necessarily mean starting again from zero.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              A system based on removable connections and reusable structural
              components creates the possibility of taking much of the
              structure with you and adapting it to the next location.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em]">
                You don&apos;t move the structure.
                <br />
                You move the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="border-t border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Development
            </p>

            <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              FROM
              <br />
              PROTOTYPE
              <br />
              TO KIT.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              Home &amp; Garden configurations are currently being explored
              through prototypes and system development.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Dimensions, connections, structural requirements and finished
              product kits will be defined as engineering and testing progress.
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