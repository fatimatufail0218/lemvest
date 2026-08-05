import { ReactNode } from "react";

interface ResultCardProps {
  className?: string;
  children: ReactNode;
}

// h-full baked in by default — lets this stretch to match its siblings'
// height whenever the parent grid row has an explicit height (md+)
export default function ResultCard({ className = "", children }: ResultCardProps) {
  return (
    <div
      className={`flex h-full min-w-0 flex-col rounded-[20px] border border-white/[0.08] bg-[#171717] p-5 transition-colors duration-200 hover:bg-[#1c1c1c] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}