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
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1440px]">
        <SectionHeading
          title="Simulate your trading results"
          subtitle="Estimate how your capital can grow based on your win rate, risk/reward and capital."
        />

        <SimulationControls />

        {/* Simulation results divider */}
        <div className="mt-12 flex items-center gap-4 sm:mt-16 lg:mt-20">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 sm:text-sm">
            Simulation Results
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/*
          Results grid — no forced pixel height anywhere; CSS Grid's default
          row-stretch equalises left / middle / chart automatically.

          md (7 cols):  left(3) + middle(4) = 7 → fills row 1 exactly,
                        so chart(7) auto-wraps to its own full-width row 2.
          lg (12 cols): left(3) + middle(4) + chart(5) = 12 → all three
                        fit in one row, exactly matching the Figma desktop layout.
          mobile: single column, left row is its own 3-col mini-grid (below).
        */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-7 md:gap-6 lg:grid-cols-12">
          {/* Left column — mobile: 3 cards in one row.
              md/lg: 2x2 mini-grid — card 1+2 in row 1, card 3 spans both columns in row 2. */}
          <div className="grid h-full grid-cols-3 gap-4 sm:gap-5 md:col-span-3 md:grid-cols-2 md:grid-rows-2 md:gap-6">
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

          {/* Middle column — Estimated Result */}
          <ResultCard className="justify-between gap-6 md:col-span-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-zinc-400">
                Estimated Result
              </div>
              <div className="mt-2 text-3xl font-semibold text-[#6CF5C2] sm:text-4xl">
                +1,900 $
              </div>
            </div>

            <div className="border-t border-white/[0.08] pt-5">
              <div className="text-xs uppercase tracking-wide text-zinc-400">
                Final Capital
              </div>
              <div className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                2,900 $
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-[#6CF5C2] px-4 py-3 text-xs font-medium text-black sm:text-sm">
              <TrendingUp className="h-4 w-4 shrink-0" />
              An increase of +190.0% on your initial capital
            </div>
          </ResultCard>

          {/* Right column — chart + stats.
              md: col-span-7 fills the whole row width on its own (row 2).
              lg: col-span-5 sits beside left/middle in the same row. */}
          <ChartCard className="md:col-span-7 lg:col-span-5" />
        </div>

        {/* CTA — always below the results grid, every breakpoint */}
        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Button>Join Lemvest</Button>
        </div>
      </div>
    </section>
  );
}