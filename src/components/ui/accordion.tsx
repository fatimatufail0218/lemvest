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
      className={cn("group", className)}
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
    <AccordionPrimitive.Header className="flex items-start gap-3 sm:gap-4">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start gap-3 text-left outline-none disabled:pointer-events-none disabled:opacity-50 sm:gap-4",
          className
        )}
        {...props}
      >
        {/* Icon box */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-[#171717] border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 transition-colors duration-200 group-hover:border-(--accent) group-hover:text-(--accent) group-data-[state=open]:border-(--accent) group-data-[state=open]:text-(--accent)">
          <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
          <Minus className="hidden h-4 w-4 group-data-[state=open]:block" />
        </div>

        {/* Question box */}
        <div className="flex-1 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-[#171717] px-4 py-4 text-[16px] font-medium text-black dark:text-white group-data-[state=open]:rounded-b-none sm:px-5 sm:py-5">
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
      className="ml-[3.5rem] overflow-hidden text-[14px] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:ml-[3.75rem]"
      {...props}
    >
      <div
        className={cn(
          "rounded-b-xl border border-t-0 border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-[#171717] px-4 pb-4 pt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:px-5 sm:pb-5 sm:text-[15px]",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };