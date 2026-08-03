// components/OpportunityCTA.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function OpportunityCTA() {
  return (
    <div className="w-full py-10 px-4">
      <div className="relative max-w-5xl mx-auto">
        {/* Card */}
        <div
          className="
            group relative overflow-visible
            rounded-[28px] sm:rounded-[32px]
            bg-gradient-to-br from-blue-800 via-blue-600 to-teal-400
            px-6 py-14 sm:px-12 sm:py-16 md:px-16 md:py-20
            text-center
            shadow-[0_0_0_rgba(59,130,246,0)]
            transition-all duration-500 ease-out
            hover:shadow-[0_0_60px_10px_rgba(45,212,191,0.35)]
            hover:scale-[1.01]
          "
        >
          {/* Decorative corner image - top left */}
          <div
            className="
              pointer-events-none select-none
              absolute -top-1 -left-1
              w-[90px] h-[90px]
              sm:w-[130px] sm:h-[130px]
              md:w-[160px] md:h-[160px]
              lg:w-[197px] lg:h-[197px]
              opacity-90
              transition-transform duration-500 ease-out
              group-hover:-translate-x-1 group-hover:-translate-y-1
            "
          >
            <Image
              src="/corner-shape-1.png"
              alt=""
              fill
              sizes="197px"
              className="object-contain"
            />
          </div>

          {/* Decorative corner image - bottom right */}
          <div
            className="
              pointer-events-none select-none
              absolute -bottom-1 -right-1
              w-[90px] h-[90px]
              sm:w-[130px] sm:h-[130px]
              md:w-[160px] md:h-[160px]
              lg:w-[197px] lg:h-[197px]
              opacity-90
              transition-transform duration-500 ease-out
              group-hover:translate-x-1 group-hover:translate-y-1
            "
          >
            <Image
              src="/corner-shape-2.png"
              alt=""
              fill
              sizes="197px"
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium max-w-md">
              How many more opportunities are you going to let slip by ?
            </p>

            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-lg leading-snug">
              Results come to those who decide to take action.
            </h3>

            <button
              className="
                mt-2 bg-emerald-400 hover:bg-emerald-300
                text-black text-sm sm:text-base font-semibold
                px-8 py-3 rounded-lg
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]
                hover:-translate-y-0.5
              "
            >
              Join Lemvest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}