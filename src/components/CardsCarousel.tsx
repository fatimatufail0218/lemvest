"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface CarouselCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface CardsCarouselProps {
  cards: CarouselCardData[];
}

export default function CardsCarousel({ cards }: CardsCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [dotCount, setDotCount] = React.useState(cards.length);

  React.useEffect(() => {
    if (!api) return;

    const updateDots = () => setDotCount(api.scrollSnapList().length);

    updateDots();
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    api.on("reInit", updateDots);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: true, containScroll: false }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 items-center py-6 md:py-8">
        {cards.map((card, index) => {
          const isActive = current === index;

          return (
            <CarouselItem
              key={card.id}
              className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3"
            >
              <div
                className={`flex h-[320px] flex-col rounded-2xl border transition-all duration-300 ease-out md:h-[300px] lg:h-[326px] xl:h-[346px] ${
                  isActive
                    ? "scale-105 border-(--accent)/40 bg-black/[0.03] dark:bg-[#191919] shadow-lg shadow-black/5 dark:shadow-black/40 md:scale-110"
                    : "scale-95 border-black/5 dark:border-white/5 bg-black/[0.03] dark:bg-[#191919] opacity-70 md:scale-90"
                }`}
              >
                <div className="relative m-4 flex-1 overflow-hidden rounded-xl sm:m-5">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 380px, (min-width: 1024px) 320px, (min-width: 768px) 260px, 85vw"
                  />
                </div>
                <div className="flex flex-col gap-2 px-5 pb-5 sm:px-6 sm:pb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-black dark:text-white sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
                    {card.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <div className="mt-6 flex items-center justify-center gap-4">
        <CarouselPrevious
          className="
            static left-0 top-0 translate-y-0
            border-black/15 dark:border-white/20 bg-transparent text-black dark:text-white
            transition-colors duration-200
            hover:border-(--accent) hover:bg-transparent hover:text-(--accent)
            focus-visible:border-(--accent) focus-visible:text-(--accent)
            active:border-(--accent) active:text-(--accent)
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
                current === index ? "bg-(--accent)" : "bg-black/15 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
        <CarouselNext
          className="
            static left-0 top-0 translate-y-0
            border-transparent bg-(--accent) text-(--accent-foreground)
            transition-opacity duration-200
            hover:opacity-90 hover:bg-(--accent) hover:text-(--accent-foreground)
            focus-visible:opacity-90
            active:opacity-90
          "
        />
      </div>
    </Carousel>
  );
}