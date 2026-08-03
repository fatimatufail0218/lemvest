"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-[#171717] px-5 sm:px-6",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center gap-4 py-5 text-left outline-none disabled:pointer-events-none disabled:opacity-50 sm:py-6",
          className
        )}
        {...props}
      >
        {/* Container 1 — plus/minus icon */}
        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#262626] text-white transition-colors duration-200 group-hover:bg-[#6CF5C2] group-hover:text-black">
          <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
          <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
        </div>

        {/* Container 2 — question text */}
        <div className="text-sm font-medium text-white sm:text-base">
          {children}
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn(
          "border-t border-white/10 pb-5 pl-12 pt-4 text-sm leading-relaxed text-zinc-400 sm:pb-6 sm:pl-12 sm:text-[15px]",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };