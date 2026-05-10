"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { programs } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";

const categories = ["All", "Health", "Education", "Nutrition", "Environment", "Technology"];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = programs.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-forest relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(247,243,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,237,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="font-body text-xs font-semibold uppercase tracking-widest text-terra mb-3 block">
            Our Work
          </span>
          <h1 className="font-display text-display-lg text-cream mb-4">Programs</h1>
          <p className="font-body text-base text-cream/70 max-w-lg leading-relaxed">
            Six active programs across 18 countries, each built with the communities they serve and designed for lasting change.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-sm border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programs..."
              className="pl-9 pr-4 py-2 bg-white border border-sand rounded-full text-sm font-body text-ink placeholder:text-ink/40 focus:outline-none focus:border-forest w-full sm:w-56 transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-forest text-cream"
                    : "bg-white border border-sand text-ink/60 hover:border-forest/40 hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {filtered.length > 0 ? (
            <>
              <p className="font-body text-sm text-ink/50 mb-8">
                Showing {filtered.length} program{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((program) => (
                  <ProgramCard key={program.slug} program={program} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <p className="font-display text-2xl text-forest/30 mb-2">No programs found.</p>
              <p className="font-body text-sm text-ink/40">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => { setSearch(""); setActiveCategory("All"); }}
                className="mt-4 text-terra font-body text-sm font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-cream-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-forest mb-2">
              Want to support a specific cause?
            </h3>
            <p className="font-body text-sm text-ink/60">
              You can direct your donation to any program, or let us allocate it where it&apos;s needed most.
            </p>
          </div>
          <a
            href="/donate"
            className="shrink-0 bg-terra text-cream px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-terra-light transition-colors"
          >
            Donate to a Program
          </a>
        </div>
      </section>
    </>
  );
}
