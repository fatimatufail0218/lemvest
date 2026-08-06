import { ReactNode } from "react";

interface ResultCardProps {
  className?: string;
  children: ReactNode;
}

export default function ResultCard({ className = "", children }: ResultCardProps) {
  return (
    <div
      className={`flex h-full min-w-0 flex-col rounded-[20px] border border-black/10 dark:border-white/[0.08] bg-black/[0.03] dark:bg-[#171717] p-5 transition-colors duration-200 hover:bg-black/[0.05] dark:hover:bg-[#1c1c1c] sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}