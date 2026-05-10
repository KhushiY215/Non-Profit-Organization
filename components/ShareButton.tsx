"use client";

import { Share2 } from "lucide-react";

interface Props {
  title: string;
}

export default function ShareButton({ title }: Props) {

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/30 hover:bg-cream/25 text-cream px-4 py-2 rounded-full text-sm font-body transition-all"
    >
      <Share2 size={14} />
      Share
    </button>
  );
}