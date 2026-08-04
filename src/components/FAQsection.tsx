import Button from "./Button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// FAQ data — edit questions/answers here, no JSX repeated below
const faqs = [
  {
    id: "item-1",
    question: "What if I'm starting from scratch?",
    answer:
      "That's exactly why Lemvest exists. Thanks to our Educational Portal — with over 12 hours of video content — you can progress step by step from beginner to advanced levels.",
  },
  {
    id: "item-2",
    question: "What are your investment ideas?",
    answer:
      "Every week our team shares detailed trading ideas across major asset classes, each with a clear risk-reward ratio so you know exactly what you're getting into before you commit any capital.",
  },
  {
    id: "item-3",
    question: "Can I use only Lemvest?",
    answer:
      "Yes. Lemvest is built as a complete ecosystem — analysis, education, live sessions and tools — so you can rely on it as your only source for building and managing your trading strategy.",
  },
  {
    id: "item-4",
    question: "Can you become an ambassador without being a Lemvest member?",
    answer:
      "No, the ambassador program is reserved for active Lemvest members. Once you join, you'll find all the details on how to apply inside your member dashboard.",
  },
  {
    id: "item-5",
    question: "How soon can I see results?",
    answer:
      "It depends on your starting point and how consistently you apply what you learn, but most members start noticing real progress in their decision-making within the first few weeks.",
  },
  {
    id: "item-6",
    question: "What do I need to get started?",
    answer:
      "Just a device with internet access and the willingness to learn. We guide you through account setup, tools and the educational path once you join.",
  },
  {
    id: "item-7",
    question: "I don't have time to learn. What should I do?",
    answer:
      "Our content is designed in short, focused modules so you can learn at your own pace — even 15–20 minutes a day is enough to build steady progress over time.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#090909] pb-16">
      <div className="mx-auto w-full max-w-[640px] px-4 sm:px-6">
        <h2 className="text-center font-medium leading-none text-white/70 text-[36px] lg:text-[60px]">
          Frequently asked {" "} <br /><span className="text-white">questions</span> 
        </h2>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="mt-10 flex flex-col gap-3 sm:gap-4 lg:mt-14"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Glass-morphism CTA card — blurred background, mint-green corner glows */}
        <div className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10 lg:mt-14">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#6CF5C2]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#6CF5C2]/40 blur-3xl" />

          <div className="relative flex flex-col items-start gap-4 text-left sm:gap-5">
            <h5 className="text-2xl font-medium text-white/80">
              Can&apos;t find the answer to your question?
              <br />
              Our team is here to help.
            </h5>
            <Button>Join Lemvest</Button>
          </div>
        </div>
      </div>
    </section>
  );
}