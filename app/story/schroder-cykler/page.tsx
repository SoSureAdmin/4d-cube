import Image from "next/image";
import Link from "next/link";

export default function SchroderCyklerPage() {
  return (
    <main className="min-h-screen bg-[#e8dfc9] text-[#161616]">
      {/* HERO */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
            The Story
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                SCHRØDER
                <br />
                CYKLER.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                Long before 4D-CUBE became a building system, there was a
                workshop, a bicycle shop and a way of thinking about how things
                should be made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY IMAGE */}
      <section className="border-b border-black/15 px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <Image
                  src="/schroder-history.jpg"
                  alt="Historic photograph from Schrøder Cykler"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                The Beginning
              </p>

              <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                BUILT FROM
                <br />
                PRACTICAL
                <br />
                EXPERIENCE.
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-700">
                Schrøder Cykler was part of the environment in which Niels
                Christiansen learned to understand materials, construction and
                the value of making things work in practice.
              </p>

              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-700">
                It was a world of components, tools, repair and craftsmanship —
                where an object could be understood by taking it apart,
                improving it and putting it together again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="bg-[#292722] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                A Way of Thinking
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                UNDERSTAND
                <br />
                THE PARTS.
                <br />
                IMPROVE THE
                <br />
                WHOLE.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                That practical mindset would later become relevant far beyond
                bicycles. The idea that individual components can form a
                coherent system is central to the thinking behind 4D-CUBE.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Instead of seeing a structure only as a finished object,
                4D-CUBE looks at the relationships between its parts — and how
                those parts can be connected, separated and used again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FROM THEN TO NOW */}
      <section className="border-b border-black/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                From Then To Now
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                THE SCALE
                <br />
                CHANGED.
                <br />
                THE LOGIC
                <br />
                REMAINED.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                Over time, the thinking expanded from individual components and
                practical construction to modular structures, prefabrication
                and systems that could be assembled, dismantled and rebuilt.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE continues that line of thinking at a different scale:
                create a strong connection principle, keep the system simple
                and allow many different structures to grow from it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILHELM */}
      <section className="bg-[#292722] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                From Father To Son
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                SOME WORDS
                <br />
                CARRY MORE
                <br />
                WEIGHT
                <br />
                THAN OTHERS.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Vilhelm Christiansen, Niels&apos; father, was never a man who
                handed out praise lightly.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                That made one moment particularly memorable. When Niels showed
                his father the idea that would become 4D-CUBE, Vilhelm looked
                at it and said:
              </p>

              <blockquote className="mt-12 border-l border-white/40 pl-8">
                <p className="max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                  “That one I believe in, my boy.”
                </p>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                  Vilhelm Christiansen
                </p>
              </blockquote>

              <p className="mt-12 max-w-xl text-lg leading-8 text-white/70">
                Coming from his father, those few words meant something. They
                were not a business case or a technical validation. They were
                the recognition of an idea from a man whose life had been built
                around practical craftsmanship and making things work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="blueprint-surface px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                The Continuation
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                FROM
                <br />
                CRAFTSMANSHIP
                <br />
                TO PLATFORM.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is not an attempt to preserve the past. It is a
                continuation of a practical idea: understand how things connect
                and use that understanding to build something better.
              </p>

              <Link
                href="/system"
                className="mt-10 inline-block w-fit border-b border-black pb-2 font-medium transition-opacity hover:opacity-50"
              >
                Explore the 4D-CUBE system →
              </Link>
            </div>
          </div>

          <div className="mt-24 border-t border-black/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              CONNECT. BUILD. EXPAND.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}