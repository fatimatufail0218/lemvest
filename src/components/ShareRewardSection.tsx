// components/ShareRewardSection.tsx
"use client";

import React from "react";
import Button from "./Button";

/* ---------- Data ---------- */
const rewardLevels = [
  { level: "Ambassador", affiliates: "1 – 24", commission: "$150" },
  { level: "Elite", affiliates: "25 – 99", commission: "$200" },
  { level: "Partner", affiliates: "100+", commission: "$300" },
];

const bonusRewards = [
  { referrals: "25 Referrals", amount: "$1,000" },
  { referrals: "50 Referrals", amount: "$3,000" },
  { referrals: "100 Referrals", amount: "$10,000" },
];

const footerNotes = [
  "All payments are made weekly in USDT.",
  "The program is also for Lemvest.",
];

/* ---------- Reward Table ---------- */
function RewardTable() {
  return (
    <div className="w-full rounded-xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 gap-2.5 mb-2.5">
        <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white px-3 py-3 text-center text-[11px] font-bold tracking-wide text-black sm:min-h-[76px] sm:px-4 sm:text-xs">
          LEVEL
        </div>
        <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-(--accent) px-3 py-3 text-center text-[11px] font-bold tracking-wide text-(--accent-foreground) sm:min-h-[76px] sm:px-4 sm:text-xs">
          AFFILIATES
        </div>
        <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white px-3 py-3 text-center text-[11px] font-bold tracking-wide text-black sm:min-h-[76px] sm:px-4 sm:text-xs">
          COMMISSION PER SALE
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2.5">
        {rewardLevels.map((row) => (
          <div key={row.level} className="grid grid-cols-3 gap-2.5">
            <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white/9 px-3 py-4 text-center text-xs text-black/70 dark:text-white/80 sm:min-h-[76px] sm:px-4 sm:text-sm">
              {row.level}
            </div>
            <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white/9 px-3 py-4 text-center text-xs text-black/70 dark:text-white/80 sm:min-h-[76px] sm:px-4 sm:text-sm">
              {row.affiliates}
            </div>
            <div className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white/9 px-3 py-4 text-center text-xs text-black/70 dark:text-white/80 sm:min-h-[76px] sm:px-4 sm:text-sm">
              {row.commission}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Bonus Rewards ---------- */
function BonusRewards() {
  return (
    <div className="w-full mt-6">
      <div className="border-t-2 border-black/10 dark:border-white/30 pt-4 mb-3">
        <p className="text-black/40 dark:text-white/40 text-[11px] font-semibold tracking-wide">
          BONUS REWARDS
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {bonusRewards.map((item) => (
          <div
            key={item.referrals}
            className="flex min-h-[76px] flex-col items-center justify-center gap-1 rounded-lg bg-black/[0.03] dark:bg-white/9 px-4 py-4 text-center sm:min-h-[92px] sm:px-5"
          >
            <p className="text-black/50 dark:text-white/50 text-[11px] sm:text-xs">
              {item.referrals}
            </p>
            <p className="text-black dark:text-white text-base sm:text-lg font-bold">
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Footer Cards ---------- */
function FooterCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2.5">
      {footerNotes.map((note) => (
        <div
          key={note}
          className="flex min-h-[64px] items-center justify-center rounded-lg bg-black/[0.03] dark:bg-white/9 px-4 py-4 text-center sm:min-h-[76px] sm:px-5"
        >
          <p className="text-black/60 dark:text-white/60 text-xs sm:text-sm leading-snug">
            {note}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Main Section ---------- */
export default function ShareRewardSection() {
  return (
    <section className="text-black dark:text-white py-16 px-5 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading - always centered on top */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] md:text-[40px] xl:text-[60px] font-medium leading-tight">
            <span className="text-black/30 dark:text-white/30 block">
              Share Lemvest,
            </span>
            <span className="text-black dark:text-white">get rewarded</span>
          </h2>
        </div>

        {/* Card wrapper */}
        <div className="w-full dark:border-2  dark:border-white/30 rounded-2xl p-6 md:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* Left side text + button (desktop only in this position) */}
            <div className="hidden lg:flex flex-col justify-center items-center w-[240px] shrink-0 text-center gap-5">
              <p className="text-xl font-semibold leading-snug">
                A 3-LEVEL
                <br />
                REWARD SYSTEM
              </p>
              <Button>Join Lemvest</Button>
            </div>

            {/* Right side: table + bonus + footer */}
            <div className="w-full md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-none">
              <RewardTable />
              <BonusRewards />
              <FooterCards />
            </div>
          </div>

          {/* Mobile-only text + button (shown below everything, stacked) */}
          <div className="flex lg:hidden flex-col items-center text-center gap-4 mt-8">
            <p className="text-lg font-semibold leading-snug">
              A 3-LEVEL
              <br />
              REWARD SYSTEM
            </p>
            <Button>Join Lemvest</Button>
          </div>
        </div>
      </div>
    </section>
  );
}