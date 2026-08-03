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
      <div className="grid grid-cols-3 gap-2 mb-2">
        <div className="bg-white text-black text-[11px] sm:text-xs font-bold tracking-wide text-center py-3 rounded-md">
          LEVEL
        </div>
        <div className="bg-blue-800 text-white text-[11px] sm:text-xs font-bold tracking-wide text-center py-3 rounded-md">
          AFFILIATES
        </div>
        <div className="bg-white text-black text-[11px] sm:text-xs font-bold tracking-wide text-center py-3 rounded-md">
          COMMISSION PER SALE
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-2">
        {rewardLevels.map((row) => (
          <div key={row.level} className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 text-white/80 text-xs sm:text-sm text-center py-4 rounded-md">
              {row.level}
            </div>
            <div className="bg-white/5 text-white/80 text-xs sm:text-sm text-center py-4 rounded-md">
              {row.affiliates}
            </div>
            <div className="bg-white/5 text-white/80 text-xs sm:text-sm text-center py-4 rounded-md">
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
    <div className="w-full mt-5">
      <div className="border-t border-white/10 pt-3 mb-3">
        <p className="text-white/40 text-[11px] font-semibold tracking-wide">
          BONUS REWARDS
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {bonusRewards.map((item) => (
          <div
            key={item.referrals}
            className="bg-white/5 rounded-md text-left sm:text-center py-3 px-4"
          >
            <p className="text-white/50 text-[11px] sm:text-xs mb-1">
              {item.referrals}
            </p>
            <p className="text-white text-sm sm:text-base font-bold">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
      {footerNotes.map((note) => (
        <div
          key={note}
          className="bg-white/5 rounded-md text-center py-4 px-3"
        >
          <p className="text-white/60 text-[11px] sm:text-xs leading-snug">
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
    <section className="bg-black text-white py-16 px-5 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading - always centered on top */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="text-white/40 font-normal block">
              Share Lemvest,
            </span>
            <span className="text-white">get rewarded</span>
          </h2>
        </div>

        {/* Card wrapper */}
        <div className="w-full border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
            {/* Left side text + button (desktop only in this position) */}
            <div className="hidden lg:flex flex-col justify-center items-center w-[220px] shrink-0 text-center gap-4">
              <p className="text-lg font-semibold leading-snug">
                A 3-LEVEL
                <br />
                REWARD SYSTEM
              </p>
              <Button>
                    Join Lemvest
                </Button>
  
            </div>

            {/* Right side: table + bonus + footer */}
            <div className="w-full md:max-w-2xl md:mx-auto lg:mx-0 lg:max-w-none">
              <RewardTable />
              <BonusRewards />
              <FooterCards />
            </div>
          </div>

          {/* Mobile-only text + button (shown below everything, stacked) */}
          <div className="flex lg:hidden flex-col items-center text-center gap-3 mt-6">
            <p className="text-base font-semibold leading-snug">
              A 3-LEVEL
              <br />
              REWARD SYSTEM
            </p>
            <Button>
      Join Lemvest
    </Button>
  
          </div>
        </div>
      </div>
    </section>
  );
}