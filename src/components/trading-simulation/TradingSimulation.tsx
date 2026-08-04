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
  {
    id: "total-trades",
    icon: <CalendarDays className="h-4 w-4" />,
    label: "Total Trades",
    value: "20",
    subLabel: "100%",
  },
];

export default function TradingSimulation() {
  return (
    <section className="bg-[#090909] py-16 sm:py-20 lg:py-28">
      {/* 1280px max-width, exactly matching the Figma frame — fixed, no further growth at 2xl */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Simulate your trading results"
          subtitle="Estimate how your capital can grow based on your win rate, risk/reward and capital."
        />

        <SimulationControls />

        {/* Simulation results divider */}
        <div className="mt-10 flex items-center gap-4 sm:mt-12 lg:mt-16">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 sm:text-sm">
            Simulation Results
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

       {/*
  12-column grid starts right from md (not just lg), so all three cards
  share the same row from tablet width upward. items-stretch then makes
  the stats card and result card match the chart card's height exactly.
*/}
<div className="mt-8 grid grid-cols-1 items-stretch gap-2 md:grid-cols-12 md:gap-3">
  {/* Left column — inner mini-grid keeps its own smaller, consistent gap */}
  <div className="grid h-full grid-cols-3 gap-2 md:col-span-3 md:grid-cols-2 md:grid-rows-2 md:gap-2">
    {tradeStats.map((stat, index) => (
      <StatsCard
        key={stat.id}
        icon={stat.icon}
        label={stat.label}
        value={stat.value}
        subLabel={stat.subLabel}
        className={index === 2 ? "md:col-span-2" : ""}
      />
    ))}
  </div>

  <ResultCard className="justify-between gap-2 md:col-span-4">
    <div>
      <div className="text-xs uppercase tracking-wide text-zinc-400">
        Estimated Result
      </div>
      <div className="mt-2 text-3xl font-semibold text-[#6CF5C2] sm:text-4xl">
        +1,900 $
      </div>
    </div>

    <div className="border-t border-white/[0.08] pt-4">
      <div className="text-xs uppercase tracking-wide text-zinc-400">
        Final Capital
      </div>
      <div className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
        2,900 $
      </div>
    </div>

    <div className="flex items-center gap-2 rounded-xl bg-[#6CF5C2] px-3 py-3 text-xs font-medium text-black sm:text-sm">
      <TrendingUp className="h-4 w-4 shrink-0" />
      An increase of +190.0% on your initial capital
    </div>
  </ResultCard>

  <ChartCard className="md:col-span-5" />
</div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Button>Join Lemvest</Button>
        </div>
      </div>
    </section>
  );
}