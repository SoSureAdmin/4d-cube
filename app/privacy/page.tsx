export default function PrivacyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Legal
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            PRIVACY
            <br />
            <span className="text-black/35">POLICY.</span>
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
              Privacy
            </p>
          </div>

          <div className="max-w-3xl space-y-12">
            <div>
              <h2 className="text-2xl font-medium">
                Our approach
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                4D-CUBE respects your privacy. We aim to collect and process
                only the personal information necessary to communicate with
                people who contact us and to operate this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Information you provide
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                If you contact 4D-CUBE by email, we may receive information
                such as your name, email address, organisation and any other
                information you choose to include in your message.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                How we use information
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Information you provide may be used to respond to enquiries,
                continue relevant conversations and manage potential
                development, commercial or partnership relationships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Retention
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Personal information is retained only for as long as reasonably
                necessary for the purpose for which it was received or where
                retention is required by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Your rights
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Depending on applicable data protection law, you may have
                rights concerning your personal information, including rights
                of access, correction, deletion or restriction of processing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium">
                Contact
              </h2>

              <p className="mt-4 leading-8 text-black/60">
                Questions concerning privacy or personal information can be
                sent to:
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