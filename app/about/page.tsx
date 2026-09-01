import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#161616]">
      {/* HERO */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
            About 4D-CUBE
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                AN IDEA
                <br />
                DEVELOPED
                <br />
                OVER TIME.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                4D-CUBE is a modular building platform based on one fundamental
                idea: standardize the connection and allow the structure around
                it to change.
              </p>

              <p className="mt-8 max-w-xl text-xl leading-8 text-neutral-700">
                The concept has evolved through years of thinking,
                experimentation and practical construction, exploring how a
                simple connection principle could become the foundation for a
                broader building system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="border-b border-black/15 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                The Origin
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                FROM
                <br />
                CONNECTION
                <br />
                TO SYSTEM.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                The thinking behind 4D-CUBE originates in Niels
                Christiansen&apos;s long-standing work with modular structures,
                prefabrication, rapid assembly and flexible building concepts.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Rather than treating each structure as a separate construction
                problem, the idea is to establish a common connection principle
                from which different structural systems can be developed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
            Today
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                RESPECT
                <br />
                THE IDEA.
                <br />
                BUILD THE
                <br />
                COMPANY.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Today, Niels Christiansen and Daniel Conn Elfort are developing
                4D-CUBE together: advancing the underlying building principle
                while developing the products, applications and commercial
                model required to turn it into a scalable platform.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                The work now centres on product development, fittings,
                prototyping, validation, manufacturing, market applications and
                commercial partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-black/15 px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            What Guides The Development
          </p>

          <div className="grid md:grid-cols-3">
            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:pr-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">01</p>

              <h2 className="mt-6 text-2xl font-semibold">Simplicity</h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Reduce unnecessary complexity around the connection between
                structural elements.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">02</p>

              <h2 className="mt-6 text-2xl font-semibold">Modularity</h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Build around a common principle that can support different
                structures, materials and applications.
              </p>
            </div>

            <div className="py-10 md:pl-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">03</p>

              <h2 className="mt-6 text-2xl font-semibold">Proof</h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Develop through prototypes, testing and real construction
                rather than claims alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTION */}
      <section className="blueprint-surface px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Direction
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                NOT A
                <br />
                SINGLE PRODUCT.
                <br />
                A GROWING
                <br />
                PLATFORM.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed across humanitarian, home and
                garden, and professional applications, with fittings and
                structural interfaces expanding around the same core principle.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                The ambition is not to create complexity around the Cube. It is
                to make one connection principle useful across more structures,
                applications and environments.
              </p>

              <Link
                href="/system"
                className="mt-10 inline-block w-fit border-b border-black pb-2 font-medium transition-opacity hover:opacity-50"
              >
                Explore the system →
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