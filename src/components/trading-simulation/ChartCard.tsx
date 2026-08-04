"use client";

import Image from "next/image";
import { Info } from "lucide-react";
import ResultCard from "./ResultCard";

const statsRows = [
  { label: "Average Win Per Trade", value: "+200 $", valueColor: "text-[#6CF5C2]" },
  { label: "Average Loss Per Trade", value: "-100 $", valueColor: "text-red-400" },
  { label: "Profit Factor", value: "3.71", valueColor: "text-[#6CF5C2]" },
  { label: "Win Rate", value: "65%", valueColor: "text-white" },
  { label: "Risk / Reward", value: "1:2", valueColor: "text-white" },
];

interface ChartCardProps {
  className?: string;
}

export default function ChartCard({ className = "" }: ChartCardProps) {
  return (
  
      

      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-stretch">
        {/*
          Explicit width (not flex-[n] with flex-basis:0) so aspect-ratio
          resolves the height correctly at every breakpoint — this is what
          was making the chart render tiny at some resolutions.
          - Below md: full width, height follows via aspect-ratio (543:243).
          - md → xl: 60% of the row width, still aspect-ratio driven.
          - xl+: locked to the exact Figma size, 543x243px.
        */}
        <div className="relative w-full aspect-[543/243] shrink-0 md:w-3/5 xl:aspect-auto xl:h-[243px] xl:w-[543px]">
          <Image
            src="/chart.svg"
            alt="Estimated capital evolution chart"
            fill
            className="object-contain"
            sizes="(min-width: 1280px) 543px, (min-width: 768px) 60vw, 100vw"
            priority
          />
        </div>

        
      </div>
    
  );
}