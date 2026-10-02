import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-6 py-12 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
  href="/"
  className="inline-block text-lg font-semibold tracking-tight transition-opacity hover:opacity-60"
  aria-label="4D-CUBE home"
>
  4D-CUBE
</Link>

            <p className="mt-4 max-w-[280px] text-sm leading-6 text-white/55">
              Modular building systems designed to adapt, expand,
              dismantle and rebuild.
            </p>
          </div>

          {/* System */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              System
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/system" className="transition-opacity hover:opacity-60">
                The System
              </Link>

              <Link href="/fittings" className="transition-opacity hover:opacity-60">
                Connections
              </Link>

              <Link href="/applications" className="transition-opacity hover:opacity-60">
                Applications
              </Link>
            </div>
          </div>

          {/* Applications */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Applications
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link
                href="/applications/humanitarian"
                className="transition-opacity hover:opacity-60"
              >
                Humanitarian
              </Link>

              <Link
                href="/applications/home-garden"
                className="transition-opacity hover:opacity-60"
              >
                Home &amp; Garden
              </Link>

              <Link
                href="/applications/professional"
                className="transition-opacity hover:opacity-60"
              >
                Professional
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              About
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/mission" className="transition-opacity hover:opacity-60">
                Mission
              </Link>

              <Link href="/vision" className="transition-opacity hover:opacity-60">
                Vision
              </Link>

              <Link href="/contact" className="transition-opacity hover:opacity-60">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Legal
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/privacy" className="transition-opacity hover:opacity-60">
                Privacy
              </Link>

              <Link href="/terms" className="transition-opacity hover:opacity-60">
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-6 pt-8 md:flex-row md:items-end md:justify-between">

          <div className="flex flex-col gap-2 text-xs text-white/40">
            <p>© 2026 4D-CUBE</p>

            <a
              href="mailto:contact@4d-cube.com"
              className="transition-opacity hover:opacity-70"
            >
              contact@4d-cube.com
            </a>
          </div>

          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Connect. Build. Expand.
          </p>
        </div>

      </div>
    </footer>
  );
}