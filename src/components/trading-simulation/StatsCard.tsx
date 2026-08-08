import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  subLabel: string;
  className?: string;
}

export default function StatsCard({
  icon,
  label,
  value,
  subLabel,
  className = "",
}: StatsCardProps) {
  return (
    <div
      className={`flex h-full min-w-0 flex-col items-center justify-center rounded-2xl border border-black/10 dark:border-white/[0.08] bg-black/[0.03] dark:bg-[#171717] p-2.5 transition-colors duration-200 hover:bg-black/[0.05] dark:hover:bg-[#1c1c1c]  ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-(--accent) text-white dark:text-black">
        {icon}
      </span>
      <div className="mt-2">
        <div className="text-[10px] uppercase tracking-none text-zinc-500 dark:text-zinc-400">{label}</div>
        <div className="mt-0.5 text-center text-lg font-normal text-black dark:text-white sm:text-xl">{value}</div>
      </div>
      <div className="text-[10px] text-zinc-500">{subLabel}</div>
    </div>
  );
}