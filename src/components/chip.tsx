import { ReactNode } from "react";

interface ChipProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function Chip({ icon, label, className = "" }: ChipProps) {
  return (
    <div
      className={`flex items-center gap-[8px] rounded-[8px] border border-white/10 bg-white/[0.04] px-4 py-2.5 w-full sm:w-auto ${className}`}
    >
      <span className="w-4 h-4 text-white/70 shrink-0 flex items-center justify-center">
        {icon}
      </span>
      <h5 className="font-medium text-white/80 whitespace-nowrap">
        {label}
      </h5>
    </div>
  );
}