"use client";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      {/* Newsletter CTA */}
      <div className="border-b border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream mb-1">
                Stay connected.
              </h3>
              <p className="font-body text-sm text-cream/60">
                Get impact updates and stories from the field.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-60 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 rounded-full px-4 py-2.5 text-sm font-body focus:outline-none focus:border-terra focus:bg-cream/15 transition-all"
              />
              <button
                type="submit"
                className="bg-terra hover:bg-terra-light text-cream px-5 py-2.5 rounded-full text-sm font-medium font-body transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-2xl font-semibold text-cream mb-3 block">
              Horizons
            </Link>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-4">
              Building sustainable programs for communities who need it most.
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream/50">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Geneva, Switzerland
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} /> +41 22 000 0000
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} /> hello@horizons.org
              </span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5">
              {["Clean Water Access", "Girls Education Fund", "Food Security", "Climate Resilience", "Mental Health Connect"].map(
                (name) => (
                  <li key={name}>
                    <Link
                      href="/programs"
                      className="font-body text-sm text-cream/60 hover:text-cream transition-colors link-underline"
                    >
                      {name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Organisation */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Organisation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Our Impact", href: "/about" },
                { label: "Our Team", href: "/about#team" },
                { label: "Partners", href: "/about#partners" },
                { label: "Annual Reports", href: "/about#reports" },
                { label: "Careers", href: "/about#careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Give */}
          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-cream/40 mb-4">
              Give
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Donate", href: "/donate" },
                { label: "Monthly Giving", href: "/donate#monthly" },
                { label: "Corporate Giving", href: "/donate#corporate" },
                { label: "Fundraise for Us", href: "/donate#fundraise" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-cream transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-1.5 bg-terra text-cream px-5 py-2.5 rounded-full text-sm font-medium font-body hover:bg-terra-light transition-colors"
            >
              Donate Now <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-body text-cream/40">
          <p>© 2026 Horizons. Registered 501(c)(3) Nonprofit Organization.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-cream/70 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cream/70 transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-cream/70 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
