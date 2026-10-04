export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#e8dfc9] text-[#161616]">
      {/* INTRO */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Contact
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] md:text-7xl">
                LET&apos;S BUILD
                <br />
                WHAT&apos;S
                <br />
                NEXT.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed as a modular building platform with
                potential applications across humanitarian, home and garden,
                and professional environments.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                We are interested in conversations with partners across
                engineering, construction, manufacturing, distribution and
                product development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Opportunities
          </p>

          <div className="grid md:grid-cols-3">
            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:pr-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">01</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Development
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Engineering, materials, manufacturing and product development
                partnerships that can help advance the platform.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">02</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Applications
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Applications where a modular and adaptable structural platform
                could create practical value.
              </p>
            </div>

            <div className="py-10 md:pl-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">03</p>

              <h2 className="mt-6 text-2xl font-semibold">
                Market
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-neutral-600">
                Distribution, commercial partnerships and opportunities to
                develop the platform for new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="bg-[#292722] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/50">
                Start a Conversation
              </p>

              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                SEE A POSSIBILITY?
                <br />
                WE&apos;D LIKE
                <br />
                TO HEAR IT.
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-white/70">
                If you see an application, development opportunity or
                partnership where 4D-CUBE could be relevant, get in touch.
              </p>

              <a
                href="mailto:contact@4d-cube.com"
                className="mt-10 w-fit border-b border-white pb-2 text-xl font-medium transition-opacity hover:opacity-60"
              >
                contact@4d-cube.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}