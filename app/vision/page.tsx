import Link from "next/link";

export default function VisionPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Vision
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            ONE SYSTEM.
            <br />
            MANY STRUCTURES.
            <br />
            <span className="text-black/35">
              BUILT FOR CHANGE.
            </span>
          </h1>
        </div>
      </section>

      {/* VISION STATEMENT */}
      <section className="border-t border-black/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              Our Vision
            </p>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed tracking-[-0.02em] md:text-3xl">
              To develop 4D-CUBE into a modular building platform where
              standardized connections and reusable components make structures
              easier to build, change, move and rebuild.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/60">
              Instead of designing every structure as a fixed end product,
              4D-CUBE is being developed around components that can remain
              useful when requirements, locations or circumstances change.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
              The same underlying system can support applications ranging from
              homes and gardens to professional structures and humanitarian
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#292722] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            The Platform
          </p>

          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            <div className="bg-[#292722] p-8 md:p-10">
              <p className="text-xs tracking-[0.2em] text-white/30">01</p>

              <h2 className="mt-8 text-2xl font-medium">
                Modular
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-white/55">
                Standardized components create a common foundation for
                different structures and applications.
              </p>
            </div>

            <div className="bg-[#292722] p-8 md:p-10">
              <p className="text-xs tracking-[0.2em] text-white/30">02</p>

              <h2 className="mt-8 text-2xl font-medium">
                Reconfigurable
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-white/55">
                Structures can evolve as needs change rather than being locked
                into their original configuration.
              </p>
            </div>

            <div className="bg-[#292722] p-8 md:p-10">
              <p className="text-xs tracking-[0.2em] text-white/30">03</p>

              <h2 className="mt-8 text-2xl font-medium">
                Reusable
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-white/55">
                Components are designed to retain their usefulness across
                multiple configurations and locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              Long-Term Direction
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              THE STRUCTURE
              <br />
              CAN CHANGE.
              <br />
              THE SYSTEM
              <br />
              REMAINS.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-lg leading-8 text-black/60">
              Our ambition is to create a platform where the value remains in
              the components — allowing structures to be expanded, reduced,
              dismantled, transported and used again.
            </p>

            <Link
              href="/applications"
              className="mt-10 w-fit text-sm font-medium uppercase tracking-[0.15em] underline underline-offset-8"
            >
              Explore applications →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}