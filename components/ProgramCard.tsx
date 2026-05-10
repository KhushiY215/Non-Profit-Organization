"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface Program {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  impact: string;
  raised: number;
  goal: number;
  image: string;
  location: string;
  status: string;
}

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="group bg-white border border-sand/40 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-forest/5 hover:border-forest/20 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        <span className="absolute top-3 left-3 bg-cream/95 backdrop-blur-sm text-forest text-xs font-body font-medium px-3 py-1 rounded-full">
          {program.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-xl font-semibold text-forest leading-tight">
            {program.title}
          </h3>
          <span className="shrink-0 w-2 h-2 mt-2 rounded-full bg-green-500" title="Active" />
        </div>

        <p className="font-body text-xs text-terra font-medium mb-2 italic">
          {program.tagline}
        </p>

        <p className="font-body text-sm text-ink/70 leading-relaxed mb-4 line-clamp-2">
          {program.description}
        </p>

        {/* Location */}
        <p className="font-body text-xs text-ink/50 flex items-center gap-1 mb-4">
          <MapPin size={12} /> {program.location}
        </p>

        {/* Progress */}
        <ProgressBar raised={program.raised} goal={program.goal} className="mb-4" />

        <Link
          href={`/programs/${program.slug}`}
          className="flex items-center justify-between w-full py-2.5 px-4 bg-cream border border-sand hover:bg-forest hover:text-cream hover:border-forest text-forest rounded-xl text-sm font-medium font-body transition-all duration-200 group/btn"
        >
          <span>Learn more</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
