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
      className={`flex flex-col gap-4 rounded-[20px] border border-white/[0.08] bg-[#171717] p-5 transition-colors duration-200 hover:bg-[#1c1c1c] sm:p-6 ${className}`}
    >
      <div className="flex items-center gap-1.5 text-xs text-zinc-400 sm:text-sm">
        <span>{label}</span>
        {icon}
      </div>
      {children}
    </div>
  );
}