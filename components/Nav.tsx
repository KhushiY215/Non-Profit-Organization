"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "Our Impact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome || open
          ? "bg-cream/95 backdrop-blur-sm border-b border-sand/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-2xl font-semibold tracking-tight transition-colors ${
            !scrolled && isHome && !open ? "text-cream" : "text-forest"
          }`}
        >
          Horizons
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium link-underline transition-colors ${
                !scrolled && isHome
                  ? "text-cream/90 hover:text-cream"
                  : pathname === link.href
                  ? "text-forest font-semibold"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className={`font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
              !scrolled && isHome
                ? "bg-cream text-forest hover:bg-cream-dark"
                : "bg-forest text-cream hover:bg-forest-light"
            }`}
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${
            !scrolled && isHome && !open ? "text-cream" : "text-forest"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream border-b border-sand/50 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-base py-3 border-b border-sand/30 transition-colors ${
                pathname === link.href
                  ? "text-forest font-semibold"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mt-4 mb-2 font-body text-base font-semibold text-center py-3 bg-forest text-cream rounded-full hover:bg-forest-light transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </header>
  );
}
