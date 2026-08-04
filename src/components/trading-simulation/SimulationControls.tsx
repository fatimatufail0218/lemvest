"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import SimulationCard from "./SimulationCard";

const riskRewardOptions = ["1:1", "1:1.5", "1:2", "1:3"];

const sliderTrackClasses =
  "[&_[data-slot=slider-range]]:bg-[#6CF5C2] [&_[data-slot=slider-thumb]]:border-[#6CF5C2] [&_[data-slot=slider-thumb]]:bg-[#6CF5C2] [&_[data-slot=slider-track]]:bg-white/10";

function SliderField({
  label,
  value,
  min,
  max,
  step,
  suffix,
  minLabel,
  maxLabel,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: "$" | "%";
  minLabel: string;
  maxLabel: string;
  onChange: (value: number) => void;
}) {
  return (
    <SimulationCard label={label} icon={<Info className="h-3.5 w-3.5" />}>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white">
          {value}
          {suffix === "%" && "%"}
        </span>
        {suffix === "$" && <span className="text-xs text-zinc-400">$</span>}
      </div>

      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
onValueChange={(value) => {
  onChange(Array.isArray(value) ? value[0] : value);
}}
                className={sliderTrackClasses}
      />

      <div className="flex items-center justify-between text-[11px] text-zinc-500">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </SimulationCard>
  );
}

export default function SimulationControls() {
  const [initialCapital, setInitialCapital] = useState(1000);
  const [winRate, setWinRate] = useState(65);
  const [riskReward, setRiskReward] = useState("1:2");
  const [numberOfTrades, setNumberOfTrades] = useState(20);

  return (
    // Gap scales up progressively; only hits the Figma's exact 40px at lg+,
    // so mobile/tablet stay tight and uncramped.
    <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 md:grid-cols-4 md:gap-2 lg:mt-14 lg:gap-4">
      <SliderField
        label="Initial Capital"
        value={initialCapital}
        min={100}
        max={100000}
        step={100}
        suffix="$"
        minLabel="100 $"
        maxLabel="100,000 $"
        onChange={setInitialCapital}
      />

      <SliderField
        label="Win Rate"
        value={winRate}
        min={1}
        max={99}
        step={1}
        suffix="%"
        minLabel="1%"
        maxLabel="99%"
        onChange={setWinRate}
      />

      <SimulationCard label="Risk / Reward" icon={<Info className="h-3.5 w-3.5" />}>
        <div className="text-2xl font-semibold text-white sm:text-3xl">
          {riskReward}
        </div>
        <div className="flex flex-row gap-1 pr-0.5">
          {riskRewardOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRiskReward(option)}
              className={`rounded-lg border px-1 md:px-1.5 py-1.5 text-[8px] md:text-[10px] font-medium transition-colors duration-200 ${
                riskReward === option
                  ? "border-[#6CF5C2] bg-[#6CF5C2] text-black"
                  : "border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.06]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </SimulationCard>

      <SliderField
        label="Number of Trades"
        value={numberOfTrades}
        min={1}
        max={500}
        step={1}
        minLabel="1"
        maxLabel="500"
        onChange={setNumberOfTrades}
      />


      
    </div>
  );
}