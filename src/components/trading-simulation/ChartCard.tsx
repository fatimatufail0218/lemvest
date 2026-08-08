import Image from "next/image";
import ResultCard from "./ResultCard";

const statsRows = [
  { label: "Average Win Per Trade", value: "+200 $", valueColor: "text-(--accent)" },
  { label: "Average Loss Per Trade", value: "-100 $", valueColor: "text-red-500 dark:text-red-400" },
  { label: "Profit Factor", value: "3.71", valueColor: "text-(--accent)" },
  { label: "Win Rate", value: "65%", valueColor: "text-black dark:text-white" },
  { label: "Risk / Reward", value: "1:2", valueColor: "text-black dark:text-white" },
];

interface ChartCardProps {
  className?: string;
}

export default function ChartCard({ className = "" }: ChartCardProps) {
  return (
    <ResultCard className={`gap-4 ${className}`}>
      {/* Chart image + stats: stacked on mobile, side-by-side from md up */}
      <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-stretch">
        <div className="relative aspect-[10/7] w-full min-w-0 md:aspect-auto md:h-auto md:flex-[3]">
          {/* Light mode chart */}
          <Image
            src="/container-light.webp"
            alt="Estimated capital evolution chart"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-contain dark:hidden"
          />
          {/* Dark mode chart */}
          <Image
            src="/container.png"
            alt="Estimated capital evolution chart"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="hidden object-contain dark:block"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center gap-1 md:flex-[2] md:border-l md:border-black/10 dark:md:border-white/[0.08] md:pl-6">
          {statsRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between border-b border-black/5 dark:border-white/[0.06] lg:py-[7px] xl:py-2.5 text-sm last:border-b-0"
            >
              <span className="text-zinc-500 dark:text-zinc-400">{row.label}</span>
              <span className={`font-medium ${row.valueColor}`}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ResultCard>
  );
}