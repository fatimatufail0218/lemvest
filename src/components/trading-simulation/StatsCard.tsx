import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subLabel: string;
  className?: string;
}

// h-full + justify-between so the card can stretch to fill whatever row
// height the parent grid gives it, without content looking cramped
export default function StatsCard({
  icon,
  label,
  value,
  subLabel,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`flex h-full flex-col justify-between gap-3 rounded-[20px] border border-white/[0.08] bg-[#171717] p-5 transition-colors duration-200 hover:bg-[#1c1c1c] sm:p-6 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6CF5C2]/10 text-[#6CF5C2]">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wide text-zinc-400">{label}</div>
        <div className="mt-1 text-2xl font-semibold text-white sm:text-3xl">{value}</div>
      </div>
      <div className="text-xs text-zinc-500">{subLabel}</div>
    </div>
  );
}