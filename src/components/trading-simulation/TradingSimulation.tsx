import { TrendingUp, TrendingDown, CalendarDays } from "lucide-react";
import Button from "../Button";
import SectionHeading from "./SectionHeading";
import SimulationControls from "./SimulationControls";
import ResultCard from "./ResultCard";
import StatsCard from "./StatsCard";
import ChartCard from "./ChartCard";

const tradeStats = [
  {
    id: "winning-trades",
    icon: <TrendingUp className="h-4 w-4" />,
    label: "Winning Trades",
    value: "13",
    subLabel: "65%",
  },
  {
    id: "losing-trades",
    icon: <TrendingDown className="h-4 w-4" />,
    label: "Losing Trades",
    value: "7",
    subLabel: "35%",
  },
];

export default function TradingSimulation() {
  return (
    <section className="bg-white dark:bg-black py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simulate your trading results"
          subtitle="Estimate how your capital can grow based on your win rate, risk/ reward and capital."
        />

        <SimulationControls />

        {/* Simulation results divider */}
        <div className="mt-10 flex items-center justify-center sm:mt-12 lg:mt-16">
          <span className="h-px flex-1 bg-black/15 dark:bg-white/15 max-w-[300px]" />
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
          <span className="text-xs font-semibold uppercase tracking-wide text-black dark:text-white sm:text-sm px-3">
            Simulation Results
          </span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/40 dark:bg-white/40" />
          <span className="h-px flex-1 bg-black/15 dark:bg-white/15 max-w-[300px]" />
        </div>

        {/* Bottom section — pure flexbox, no grid */}
        <div className="mt-8 flex flex-col gap-2 lg:flex-row lg:items-stretch lg:gap-3">
          {/* LEFT — winning/losing row + total trades */}
          <div className="hidden lg:flex min-w-0 flex-col gap-2 lg:basis-[24%]">
            <div className="flex flex-1 gap-2">
              {tradeStats.map((stat) => (
                <StatsCard
                  key={stat.id}
                  icon={stat.icon}
                  label={stat.label}
                  value={stat.value}
                  subLabel={stat.subLabel}
                  className="flex-1 basis-0 min-w-0"
                />
              ))}
            </div>
            <StatsCard
              icon={<CalendarDays className="h-4 w-4" />}
              label="Total Trades"
              value="20"
              subLabel="100%"
            />
            
</div>

<div className="grid grid-cols-3 gap-3 lg:hidden">
  {tradeStats.map((stat) => (
    <StatsCard
      key={stat.label}
      icon={stat.icon}
      label={stat.label}
      value={stat.value}
      subLabel={stat.subLabel}
      className="w-full"
    />
  ))}

  <StatsCard
    icon={<CalendarDays className="h-4 w-4" />}
    label="Total Trades"
    value="20"
    subLabel="100%"
    className="w-full"
  />
          </div>

          {/* CENTER — result card */}
          <ResultCard className="justify-between gap-4 md:gap-5 text-center min-w-0 lg:basis-[26%]">
            <div>
              <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Estimated Result
              </div>
              <div className="mt-2 text-3xl font-semibold text-(--accent) sm:text-4xl">
                +1,900 $
              </div>
            </div>

            <div className="border-t border-black/10 dark:border-white/[0.08] pt-4">
              <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Final Capital
              </div>
              <div className="mt-2 text-2xl font-semibold text-(--accent) sm:text-3xl">
                2,900 $
              </div>
            </div>

            <div className="flex items-center gap-[4px] rounded-xl bg-(--accent)/10 dark:bg-[#2A483B] px-2 py-3 font-normal text-[9px] uppercase tracking-wide">
              <TrendingUp className="h-4 w-4 shrink-0 text-(--accent)" />
              <h3 className="text-(--accent)">An increase of +190.0% on your initial capital</h3>
            </div>
          </ResultCard>

          {/* RIGHT — chart, no container/box */}
          <ChartCard className="min-w-0 lg:basis-[50%]" />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Button>Join Lemvest</Button>
        </div>
      </div>
    </section>
  );
}