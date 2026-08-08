import Image from "next/image";
import Button from "./Button";

export default function OppurtunityCTA() {
  return (
    <section className="pb-8 md:pb-0">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Desktop / tablet background */}
          <Image
            src="/s8-glowcard.webp"
            alt="How many more opportunities are you going to let slip by?"
            width={1069}
            height={417}
            className="hidden h-auto w-full md:block"
          />

          {/* Mobile background */}
          <Image
            src="/s8-glowcard-mob.webp"
            alt="How many more opportunities are you going to let slip by?"
            width={378}
            height={437}
            className="block h-auto w-full md:hidden"
          />

          {/* Overlay content — centered on top of the image */}
          <div className="absolute inset-0 flex flex-col max-w-[681px] items-center justify-center gap-3 px-8 text-center sm:gap-5 md:gap-1 md:px-0 mx-auto -top-0 md:-top-20 lg:-top-25">
            <h3 className="text-white font-thin leading-snug text-[clamp(13px,4.2vw,18px)] md:text-[18px] lg:font-normal lg:text-[20px] xl:text-[24px]">
              How many more opportunities are you going to let slip by?
            </h3>
            <h3 className="text-white font-normal leading-snug text-[clamp(16px,5.2vw,22px)] md:text-[22px] lg:font-bold lg:text-[26px] xl:text-[30px] pb-[16px]">
              Results come to those who decide to take action.
            </h3>
            <div className="scale-80 lg:scale-100">
              <button className="bg-[#17438D] dark:bg-[#6affbd] hover:cursor-pointer py-[12px] px-[18px] rounded-lg text-white dark:text-black">Join Lemvest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}