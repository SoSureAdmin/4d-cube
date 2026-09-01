import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#161616]">
      {/* INTRO */}
      <section className="blueprint-surface px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
            Applications
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h1 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                ONE SYSTEM.
                <br />
                MANY WAYS
                <br />
                TO BUILD.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                4D-CUBE is built as a modular building platform rather than a
                solution for one specific structure or market.
              </p>

              <p className="mt-8 max-w-xl text-xl leading-8 text-neutral-700">
                The same connection principle can support different structures,
                materials and configurations depending on where and how the
                system is applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION AREAS */}
      <section className="border-t border-black/15 px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Application Areas
          </p>

          <div className="grid md:grid-cols-3">
            {/* HUMANITARIAN */}
            <Link
              href="/applications/humanitarian"
              className="group border-b border-black/20 py-10 transition-opacity hover:opacity-60 md:border-b-0 md:border-r md:py-4 md:pr-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                01
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
                Humanitarian
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-neutral-600">
                Modular structural concepts for environments where transport,
                local assembly and changing requirements are central
                considerations.
              </p>

              <p className="mt-10 inline-block border-b border-black pb-1 font-medium">
                Explore humanitarian →
              </p>
            </Link>

            {/* HOME & GARDEN */}
            <Link
              href="/applications/home-garden"
              className="group border-b border-black/20 py-10 transition-opacity hover:opacity-60 md:border-b-0 md:border-r md:px-10 md:py-4"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                02
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
                Home &amp; Garden
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-neutral-600">
                Modular structures for gardens, outdoor living and practical
                projects configured around different spaces and requirements.
              </p>

              <p className="mt-10 inline-block border-b border-black pb-1 font-medium">
                Explore home &amp; garden →
              </p>
            </Link>

            {/* PROFESSIONAL */}
            <Link
              href="/applications/professional"
              className="group py-10 transition-opacity hover:opacity-60 md:py-4 md:pl-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                03
              </p>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
                Professional
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-neutral-600">
                A modular construction principle for professional, commercial
                and repeatable structural applications.
              </p>

              <p className="mt-10 inline-block border-b border-black pb-1 font-medium">
                Explore professional →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* COMMON PLATFORM */}
      <section className="border-t border-black/15 bg-[#161616] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                One Platform
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                DIFFERENT
                <br />
                APPLICATIONS.
                <br />
                SAME PRINCIPLE.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                The application changes. The underlying logic does not:
                standardize the connection and allow the surrounding structure
                to respond to its purpose, material and environment.
              </p>

              <Link
                href="/system"
                className="mt-10 inline-block w-fit border-b border-white pb-2 font-medium transition-opacity hover:opacity-60"
              >
                Explore the system →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}