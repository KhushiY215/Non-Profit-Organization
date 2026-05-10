
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/data";
import ProgressBar from "@/components/ProgressBar";
import ProgramCard from "@/components/ProgramCard";
import ShareButton from "@/components/ShareButton";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
    openGraph: { title: program.title, description: program.description, images: [program.coverImage] },
  };
}

export default function ProgramDetailPage({ params }: Props) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <Image
          src={program.coverImage}
          alt={program.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-12 w-full">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-cream font-body text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={14} /> All Programs
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-block bg-terra/90 text-cream text-xs font-body font-medium px-3 py-1 rounded-full mb-3">
                {program.category}
              </span>
              <h1 className="font-display text-display-md text-cream">{program.title}</h1>
              <p className="font-display text-lg text-terra italic mt-1">{program.tagline}</p>
            </div>
            <div className="flex items-center gap-3">
            <ShareButton title={program.title} />
              <Link
                href={`/donate?program=${program.slug}`}
                className="flex items-center gap-2 bg-terra hover:bg-terra-light text-cream px-5 py-2 rounded-full text-sm font-body font-medium transition-all"
              >
                Support This Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left – Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-5">
                  About This Program
                </h2>
                {program.longDescription.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-base text-ink/75 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Milestones */}
              <div>
                <h3 className="font-display text-xl font-semibold text-forest mb-5">
                  Key Milestones
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {program.milestones.map((m) => (
                    <div
                      key={m.label}
                      className="bg-cream-dark border border-sand/50 rounded-xl p-5 text-center"
                    >
                      <p className="font-display text-3xl font-semibold text-forest mb-1">
                        {m.value}
                      </p>
                      <p className="font-body text-sm text-ink/60">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Updates */}
              <div>
                <h3 className="font-display text-xl font-semibold text-forest mb-5">
                  Latest Updates
                </h3>
                <div className="space-y-4">
                  {program.updates.map((update, i) => (
                    <div
                      key={i}
                      className="relative pl-5 border-l-2 border-terra/30 pb-6 last:pb-0"
                    >
                      <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-terra" />
                      <span className="font-body text-xs text-terra font-medium uppercase tracking-wide">
                        {update.date}
                      </span>
                      <h4 className="font-display text-lg font-semibold text-forest mt-1 mb-2">
                        {update.title}
                      </h4>
                      <p className="font-body text-sm text-ink/70 leading-relaxed">{update.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share section */}
              <div className="bg-forest/5 border border-forest/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-terra shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-body text-base font-semibold text-forest mb-1">
                      Help us spread the word
                    </h4>
                    <p className="font-body text-sm text-ink/60 mb-4">
                      Sharing this program takes 5 seconds and can bring in thousands of dollars of support.
                    </p>
                    <div className="flex gap-3">
                      {["Twitter / X", "Facebook", "Copy Link"].map((platform) => (
                        <button
                          key={platform}
                          className="text-xs font-body font-medium px-3 py-1.5 bg-white border border-sand rounded-full hover:border-forest/30 hover:text-forest transition-all"
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right – Sidebar */}
            <div className="space-y-6">
              {/* Fundraising card */}
              <div className="bg-white border border-sand/50 rounded-2xl p-6 shadow-sm sticky top-24">
                <ProgressBar raised={program.raised} goal={program.goal} className="mb-6" />

                <div className="flex items-center gap-2 mb-6 text-sm font-body text-ink/60">
                  <MapPin size={14} />
                  <span>{program.location}</span>
                </div>

                <Link
                  href={`/donate?program=${program.slug}`}
                  className="block w-full text-center bg-terra hover:bg-terra-light text-cream px-6 py-3.5 rounded-xl font-body text-base font-semibold transition-colors mb-3"
                >
                  Donate to This Program
                </Link>
                <Link
                  href="/donate"
                  className="block w-full text-center bg-cream-dark hover:bg-sand/50 text-forest px-6 py-3 rounded-xl font-body text-sm font-medium transition-colors border border-sand"
                >
                  Give to Where Needed Most
                </Link>

                <p className="font-body text-xs text-ink/40 text-center mt-4">
                  All donations are tax-deductible. EIN: 12-3456789.
                </p>
              </div>

              {/* Impact summary */}
              <div className="bg-forest text-cream rounded-2xl p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-wider text-cream/50 mb-2">
                  Total Impact
                </p>
                <p className="font-display text-2xl font-semibold text-cream">{program.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-forest">
              More Programs
            </h3>
            <Link
              href="/programs"
              className="text-sm font-body font-medium text-forest hover:text-terra transition-colors link-underline"
            >
              View all
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProgramCard key={p.slug} program={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
