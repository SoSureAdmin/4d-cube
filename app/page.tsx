import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8dfc9] text-[#161616]">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-73px)] overflow-hidden border-b border-black/15 bg-[#e8dfc9]">
        {/* HERO IMAGE */}
        <div className="relative h-[46vh] w-full md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[58%]">
          <Image
            src="/4d-cube-hero.png"
            alt="4D-CUBE modular connection system"
            fill
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover object-[62%_center] md:object-right"
            priority
          />

          {/* subtle blend into page background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8dfc9] via-[#e8dfc9]/25 to-transparent md:block" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-between px-6 py-10 md:px-16 md:py-12">
          <div className="flex flex-1 items-center">
            <div className="max-w-2xl py-12 md:py-20">
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                Modular Building System
              </p>

              <h1 className="text-6xl font-semibold leading-[0.9] tracking-[-0.055em] md:text-8xl lg:text-9xl">
                CONNECT.
                <br />
                BUILD.
                <br />
                EXPAND.
              </h1>

              <p className="mt-10 max-w-xl text-xl leading-8 text-neutral-700 md:text-2xl">
                A modular building platform built around one standardized
                connection principle.
              </p>

              <Link
                href="/system"
                className="mt-10 inline-block w-fit border-b border-black pb-2 text-sm font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
              >
                Explore the system →
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-black/20 pt-6 text-sm text-neutral-600">
            <span>One connection. Different structures.</span>
            <span className="hidden md:block">4d-cube.com</span>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="blueprint-surface relative border-t border-black/20 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                The System
              </p>

              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                ONE CONNECTION.
                <br />
                MANY
                <br />
                POSSIBILITIES.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                At the centre of 4D-CUBE is a standardized connection point
                designed to bring structural elements together through a common
                interface.
              </p>

              <p className="mt-8 max-w-xl text-xl leading-8 text-neutral-700">
                Standardize the connection, then allow the structure around it
                to change according to the application.
              </p>

              <Link
                href="/system"
                className="mt-10 inline-block w-fit border-b border-black pb-2 text-base font-medium transition-opacity hover:opacity-50"
              >
                Explore the system →
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-neutral-200">
              <Image
                src="/system-frame.jpeg"
                alt="4D-CUBE modular building system prototype"
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 text-xs uppercase tracking-[0.16em] text-neutral-500 md:flex-row md:justify-between">
              <span>Prototype / System Development</span>
              <span>Connection → Frame → Structure</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="border-t border-black/20 bg-[#292722] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-white/50">
                Connections
              </p>

              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                THE CUBE
                <br />
                STAYS.
                <br />
                THE SYSTEM
                <br />
                GROWS.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-white/70">
                A growing family of fittings and interfaces extends the
                4D-CUBE connection principle into different structural
                configurations, materials and applications.
              </p>

              <p className="mt-8 max-w-xl text-xl leading-8 text-white/70">
                The objective is not to create complexity around the Cube, but
                to expand what can be built from the same underlying platform.
              </p>

              <Link
                href="/connections"
                className="mt-10 inline-block w-fit border-b border-white pb-2 text-base font-medium transition-opacity hover:opacity-60"
              >
                Explore connections →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="blueprint-surface border-t border-black/20 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
            Applications
          </p>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                ONE SYSTEM.
                <br />
                MANY WAYS
                <br />
                TO BUILD.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                The same connection principle can support different
                structures, materials, environments and requirements.
              </p>

              <Link
                href="/applications"
                className="mt-10 inline-block w-fit border-b border-black pb-2 text-base font-medium transition-opacity hover:opacity-50"
              >
                Explore all applications →
              </Link>
            </div>
          </div>

          <div className="mt-20 grid border-t border-black/20 md:grid-cols-3">
            <Link
              href="/applications/humanitarian"
              className="group border-b border-black/20 py-10 transition-opacity hover:opacity-60 md:border-b-0 md:border-r md:pr-10"
            >
              <span className="text-sm text-neutral-500">01</span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                HUMANITARIAN
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-neutral-600">
                Modular structural concepts being explored around transport,
                local materials, assembly and changing requirements.
              </p>

              <p className="mt-8 text-sm font-medium">Explore →</p>
            </Link>

            <Link
              href="/applications/home-garden"
              className="group border-b border-black/20 py-10 transition-opacity hover:opacity-60 md:border-b-0 md:border-r md:px-10"
            >
              <span className="text-sm text-neutral-500">02</span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                HOME &amp; GARDEN
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-neutral-600">
                Modular structures for gardens, outdoor living and practical
                projects configured around different spaces and requirements.
              </p>

              <p className="mt-8 text-sm font-medium">Explore →</p>
            </Link>

            <Link
              href="/applications/professional"
              className="group py-10 transition-opacity hover:opacity-60 md:pl-10"
            >
              <span className="text-sm text-neutral-500">03</span>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                PROFESSIONAL
              </h3>

              <p className="mt-4 max-w-sm leading-7 text-neutral-600">
                A modular construction principle for professional, commercial
                and repeatable structural applications.
              </p>

              <p className="mt-8 text-sm font-medium">Explore →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY 4D-CUBE */}
      <section className="bg-[#292722] px-6 py-24 text-white md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-white/50">
                Why 4D-CUBE
              </p>

              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                KEEP THE
                <br />
                CONNECTION.
                <br />
                CHANGE THE REST.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-white/70">
                4D-CUBE is built around a simple distinction: the connection
                remains standardized while the surrounding structure can
                respond to its material, location and intended use.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-t border-white/20 md:grid-cols-3">
            <div className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:pr-10">
              <span className="text-sm text-white/40">01</span>

              <h3 className="mt-8 text-2xl font-semibold">STANDARDIZED</h3>

              <p className="mt-4 max-w-sm leading-7 text-white/55">
                A common connection principle provides the foundation for the
                system.
              </p>
            </div>

            <div className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:px-10">
              <span className="text-sm text-white/40">02</span>

              <h3 className="mt-8 text-2xl font-semibold">CONFIGURABLE</h3>

              <p className="mt-4 max-w-sm leading-7 text-white/55">
                Structures can respond to different dimensions, materials and
                applications.
              </p>
            </div>

            <div className="py-10 md:pl-10">
              <span className="text-sm text-white/40">03</span>

              <h3 className="mt-8 text-2xl font-semibold">EXPANDABLE</h3>

              <p className="mt-4 max-w-sm leading-7 text-white/55">
                The modular logic creates a basis for structures that can
                potentially evolve as requirements change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="blueprint-surface bg-[#e8dfc9] px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                The Story
              </p>

              <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                A SIMPLE
                <br />
                IDEA.
                <br />
                BUILT FURTHER.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-xl leading-8 text-neutral-700">
                4D-CUBE grew from a simple question: could a standardized
                connection make it possible to approach different structures
                through the same underlying building principle?
              </p>

              <p className="mt-8 max-w-xl text-xl leading-8 text-neutral-700">
                Years of thinking, experimentation and practical construction
                have developed that question into the foundation for a broader
                modular building platform.
              </p>

              <Link
                href="/about"
                className="mt-10 inline-block w-fit border-b border-black pb-2 text-base font-medium transition-opacity hover:opacity-50"
              >
                About 4D-CUBE →
              </Link>
            </div>
          </div>

          <div className="mt-24 border-t border-black/20 pt-10">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
              Not a single product.
              <br />
              A platform for what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-t border-black/15 bg-[#e8dfc9] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-end md:gap-24">
            <div>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                Contact
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                LET&apos;S BUILD
                <br />
                WHAT&apos;S NEXT.
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700 md:text-right">
                Interested in the system, an application or a potential
                partnership?
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-block border-b border-black pb-2 font-medium transition-opacity hover:opacity-50"
              >
                Contact 4D-CUBE →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}