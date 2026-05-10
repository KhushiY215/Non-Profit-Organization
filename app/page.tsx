"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Quote } from "lucide-react";
import { programs, impactStats, testimonials } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=85"
            alt="Community members gathering around clean water"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-20 md:pb-28 pt-32">
          <div className="max-w-3xl">
            {/* Pre-heading pill */}
            <div
              className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/20 text-cream/90 text-xs font-body font-medium px-4 py-1.5 rounded-full mb-6 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terra animate-pulse" />
              6 active programs across 18 countries
            </div>

            <h1
              className="font-display text-display-xl text-cream mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Technology built
              <br />
              <em className="text-terra/90">for people,</em>
              <br />
              not just profit.
            </h1>

            <p
              className="font-body text-base md:text-lg text-cream/80 leading-relaxed mb-10 max-w-xl animate-fade-up opacity-0"
              style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
            >
              Horizons builds lasting programs in clean water, education, food security, and climate resilience — driven by communities, sustained by people like you.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-terra hover:bg-terra-light text-cream px-7 py-3.5 rounded-full font-body text-base font-medium transition-all duration-300 hover:gap-3"
              >
                Donate Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/30 hover:bg-cream/25 text-cream px-7 py-3.5 rounded-full font-body text-base font-medium transition-all duration-300"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex flex-col items-center pb-8 animate-bounce text-cream/50">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-forest py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {impactStats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center border-r border-cream/10 last:border-0 even:border-0 md:even:border-r"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-cream mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm font-medium text-terra mb-1">{stat.label}</p>
                <p className="font-body text-xs text-cream/50 hidden md:block">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Text */}
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-4 block">
                Our Mission
              </span>
              <h2 className="font-display text-display-md text-forest mb-6">
                We don&apos;t just help communities.
                <br />
                <em>We build with them.</em>
              </h2>
              <p className="font-body text-base text-ink/70 leading-relaxed mb-4">
                Every program Horizons runs is designed by and with the communities it serves. We believe in local expertise, long-term relationships, and measurable results that outlast our involvement.
              </p>
              <p className="font-body text-base text-ink/70 leading-relaxed mb-8">
                From the borehole to the classroom, from the seed bank to the mental health clinic — we build infrastructure that lasts, skills that transfer, and dignity that endures.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-forest font-body text-sm font-semibold hover:gap-3 transition-all link-underline"
              >
                Learn about our approach <ArrowRight size={14} />
              </Link>
            </div>

            {/* Image Collage */}
            <div className="relative h-80 md:h-[480px]">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1200&auto=format&fit=crop"
                  alt="Community program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 40vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden border-4 border-cream">
                <Image
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=80"
                  alt="Education program"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute bottom-8 right-0 bg-terra text-cream px-4 py-3 rounded-xl shadow-lg">
                <p className="font-display text-2xl font-bold">94%</p>
                <p className="font-body text-xs">Funds to programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="bg-cream-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
                Active Programs
              </span>
              <h2 className="font-display text-display-md text-forest">
                Where your support goes.
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-forest font-body text-sm font-medium hover:gap-3 transition-all link-underline shrink-0"
            >
              View all programs <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Voices from the Field
          </span>
          <h2 className="font-display text-display-md text-forest mb-12">
            Real change, real people.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`relative p-7 rounded-2xl ${
                  i % 2 === 1 ? "bg-forest text-cream" : "bg-white border border-sand/50"
                }`}
              >
                <Quote
                  className={`absolute top-5 right-5 ${
                    i % 2 === 1 ? "text-cream/10" : "text-forest/10"
                  }`}
                  size={40}
                  strokeWidth={1}
                />
                <p
                  className={`font-display text-lg md:text-xl leading-relaxed mb-6 ${
                    i % 2 === 1 ? "text-cream/90" : "text-ink/80"
                  }`}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className={`font-body text-sm font-semibold ${i % 2 === 1 ? "text-cream" : "text-forest"}`}>
                    {t.name}
                  </p>
                  <p className={`font-body text-xs ${i % 2 === 1 ? "text-cream/50" : "text-ink/50"}`}>
                    {t.location}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-terra">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-display text-display-lg text-cream mb-5">
            Every dollar builds
            <br />
            something that lasts.
          </h2>
          <p className="font-body text-base text-cream/80 mb-10 max-w-lg mx-auto leading-relaxed">
            94 cents of every dollar you give goes directly to programs. No waste, no overhead excess — just impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-cream text-terra hover:bg-cream-dark px-8 py-4 rounded-full font-body text-base font-semibold transition-all duration-300 hover:gap-3"
            >
              Donate Today <ArrowRight size={16} />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 bg-terra-dark hover:bg-terra-dark/80 text-cream px-8 py-4 rounded-full font-body text-base font-medium transition-all border border-cream/20"
            >
              Choose a Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
