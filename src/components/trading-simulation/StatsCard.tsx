import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subLabel: string;
  className?: string;
}

// justify-center (not justify-between) — content clusters together as a
// tight group, so the card reads as a wide rectangle instead of stretching
// tall with big gaps between icon / label / value / sub-label.
export default function StatsCard({
  icon,
  label,
  value,
  subLabel,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-center gap-2 rounded-2xl border border-white/[0.08] bg-[#171717] p-3 transition-colors duration-200 hover:bg-[#1c1c1c] ${className}`}
    >
      {/* overflow-hidden so a swapped-in <Image> stays clipped to this box's rounded corners */}
      <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-[#6CF5C2]/10 text-[#6CF5C2]">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-zinc-400">{label}</div>
        <div className="mt-1 text-xl font-semibold text-white">{value}</div>
      </div>
      <div className="text-xs text-zinc-500">{subLabel}</div>
    </div>
  );
}