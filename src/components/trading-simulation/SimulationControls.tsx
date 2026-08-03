"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import SimulationCard from "./SimulationCard";

const riskRewardOptions = ["1:1", "1:1.5", "1:2", "1:3"];

const sliderTrackClasses =
  "[&_[data-slot=slider-range]]:bg-[#6CF5C2] [&_[data-slot=slider-thumb]]:border-[#6CF5C2] [&_[data-slot=slider-thumb]]:bg-[#6CF5C2] [&_[data-slot=slider-track]]:bg-white/10";

// Shared shape for the three cards that are "label + value + slider + min/max"
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
    <SimulationCard
      label={label}
      icon={<Info className="h-3.5 w-3.5" />}
      className="col-span-1 md:col-span-3"
    >
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white sm:text-3xl">
          {value}
          {suffix === "%" && "%"}
        </span>
        {suffix === "$" && <span className="text-sm text-zinc-400">$</span>}
      </div>

      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(value) => {
            const newValue = Array.isArray(value) ? value[0] : value;
            onChange(newValue);
            }}
        className={sliderTrackClasses}
      />

      <div className="flex items-center justify-between text-xs text-zinc-500">
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
    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:mt-14 md:grid-cols-12 md:gap-6">
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

      {/* Risk / Reward — pill buttons instead of a slider, so it's built separately */}
      <SimulationCard
        label="Risk / Reward"
        icon={<Info className="h-3.5 w-3.5" />}
        className="col-span-1 md:col-span-3"
      >
        <div className="text-2xl font-semibold text-white sm:text-3xl">
          {riskReward}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {riskRewardOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRiskReward(option)}
              className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors duration-200 sm:text-sm ${
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