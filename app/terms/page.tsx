export default function TermsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Legal
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            TERMS &amp;
            <br />
            <span className="text-black/35">CONDITIONS.</span>
          </h1>

          <p className="mt-8 text-sm text-black/40">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="border-t border-black/10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
              Terms
            </p>
          </div>

          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-2xl font-medium">
                About this website
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                This website provides general information about 4D-CUBE, its
                development, concepts, potential applications and underlying
                modular building principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Development status
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                4D-CUBE is under development. Concepts, designs, components,
                specifications, illustrations and potential applications shown
                on this website may change as development, engineering,
                prototyping and validation continue.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                No technical guarantee
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Information on this website should not be interpreted as
                engineering advice, structural certification, a performance
                guarantee or confirmation that a particular configuration is
                suitable for a specific purpose.
              </p>

              <p className="mt-4 leading-8 text-black/60">
                Individual structures and applications may require appropriate
                engineering, testing, approvals and compliance with applicable
                building regulations, standards and local requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Intellectual property
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Unless otherwise stated, the content, concepts, text,
                graphics, designs and other material presented on this website
                are associated with 4D-CUBE and may not be reproduced,
                distributed or commercially used without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                External links
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                This website may contain links to third-party websites.
                4D-CUBE is not responsible for the content, availability or
                privacy practices of external websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Changes
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                These terms and the content of this website may be updated as
                4D-CUBE and the platform continue to develop.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Questions concerning this website or these terms can be sent
                to:
              </p>

              <a
                href="mailto:contact@4d-cube.com"
                className="mt-4 inline-block border-b border-black pb-1 font-medium transition-opacity hover:opacity-50"
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