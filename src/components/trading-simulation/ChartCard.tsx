"use client";

import { Info } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import ResultCard from "./ResultCard";

// Fake upward-growing capital curve — swap with real simulation output later
const chartData = [
  { day: 0, value: 1000 },
  { day: 1, value: 1120 },
  { day: 2, value: 1080 },
  { day: 3, value: 1260 },
  { day: 4, value: 1340 },
  { day: 5, value: 1500 },
  { day: 6, value: 1620 },
  { day: 7, value: 1780 },
  { day: 8, value: 2050 },
  { day: 9, value: 2400 },
  { day: 10, value: 2900 },
];

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
    <ResultCard className={`gap-4 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-zinc-400">
        <span>Estimated Capital Evolution</span>
        <Info className="h-3.5 w-3.5" />
      </div>

      {/* Chart + stats: stacked on mobile (flex-col), side-by-side from md up (flex-row) */}
      <div className="flex flex-1 flex-col gap-6 md:flex-row md:items-stretch">
        <div className="h-56 sm:h-64 md:h-auto md:flex-[3]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="capitalGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6CF5C2" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#6CF5C2" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a", fontSize: 11 }}
                width={48}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#171717",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                }}
                labelStyle={{ color: "#A1A1AA" }}
                itemStyle={{ color: "#6CF5C2" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#6CF5C2"
                strokeWidth={2}
                fill="url(#capitalGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center gap-1 md:flex-[2] md:border-l md:border-white/[0.08] md:pl-6">
          {statsRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between border-b border-white/[0.06] py-2 text-sm last:border-b-0"
            >
              <span className="text-zinc-400">{row.label}</span>
              <span className={`font-medium ${row.valueColor}`}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ResultCard>
  );
}