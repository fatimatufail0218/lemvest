import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  pinSrc?: string;
  pinTop?: number;
  className?: string;
}

export default function Card({
  icon,
  title,
  pinSrc = "/pin.png",
  pinTop = -32,
  className = "",
}: CardProps) {
  return (
    <div
      className={`relative
      w-[120px] h-[120px]
      md:w-[130px] md:h-[130px]
      xl:w-[180px] xl:h-[160px]
      ${className}`}
    >
      {/* Pin */}
      <div className="absolute left-1/2 z-20 -translate-x-1/4 pointer-events-none select-none">
        <div className="absolute left-1/2 top-2 -translate-x-1/2">
          <div className="relative w-[5px] h-[5px] bg-white rounded-full">
            <Image
              src={pinSrc}
              alt=""
              width={100}
              height={108}
              className="absolute bottom-1/9 left-1/2 -translate-x-1/4 w-9 h-auto max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div
  className="
    relative
    z-0
    w-full
    h-full
    rounded-[18px]
    xl:rounded-[24px]
    bg-white
    dark:bg-[#1C1C1C]
    border-0
    dark:border
    dark:border-white/10
    shadow-[0_12px_28px_-8px_rgba(0,0,0,0.18)]
    dark:shadow-none
    flex
    flex-col
    items-center
    justify-center
    gap-2
    xl:gap-3
    px-3
    xl:px-5
  "
>
        {/* Icon */}
        <div className="flex items-center justify-center text-black dark:text-white">
          <div className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8">{icon}</div>
        </div>

        {/* Title */}
        <p
          className="
            text-black
            dark:text-white
            text-[11px]
            md:text-xs
            xl:text-base
            font-medium
            leading-snug
            text-center
          "
        >
          {title}
        </p>
      </div>
    </div>
  );
}