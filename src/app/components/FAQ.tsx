"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "./ui/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
}

function FAQItem({ question, answer, isOpen }: FAQItemProps) {
  return (
    <AccordionItem
      value={question}
      className="bg-[#141414] rounded-lg border border-[#CFA670]/20 mb-4 overflow-hidden"
    >
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between px-5 py-4 hover:bg-[#111111] transition-colors text-left data-[state=open]:bg-[#111111] data-[state=open]:text-[#CFA670] text-[#F8FAFC] hover:text-[#CFA670] font-medium outline-none">
          <span className="flex-1 text-left">{question}</span>
          {isOpen ? (
            <Minus className="h-5 w-5 shrink-0 text-[#CFA670] transition-transform duration-200" />
          ) : (
            <Plus className="h-5 w-5 shrink-0 text-[#CFA670] transition-transform duration-200" />
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionContent className="px-5 pb-4 text-[#F8FAFC]/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
        <div className="pt-0">{answer}</div>
      </AccordionContent>
    </AccordionItem>
  );
}

interface FAQSectionProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl mb-12 text-center text-[#CFA670]"
            style={{ fontFamily: "Barlow Condensed, sans-serif" }}
          >
            Sıkça Sorulan Sorular
          </h2>
          <Accordion
            value={openItem}
            onValueChange={setOpenItem}
            type="single"
            collapsible
            className="space-y-0"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === faq.question}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
