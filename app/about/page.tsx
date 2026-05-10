
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Globe, TrendingUp } from "lucide-react";
import { impactStats, teamMembers, testimonials } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Since 2019, Horizons has reached 127,000+ people across 18 countries through six active programs in clean water, education, food security, climate resilience, mental health, and technology access.",
};

const values = [
  {
    icon: <Target size={22} />,
    title: "Community-Led",
    description:
      "Every program is designed with — not for — the communities we serve. Local expertise shapes every decision.",
  },
  {
    icon: <Globe size={22} />,
    title: "Long-Term Thinking",
    description:
      "We build for 10+ year impact. Infrastructure that outlasts our involvement, skills that transfer, systems that sustain.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Radical Transparency",
    description:
      "We publish full financials, program results, and even our failures. You deserve to know exactly where your money goes.",
  },
  {
    icon: <Users size={22} />,
    title: "Local Talent First",
    description:
      "We hire locally, train locally, and transfer leadership to local teams within 3–5 years of each program.",
  },
];

const timeline = [
  { year: "2019", event: "Horizons founded in Geneva; first clean water project launched in Kenya with 200 people." },
  { year: "2020", event: "Girls Education Fund launched in Bangladesh. 120 first scholarships awarded." },
  { year: "2021", event: "Reached 10,000 people served. Food Security Network launched in Malawi." },
  { year: "2022", event: "Climate Resilience program begins in the Philippines. 1M trees planted milestone." },
  { year: "2023", event: "Mental Health Connect launches. Youth Coding Labs opens first 10 facilities." },
  { year: "2024", event: "50,000 people reached. Expanded to 14 countries. First local leadership transfers." },
  { year: "2025", event: "127,000+ people across 18 countries. $6.2M raised. Rated 4-star by Charity Navigator." },
];

const partners = [
  "UNICEF", "World Bank", "Gates Foundation", "USAID", "Mastercard Foundation", "Open Society Foundations",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1800&q=80"
            alt="Community members"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 to-forest" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Who We Are
          </span>
          <h1 className="font-display text-display-lg text-cream mb-5 max-w-2xl">
            Built for impact,
            <br />
            <em>measured in lives.</em>
          </h1>
          <p className="font-body text-base text-cream/70 max-w-lg leading-relaxed">
            Since 2019, Horizons has reached 127,000+ people across 18 countries — through six programs built to last.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 md:py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-sand/50 rounded-2xl p-7 text-center hover:shadow-md hover:shadow-forest/5 transition-shadow"
              >
                <p className="font-display text-4xl md:text-5xl font-semibold text-forest mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-sm font-semibold text-terra mb-2">{stat.label}</p>
                <p className="font-body text-xs text-ink/50 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
                What We Stand For
              </span>
              <h2 className="font-display text-display-md text-forest mb-5">
                Values that drive
                <br />
                every decision.
              </h2>
              <p className="font-body text-base text-ink/70 leading-relaxed mb-8">
                We started Horizons because we believed that most international nonprofits were optimizing for the wrong things — donor relations over community relations, visibility over sustainability, scale over depth.
              </p>
              <p className="font-body text-base text-ink/70 leading-relaxed">
                These values aren&apos;t aspirational. They&apos;re operational. Every budget decision, every hire, every program design goes back to these principles.
              </p>
            </div>

            <div className="space-y-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex gap-5 p-6 rounded-2xl ${
                    i % 2 === 0 ? "bg-cream-dark" : "bg-white border border-sand/50"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h3 className="font-body text-base font-semibold text-forest mb-1">
                      {v.title}
                    </h3>
                    <p className="font-body text-sm text-ink/65 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-forest overflow-hidden" id="timeline">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Our Journey
          </span>
          <h2 className="font-display text-display-md text-cream mb-12">
            Seven years of growth.
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] top-0 bottom-0 w-px bg-cream/10 hidden md:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 md:gap-10 items-start">
                  <div className="shrink-0 text-right w-16 md:w-20">
                    <span className="font-display text-lg font-semibold text-terra">{item.year}</span>
                  </div>
                  <div className="relative md:pl-6">
                    <div className="hidden md:block absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-terra border-2 border-forest" />
                    <p className="font-body text-sm text-cream/70 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28" id="team">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Leadership
          </span>
          <h2 className="font-display text-display-md text-forest mb-12">
            The people behind
            <br />
            the programs.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-cream-dark">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest">{member.name}</h3>
                <p className="font-body text-xs text-terra font-medium uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="font-body text-sm text-ink/65 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            From the Communities
          </span>
          <h2 className="font-display text-display-md text-forest mb-12">
            Heard directly from the people.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-white border border-sand/50 rounded-2xl p-7"
              >
                <p className="font-display text-lg leading-relaxed text-ink/80 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="font-body text-sm font-semibold text-forest">{t.name}</p>
                  <p className="font-body text-xs text-ink/50">{t.location}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-20" id="partners">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-ink/40 mb-8">
            Partners &amp; Supporters
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <span
                key={p}
                className="font-display text-lg md:text-xl font-semibold text-ink/20 hover:text-forest/40 transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(ellipse at 60% 40%, rgba(196,98,45,0.5) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-display text-display-md text-cream mb-5">
            Ready to be part
            <br />
            <em className="text-terra">of the story?</em>
          </h2>
          <p className="font-body text-base text-cream/70 mb-10 leading-relaxed">
            Every donation, every share, every conversation brings us closer to a world where geography doesn&apos;t determine destiny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 bg-terra hover:bg-terra-light text-cream px-8 py-4 rounded-full font-body text-base font-semibold transition-all hover:gap-3"
            >
              Donate Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 hover:bg-cream/10 text-cream px-8 py-4 rounded-full font-body text-base font-medium transition-all"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
