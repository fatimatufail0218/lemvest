import { ReactNode } from "react";

interface SimulationCardProps {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function SimulationCard({
  label,
  icon,
  children,
  className = "",
}: SimulationCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-2xl border border-black/10 dark:border-white/[0.08] bg-black/[0.03] dark:bg-[#171717] p-3 transition-colors duration-200 hover:bg-black/[0.05] dark:hover:bg-[#1c1c1c] ${className}`}
    >
      <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
        <span>{label}</span>
        {icon}
      </div>
      {children}
    </div>
  );
}