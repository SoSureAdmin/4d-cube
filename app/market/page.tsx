export default function MarketPage() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#171717]">
      {/* HERO */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
                Market Approach
              </p>

              <h1 className="max-w-xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.04em] md:text-7xl">
                FROM
                <br />
                SYSTEM
                <br />
                TO MARKET.
              </h1>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-lg leading-8 text-neutral-700">
                4D-CUBE is being developed as a modular building platform —
                not as a single finished product.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
                Our route to market starts by proving the system in real
                applications together with organisations and partners willing
                to help shape what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET PATH */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            The Path
          </p>

          <div className="grid md:grid-cols-5">
            {[
              ["01", "Prove", "Validate the core connection."],
              ["02", "Apply", "Build real applications."],
              ["03", "Partner", "Work with First Movers."],
              ["04", "Productize", "Turn what works into repeatable solutions."],
              ["05", "Scale", "Grow through partners and markets."],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`border-b border-black/15 py-10 md:border-b-0 md:py-0 ${
                  index < 4 ? "md:border-r md:px-8" : "md:pl-8"
                } ${index === 0 ? "md:pl-0" : ""}`}
              >
                <p className="text-xs tracking-[0.22em] text-neutral-500">
                  {number}
                </p>

                <h2 className="mt-6 text-2xl font-semibold">{title}</h2>

                <p className="mt-5 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRST MOVERS */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              First Movers
            </p>

            <h2 className="max-w-xl text-4xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
              BUILD
              <br />
              WITH US.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              We are looking for a small number of First Movers who see the
              potential of modular, adaptable and rebuildable structures.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              First Movers are not simply early customers. They are
              organisations, specialists and partners willing to explore real
              applications with us, challenge assumptions and help establish
              what the system must become.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                Concept → Prototype → Application → Evidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="border-b border-black/15 px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            Initial Application Areas
          </p>

          <div className="grid md:grid-cols-3">
            <div className="border-b border-black/15 pb-10 md:border-b-0 md:border-r md:pr-10">
              <p className="text-xs tracking-[0.22em] text-neutral-500">01</p>

              <h3 className="mt-6 text-2xl font-semibold">Humanitarian</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Lightweight structures designed around transport, rapid
                assembly, dismantling and rebuilding.
              </p>
            </div>

            <div className="border-b border-black/15 py-10 md:border-b-0 md:border-r md:px-10 md:py-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">02</p>

              <h3 className="mt-6 text-2xl font-semibold">
                Home &amp; Garden
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Structures that can expand, reduce, move and adapt as the
                owner's requirements change.
              </p>
            </div>

            <div className="pt-10 md:pl-10 md:pt-0">
              <p className="text-xs tracking-[0.22em] text-neutral-500">03</p>

              <h3 className="mt-6 text-2xl font-semibold">Professional</h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Repeatable modular structures for commercial, temporary,
                retail and other professional applications.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-black/15 pt-10">
            <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.02em] md:text-3xl">
              Three application areas.
              <br />
              One underlying system.
            </p>
          </div>
        </div>
      </section>

      {/* HUMANITARIAN */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                Humanitarian Field Validation
              </p>

              <h2 className="max-w-xl text-4xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
                EVIDENCE
                <br />
                BEFORE
                <br />
                SCALE.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                Humanitarian applications require more than a promising
                concept. They require engineering, logistics, field knowledge
                and evidence.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Our ambition is to work with relevant humanitarian
                organisations, technical specialists and First Movers to
                evaluate lightweight 4D-CUBE configurations against real
                operational requirements.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                Transport volume, assembly time, structural performance,
                repairability, dismantling and relocation must be tested —
                not assumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN PATH */}
      <section className="blueprint-surface border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              Long-Term Direction
            </p>

            <h2 className="max-w-xl text-4xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
              TOWARDS
              <br />
              THE UN
              <br />
              ECOSYSTEM.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              Humanitarian deployment is a long-term strategic direction for
              4D-CUBE.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Once relevant applications have been properly tested and
              documented, our ambition is to explore opportunities within the
              wider international humanitarian ecosystem, including relevant
              United Nations organisations and their partners.
            </p>

            <div className="mt-12 border-t border-black/20 pt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                The sequence matters
              </p>

              <p className="mt-5 text-2xl font-medium leading-tight tracking-[-0.02em] md:text-3xl">
                Develop → Test → Document → Field Validate → Qualify
              </p>
            </div>

            <p className="mt-10 max-w-xl text-lg leading-8 text-neutral-700">
              We do not expect a concept alone to open those doors.
              Evidence must come first.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTIZE */}
      <section className="border-b border-black/15 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
              From Application to Product
            </p>

            <h2 className="max-w-xl text-4xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
              PROVE IT.
              <br />
              THEN MAKE IT
              <br />
              REPEATABLE.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-8 text-neutral-700">
              When a configuration works, it should become easier to build
              again.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-700">
              Proven applications can be developed into defined components,
              dimensions, materials, assembly methods and documentation.
              Individual prototypes can then become repeatable kits and
              product families built around the same connection platform.
            </p>
          </div>
        </div>
      </section>

      {/* SCALE */}
      <section className="bg-[#161616] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                Scale Through Partners
              </p>

              <h2 className="max-w-xl text-4xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
                ONE SYSTEM.
                <br />
                MANY
                <br />
                MARKETS.
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                4D-CUBE does not need to manufacture, sell and distribute
                everything itself.
              </p>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                The platform creates the opportunity for engineering,
                manufacturing, application and distribution partners while the
                common connection principle remains at the centre.
              </p>
            </div>
          </div>

          <div className="mt-20 border-t border-white/20 pt-10">
            <p className="max-w-5xl text-3xl font-medium uppercase leading-tight tracking-[-0.03em] md:text-5xl">
              PROVE. APPLY.
              <br />
              PARTNER. SCALE.
            </p>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/60">
              Prove the connection → Work with First Movers → Validate real
              applications → Document the evidence → Productize what works →
              Scale through partners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}