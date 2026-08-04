"use client";

import * as React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Button from "@/components/Button";
import Chip from "@/components/chip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import TradingSimulation from "@/components/trading-simulation/TradingSimulation";
import {
  GraduationCap,
  LineChart,
  Lock,
  Bell,
  BookOpen,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react";
import ShareRewardSection from "@/components/ShareRewardSection";
import FaqSection from "@/components/FAQsection";
import OpportunityCTA from "@/components/OpportunityCTA";
import Footer from "@/components/footer";

// Card data — edit copy/images here, no JSX repeated 3 times below
const cards = [
  {
    id: "student",
    title: "Student",
    description:
      "Take advantage of your free time to develop a skill that offers significant added value. Learn to invest wisely and gradually build a new source of income while preparing for your future.",
    image: "/student.webp",
    alt: "Illustration of a laptop, stacked books and a coffee cup",
  },
  {
    id: "employee",
    title: "Employee",
    description:
      "Don't rely solely on your salary. Learn how to make your money work for you through smart investing, and develop skills that let you generate additional income over the long term.",
    image: "/employee(1).webp",
    alt: "Illustration of a briefcase, a clock and a growth chart",
  },
  {
    id: "entrepreneur",
    title: "On Your Own",
    description:
      "Whether you're already passionate about the financial markets or an entrepreneur in another field, join a comprehensive investment ecosystem that lets you diversify your income, build your skills, and accelerate your financial growth.",
    image: "/on-your-own.webp",
    alt: "Illustration of coins, a building and a savings vault",
  },
];


const cards2 = [
  {
    id: "morning-analysis",
    title: "Morning Analysis",
    description:
      "Every day, five days a week, receive a clear analysis of the key assets, along with the various scenarios to watch out for.",
    image: "/g1.webp",
    alt: "Morning market analysis chart",
  },
  {
    id: "educational-portal",
    title: "Educational Portal",
    description:
      "Training, psychology, in-depth analysis, news, performance trackers... everything is in one place to help you improve.",
    image: "/r1-img.webp",
    alt: "Educational portal cover",
  },
  {
    id: "trading-live",
    title: "Trading Live",
    description:
      "Join live sessions with our traders to analyse the markets, study charts and discover investment ideas.",
    image: "/g2.webp",
    alt: "Live trading session screen",
  },
  {
    id: "market-opportunities",
    title: "Market Opportunities",
    description:
      "From Monday to Friday, receive detailed trading ideas with a consistently positive risk-reward ratio to help you manage each opportunity more effectively.",
    image: "/r2-img1.webp",
    alt: "Market opportunities ticker",
  },
  {
    id: "private-coach",
    title: "Private Coach",
    description:
      "Ask questions whenever you like and benefit from personalised support to help you progress with greater peace of mind.",
    image: "/r2-img2.webp",
    alt: "Private coaching session",
  },
  {
    id: "all-level-academy",
    title: "All-Level Academy",
    description:
      "Discover hours of videos combining technique, strategy and psychology to help you build a solid foundation in trading.",
    image: "/r2-img3.webp",
    alt: "Academy training session",
  },
  {
    id: "economic-news",
    title: "Economic News",
    description:
      "Stay up to date with major economic events every day to better understand the markets and anticipate their impact.",
    image: "/r3-img1.webp",
    alt: "Economic news report",
  },
  {
    id: "calculator",
    title: "Calculator",
    description:
      "Simulate each position before investing to optimise your money management and better manage the growth of your capital.",
    image: "/r3-img2.webp",
    alt: "Risk reward calculator",
  },
];

const featureCards = [
  { id: "trading-education", icon: GraduationCap, label: "Trading Education" },
  { id: "daily-market-briefing", icon: LineChart, label: "Daily Market Briefing", highlighted: true },
  { id: "private-support", icon: Lock, label: "24/7 Private Support" },
  { id: "alerts-positive-rr", icon: Bell, label: "Alerts With Positive RR" },
  { id: "educational-portal", icon: BookOpen, label: "Educational Portal" },
  { id: "daily-live-trading", icon: MonitorPlay, label: "Daily Live Trading" },
];

export default function Home() {

const [api, setApi] = React.useState<CarouselApi>();
const [current, setCurrent] = React.useState(0);

// Dot count comes straight from the data array — no dependency on embla's
// async measurement timing, so it can never render the wrong number of dots.
const dotCount = cards2.length;

React.useEffect(() => {
  if (!api) return;
  setCurrent(api.selectedScrollSnap());
  api.on("select", () => setCurrent(api.selectedScrollSnap()));
}, [api]);

  return (
    <div>
      <Navbar/>
{/* -------------------------------------------------------------section 1-------------------------------------------------------------------------- */}
      <section className="relative overflow-hidden h-[110vh] md:min-h-[120vh] py-30">
          <div className="absolute inset-0">
            <Image
              src="/hero-ellipse.webp"
              fill
              alt=""
              priority
              className="object-cover object-top"
          />
          </div>

          <div className="relative z-10 xl:px-10 md:px-9 px-4 max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center">
                {/* --------------------------------------------left cards------------------------------------------- */}
                <div className="md:flex flex-col gap-80 lg:gap-60  hidden">
                  <Card
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_965)">
                      <path d="M18.8086 3.29611L19.2964 7.93722M9.52637 4.27171L10.0142 8.91281" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.5715 5.98257L13.251 6.22647C8.87528 6.68638 6.68745 6.91633 5.47097 8.41854C4.2545 9.92077 4.48445 12.1086 4.94435 16.4843L5.18825 18.8048C5.64815 23.1805 5.87811 25.3684 7.38031 26.5848C8.88255 27.8013 11.0704 27.5713 15.4461 27.1114L17.7666 26.8675C22.1422 26.4076 24.3302 26.1777 25.5466 24.6754C26.7631 23.1733 26.5331 20.9854 26.0732 16.6097L25.8293 14.2892C25.3694 9.9135 25.1395 7.72567 23.6372 6.50919C22.1351 5.29272 19.9471 5.52268 15.5715 5.98257Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.7002 14.1637L25.5852 11.9686" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_965">
                      <rect width="28" height="28" fill="white" transform="translate(0 2.9268) rotate(-6)"></rect>
                      </clipPath>
                      </defs>
                      </svg>} 
                      className="-rotate-6"
                    title="Daily Opportunities"
                    pinSrc="/pin.webp"
                  />

                  <Card
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_975)">
                      <path d="M5.4839 25.4454L10.5395 21.2032M12.864 21.4066L17.1062 26.4622M11.7018 21.3049L11.1934 27.1161" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M3.55807 14.0048C3.76778 11.6079 3.87263 10.4094 5.12922 9.76898C6.38579 9.12858 8.30337 9.29634 12.1385 9.63188L13.3007 9.73356C17.1359 10.0691 19.0534 10.2369 20.1798 11.0857C21.306 11.9346 21.2012 13.1331 20.9915 15.5301L20.8644 16.9829C20.6547 19.3798 20.5498 20.5783 19.2933 21.2187C18.0366 21.8591 16.119 21.6914 12.2839 21.3558L11.1217 21.2541C7.28655 20.9186 5.36897 20.7508 4.24269 19.902C3.11641 19.0531 3.22126 17.8546 3.43097 15.4576L3.55807 14.0048Z" stroke="white" stroke-width="1.75"></path>
                      <path d="M21.1561 13.6408L21.3101 13.5659C23.8982 12.3054 25.1923 11.6752 26.1492 12.1179C27.1062 12.5606 27.0029 13.7416 26.7962 16.1038L26.6806 17.4256C26.4739 19.7877 26.3706 20.9687 25.3513 21.2385C24.332 21.5083 23.167 20.6629 20.8371 18.9722L20.6984 18.8715" stroke="white" stroke-width="1.75" stroke-linecap="round"></path>
                      <path d="M16.2058 9.9877C17.8105 10.1281 19.2251 8.94104 19.3655 7.33634C19.5059 5.73164 18.3189 4.31696 16.7142 4.17657C15.1095 4.03617 13.6948 5.22323 13.5544 6.82793C13.414 8.43263 14.6011 9.84731 16.2058 9.9877Z" stroke="white" stroke-width="1.75"></path>
                      <path d="M9.81311 9.42843C11.7388 9.5969 13.4364 8.17244 13.6048 6.2468C13.7733 4.32115 12.3488 2.62354 10.4232 2.45507C8.49756 2.2866 6.79995 3.71106 6.63148 5.63671C6.46301 7.56235 7.88747 9.25996 9.81311 9.42843Z" stroke="white" stroke-width="1.75"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_975">
                      <rect width="28" height="28" fill="white" transform="translate(2.44043) rotate(5)"></rect>
                      </clipPath>
                      </defs>
                      </svg>}
                      className="rotate-6"
                    title="Live Sessions"
                    pinSrc="/pin.webp"
                  />

                  
                </div>
                {/* ---------------------------------------------------middle content----------------------------------------- */}
                <div className="max-w-[400px] xl:max-w-[1200px] px-2 md:px-5 xl:px-40 text-center">
                  <h1 className="text-[#FFF]/30 text-[20px] md:text-[35px] xl:text-[60px] leading-[100%]">
                    You don’t need to do more {" "}
                    <span className="text-[#FFF]">
                      - You need a better system
                    </span>
                  </h1>
                  <h4 className="text-[#FFF]/70 pt-2 text-[12px] md:text-[14px] xl:text-[16px]">
                    Whatever your level of experience, Lemvest helps you to learn, improve and grow financially through  a comprehensive trading ecosystem. 
                  </h4>
                  <div className="pt-6">
                    <Button className="">Join Lemvest</Button>
                  </div>
                  
                  {/* --------------------------------------------chip-------------------------------------------- */}
                  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-2 md:justify-center mt-4">
                    <Chip icon={<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_965)">
                      <path d="M18.8086 3.29611L19.2964 7.93722M9.52637 4.27171L10.0142 8.91281" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.5715 5.98257L13.251 6.22647C8.87528 6.68638 6.68745 6.91633 5.47097 8.41854C4.2545 9.92077 4.48445 12.1086 4.94435 16.4843L5.18825 18.8048C5.64815 23.1805 5.87811 25.3684 7.38031 26.5848C8.88255 27.8013 11.0704 27.5713 15.4461 27.1114L17.7666 26.8675C22.1422 26.4076 24.3302 26.1777 25.5466 24.6754C26.7631 23.1733 26.5331 20.9854 26.0732 16.6097L25.8293 14.2892C25.3694 9.9135 25.1395 7.72567 23.6372 6.50919C22.1351 5.29272 19.9471 5.52268 15.5715 5.98257Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4.7002 14.1637L25.5852 11.9686" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_965">
                      <rect width="28" height="28" fill="white" transform="translate(0 2.9268) rotate(-6)"></rect>
                      </clipPath>
                      </defs>
                      </svg>}
                       label="Daily Opportunities" />

                    <Chip icon={<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_975)">
                      <path d="M5.4839 25.4454L10.5395 21.2032M12.864 21.4066L17.1062 26.4622M11.7018 21.3049L11.1934 27.1161" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M3.55807 14.0048C3.76778 11.6079 3.87263 10.4094 5.12922 9.76898C6.38579 9.12858 8.30337 9.29634 12.1385 9.63188L13.3007 9.73356C17.1359 10.0691 19.0534 10.2369 20.1798 11.0857C21.306 11.9346 21.2012 13.1331 20.9915 15.5301L20.8644 16.9829C20.6547 19.3798 20.5498 20.5783 19.2933 21.2187C18.0366 21.8591 16.119 21.6914 12.2839 21.3558L11.1217 21.2541C7.28655 20.9186 5.36897 20.7508 4.24269 19.902C3.11641 19.0531 3.22126 17.8546 3.43097 15.4576L3.55807 14.0048Z" stroke="white" stroke-width="1.75"></path>
                      <path d="M21.1561 13.6408L21.3101 13.5659C23.8982 12.3054 25.1923 11.6752 26.1492 12.1179C27.1062 12.5606 27.0029 13.7416 26.7962 16.1038L26.6806 17.4256C26.4739 19.7877 26.3706 20.9687 25.3513 21.2385C24.332 21.5083 23.167 20.6629 20.8371 18.9722L20.6984 18.8715" stroke="white" stroke-width="1.75" stroke-linecap="round"></path>
                      <path d="M16.2058 9.9877C17.8105 10.1281 19.2251 8.94104 19.3655 7.33634C19.5059 5.73164 18.3189 4.31696 16.7142 4.17657C15.1095 4.03617 13.6948 5.22323 13.5544 6.82793C13.414 8.43263 14.6011 9.84731 16.2058 9.9877Z" stroke="white" stroke-width="1.75"></path>
                      <path d="M9.81311 9.42843C11.7388 9.5969 13.4364 8.17244 13.6048 6.2468C13.7733 4.32115 12.3488 2.62354 10.4232 2.45507C8.49756 2.2866 6.79995 3.71106 6.63148 5.63671C6.46301 7.56235 7.88747 9.25996 9.81311 9.42843Z" stroke="white" stroke-width="1.75"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_975">
                      <rect width="28" height="28" fill="white" transform="translate(2.44043) rotate(5)"></rect>
                      </clipPath>
                      </defs>
                      </svg>} 
                      label="Live Sessions" />

                    <Chip icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_935)">
                      <path d="M5.49414 20.0634L11.2096 16.7636C12.4707 16.0355 13.1012 15.6715 13.7263 15.7801C13.8296 15.798 13.9311 15.8252 14.0296 15.8613C14.6251 16.0799 14.9892 16.7103 15.7173 17.9714C16.4454 19.2325 16.8093 19.863 17.4049 20.0815C17.5035 20.1177 17.6049 20.1448 17.7083 20.1628C18.3334 20.2714 18.9638 19.9073 20.2249 19.1792L27.3693 15.0544" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M26.9762 19.7804C26.9762 19.7804 28.9158 15.3469 28.4024 14.4576C27.889 13.5683 23.0796 13.0313 23.0796 13.0313" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_935">
                      <rect width="28" height="28" fill="white" transform="matrix(0.965926 0.258819 0.258819 -0.965926 0 27.0459)"></rect>
                      </clipPath>
                      </defs>
                      </svg>} 
                      label="Strategies" />

                    <Chip icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M16.1556 9.87328L13.845 10.198C10.5998 10.6541 8.97722 10.8821 7.92109 11.8248C7.46388 12.2329 7.09153 12.727 6.82528 13.279C6.21027 14.554 6.43832 16.1766 6.89439 19.4218C7.35047 22.6669 7.57852 24.2896 8.52115 25.3457C8.92922 25.8029 9.42335 26.1752 9.97534 26.4415C11.2504 27.0565 12.873 26.8285 16.1182 26.3724L18.4288 26.0477C21.6739 25.5916 23.2966 25.3635 24.3527 24.4209C24.8099 24.0128 25.1822 23.5186 25.4485 22.9667C26.0635 21.6917 25.8355 20.069 25.3794 16.8239C24.9233 13.5787 24.6953 11.9561 23.7527 10.9C23.3445 10.4428 22.8504 10.0704 22.2985 9.80416C21.0234 9.18915 19.4008 9.4172 16.1556 9.87328Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.89461 19.4217L4.58398 19.7465" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M14.3135 21.9135L18.9347 21.264" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M27.6905 16.4991L25.3799 16.8239" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M19.1162 14.1698L19.4409 16.4804" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12.1836 15.144L12.5083 17.4546" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.0002 10.0356C14.6941 7.85708 14.541 6.76784 13.7691 6.18619C12.9972 5.60454 11.908 5.75762 9.72949 6.06378" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>}
                      label="AI Tools" />
                  </div>
                </div>
                {/* -------------------------------------------------right cards------------------------------------------------- */}
                <div className="md:flex flex-col gap-80 lg:gap-60 hidden">
                    <Card
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g clip-path="url(#clip0_256_935)">
                      <path d="M5.49414 20.0634L11.2096 16.7636C12.4707 16.0355 13.1012 15.6715 13.7263 15.7801C13.8296 15.798 13.9311 15.8252 14.0296 15.8613C14.6251 16.0799 14.9892 16.7103 15.7173 17.9714C16.4454 19.2325 16.8093 19.863 17.4049 20.0815C17.5035 20.1177 17.6049 20.1448 17.7083 20.1628C18.3334 20.2714 18.9638 19.9073 20.2249 19.1792L27.3693 15.0544" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M26.9762 19.7804C26.9762 19.7804 28.9158 15.3469 28.4024 14.4576C27.889 13.5683 23.0796 13.0313 23.0796 13.0313" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                      <clipPath id="clip0_256_935">
                      <rect width="28"gap-20 height="28" fill="white" transform="matrix(0.965926 0.258819 0.258819 -0.965926 0 27.0459)"></rect>
                      </clipPath>
                      </defs>
                      </svg>}
                      className="rotate-6"
                    title="Strategies"
                    pinSrc="/pin.webp"
                  />

                  <Card
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <path d="M16.1556 9.87328L13.845 10.198C10.5998 10.6541 8.97722 10.8821 7.92109 11.8248C7.46388 12.2329 7.09153 12.727 6.82528 13.279C6.21027 14.554 6.43832 16.1766 6.89439 19.4218C7.35047 22.6669 7.57852 24.2896 8.52115 25.3457C8.92922 25.8029 9.42335 26.1752 9.97534 26.4415C11.2504 27.0565 12.873 26.8285 16.1182 26.3724L18.4288 26.0477C21.6739 25.5916 23.2966 25.3635 24.3527 24.4209C24.8099 24.0128 25.1822 23.5186 25.4485 22.9667C26.0635 21.6917 25.8355 20.069 25.3794 16.8239C24.9233 13.5787 24.6953 11.9561 23.7527 10.9C23.3445 10.4428 22.8504 10.0704 22.2985 9.80416C21.0234 9.18915 19.4008 9.4172 16.1556 9.87328Z" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.89461 19.4217L4.58398 19.7465" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M14.3135 21.9135L18.9347 21.264" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M27.6905 16.4991L25.3799 16.8239" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M19.1162 14.1698L19.4409 16.4804" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12.1836 15.144L12.5083 17.4546" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.0002 10.0356C14.6941 7.85708 14.541 6.76784 13.7691 6.18619C12.9972 5.60454 11.908 5.75762 9.72949 6.06378" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>}
                      className="-rotate-6"
                    title="AI Tools"
                    pinSrc="/pin.webp"
                  />
                </div>
            </div>
          </div>
      </section>



      {/* -------------------------------------------------------------------------section 2-------------------------------------------------------------------------- */}

      <section className="">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
        {/* Top row: heading + paragraph, button (tablet/desktop only) */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-[300px] lg:max-w-[500px]">
            <h1 className="text-[36px] lg:text-[60px] font-medium text-white/70 leading-none">
              Lemvest is for you <span className="text-white">if your are...</span> 
            </h1>
          </div>

          {/* Desktop/tablet button — hidden on mobile, relocated below the grid instead */}
          <div className="hidden shrink-0 sm:block">
            <Button>Join Lemvest</Button>
          </div>
        </div>

        {/* Cards grid — everything inline, no separate Card component */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                flex h-full flex-col justify-between
                rounded-2xl border border-white/10 bg-white/[0.03]
                p-6 sm:p-7 lg:p-8
                transition-colors duration-300
                hover:border-emerald-400/30 hover:bg-white/[0.05]
              "
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/60">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={300}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only button — appears below the grid, centered */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Button>Join Lemvest</Button>
        </div>
      </div>
    </section>
  

  {/* ---------------------------------------------------------------section 3------------------------------------------------------------------------------- */}

   <section className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
        <h2 className="text-center text-[36px] font-medium text-white/40 md:text-[40px] xl:text-[60px] max-w-[500px] xl:max-w-[600px] leading-none mx-auto">
          Much more than just {" "} <span className="text-white">a trading group</span> 
        </h2>

        {/* md and up: single fluid grid — first 6 items span 2/6 cols (3 per row),
            last 2 items span 3/6 cols (2 per row), row 3 cards are taller */}
        <div className="mt-10 hidden md:grid md:grid-cols-4 lg:grid-cols-6 md:gap-6 lg:mt-14 lg:gap-8">
          {cards2.map((card, index) => {
            const isWideRow = index >= 6; // last 2 cards → taller row
            return (
              <div
                key={card.id}
                className={`${
                  isWideRow ? "md:col-span-2 lg:col-span-3" : "md:col-span-2 lg:-col-span-2"
                } ${
                  isWideRow
                    ? "md:h-[386px] lg:h-[420px] xl:h-[445px]"
                    : "md:h-[300px] lg:h-[326px] xl:h-[346px]"
                } flex flex-col rounded-2xl border border-white/5 bg-[#191919] transition-colors duration-300 hover:border-emerald-400/30`}
              >
                {/* Image wrapper — fixed box, image fully COVERS it (crops if
                    needed, never letterboxed), own rounded corners via overflow-hidden */}
                <div className="relative m-4 flex-1 overflow-hidden rounded-xl sm:m-5">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 380px, (min-width: 1024px) 320px, (min-width: 768px) 260px, 85vw"
                  />
                </div>

                {/* Text wrapper */}
                <div className="flex flex-col gap-2 px-5 pb-5 sm:px-6 sm:pb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:hidden">
      <Carousel
  setApi={setApi}
  opts={{ align: "start", containScroll: false }}
  className="w-full"
>
  <CarouselContent className="-ml-4">
    {cards2.map((card) => (
      <CarouselItem key={card.id} className="basis-[85%] pl-4 sm:basis-1/2">
        <div className="flex h-[320px] flex-col rounded-2xl border border-white/5 bg-[#191919]">
          <div className="relative m-4 flex-1 overflow-hidden rounded-xl">
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="85vw"
            />
          </div>
          <div className="flex flex-col gap-2 px-5 pb-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              {card.description}
            </p>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <div className="mt-6 flex items-center justify-center gap-4">
    <CarouselPrevious
      className="
        static left-0 top-0 translate-y-0
        border-white/20 text-white
        transition-colors duration-200
        hover:border-emerald-400 hover:bg-transparent hover:text-emerald-400
        focus-visible:border-emerald-400 focus-visible:text-emerald-400
        active:border-emerald-400 active:text-emerald-400
      "
    />
    <div className="flex items-center gap-1">
      {Array.from({ length: dotCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => api?.scrollTo(index)}
          className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
            current === index ? "bg-emerald-400" : "bg-white/20"
          }`}
        />
      ))}
    </div>
    <CarouselNext
      className="
        static left-0 top-0 translate-y-0
        border-white/20 text-white
        transition-colors duration-200
        hover:border-emerald-400 hover:bg-transparent hover:text-emerald-400
        focus-visible:border-emerald-400 focus-visible:text-emerald-400
        active:border-emerald-400 active:text-emerald-400
      "
    />
  </div>
</Carousel>
    </div>
        {/* Join Lemvest — hamesha grid/carousel k neeche, har breakpoint pe */}
        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Button>Join Lemvest</Button>
        </div>
      </div>
    </section>


{/* --------------------------------------------------------------------section 4------------------------------------------------------- */}
<section className="min-h-[100vh]">
<TradingSimulation />
</section>

{/* -------------------------------- Section 5 -------------------------------- */}
<section className="bg-[#090909] py-16 sm:py-20 lg:py-28">
  <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
    <h2 className="text-center font-aeonik font-medium tracking-tight text-white text-[36px] lg:text-[40px] xl:text-[60px]">
      Free but precious
    </h2>

    {/* 2 cols on mobile, 3 cols from md up */}
    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-7">
      {featureCards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#141414] p-5 transition-all duration-300 ease-out hover:border-transparent hover:bg-[#6AFFBD] sm:gap-5 sm:p-7 xl:h-[200px] xl:p-8"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6AFFBD] text-black transition-colors duration-300 ease-out group-hover:bg-black group-hover:text-[#6AFFBD] sm:h-12 sm:w-12">
              <Icon className="h-4 w-4 md:h-6 md:w-6" strokeWidth={2} />
            </span>
            <h3 className="font-aeonik font-medium leading-snug text-white transition-colors duration-300 ease-out group-hover:text-black text-[10px] md:text-[16px] xl:text-[24px]">
              {card.label}
            </h3>
          </div>
        );
      })}
    </div>

    <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
      <Button>Join Lemvest</Button>
    </div>
  </div>
</section>

{/* -------------------------------- Section 6 -------------------------------- */}
<section className="bg-[#090909] pb-16 sm:pb-20 lg:pb-28">
  <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
    <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-4 sm:gap-5 md:grid-cols-[1fr_2fr] md:gap-6 md:h-[250px]">
      {/* Highlighted guarantee card - narrower */}
      <div className="flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#6AFFBD] p-8 text-center sm:p-10 md:h-full">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-[#6AFFBD]">
          <ShieldCheck className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="font-aeonik text-xl font-semibold leading-snug text-black sm:text-2xl">
          Invest with Greater
          <br />
          peace of mind
        </h3>
      </div>

      {/* Dark text card - wider */}
      <div className="flex items-center justify-center rounded-2xl border border-white/[0.08] bg-[#141414] p-8 text-center sm:p-10 md:h-full">
        <p className="font-aeonik text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-loose">
          When you join Lemvest, you&apos;re eligible for a 5-day
          money-back guarantee.
          <br className="hidden sm:block" />
          If you follow our advice correctly, participate in our live
          sessions,
          <br className="hidden sm:block" />
          or take our training courses, and you incur a loss on your{" "}
          initial investment,
          <br className="hidden sm:block" />
          <span className="font-semibold text-white">
            we&apos;ll reimburse you for that loss during your first 5
            days.
          </span>
        </p>
      </div>
    </div>

    <div className="mt-10 flex justify-center md:mt-16 lg:mt-14">
      <Button>Join Lemvest</Button>
    </div>
  </div>
</section>


{/* ------------------------------------------------section 7------------------------------------------------------------------- */}
        <section>
          <ShareRewardSection />
        </section>

{/* --------------------------------------------------section 8------------------------------------------------------------- */}

<section className="py-1">
  <OpportunityCTA />
</section>


{/* ----------------------------------------section last------------------------------------------------------------------------------ */}

<section className="">
  <FaqSection/>

</section>



{/* ---------------------------------------------------------footer--------------------------------------------------------------------- */}
<Footer />

    </div>
  );
}
