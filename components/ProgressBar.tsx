
interface ProgressBarProps {
  raised: number;
  goal: number;
  className?: string;
}

export default function ProgressBar({ raised, goal, className = "" }: ProgressBarProps) {
  const pct = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div className={className}>
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="font-display text-xl font-semibold text-forest">
            ${raised.toLocaleString()}
          </span>
          <span className="font-body text-xs text-ink/50 ml-1">raised</span>
        </div>
        <div className="text-right">
          <span className="font-body text-xs text-ink/50">of </span>
          <span className="font-body text-sm font-medium text-ink/70">
            ${goal.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="h-2 bg-sand/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-forest to-terra rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="font-body text-xs text-ink/50 mt-1.5">{pct}% funded</p>
    </div>
  );
}
