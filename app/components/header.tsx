import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/10 bg-[#f4f1eb] text-[#161616]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="transition-opacity hover:opacity-50"
          aria-label="4D-CUBE home"
        >
          <Image
            src="/4d-cube-logo.svg"
            alt="4D-CUBE"
            width={132}
            height={44}
            priority
            className="h-auto w-[150px] md:w-[175px]"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.12em] text-[#161616] md:flex">
          <Link
            href="/system"
            className="transition-opacity hover:opacity-50"
          >
            System
          </Link>

          <Link
            href="/fittings"
            className="transition-opacity hover:opacity-50"
          >Connections
          </Link>

          <Link
            href="/applications"
            className="transition-opacity hover:opacity-50"
          >
            Applications
          </Link>

          <Link
            href="/about"
            className="transition-opacity hover:opacity-50"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}