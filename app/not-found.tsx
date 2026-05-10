"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-8xl font-semibold text-forest/10 mb-4">404</p>
        <h1 className="font-display text-3xl font-semibold text-forest mb-3">
          Page not found.
        </h1>
        <p className="font-body text-base text-ink/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 rounded-full font-body text-sm font-medium hover:bg-forest-light transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
