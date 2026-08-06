import { ReactNode } from "react";

interface ChipProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function Chip({ icon, label, className = "" }: ChipProps) {
  return (
    <div
      className={`flex items-center gap-[8px] md:gap-1.5 rounded-[8px] border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-2.5 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2 w-full sm:w-auto ${className}`}
    >
      <span className="w-4 h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-(--accent) dark:text-white/70 shrink-0 flex items-center justify-center">
  {icon}
</span>
      <h5 className="font-medium text-black/80 dark:text-white/80 whitespace-nowrap text-sm md:text-xs lg:text-sm">
        {label}
      </h5>
    </div>
  );
}