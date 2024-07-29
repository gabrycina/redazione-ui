import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Can I pick any websites as my sources?",
    answer: "Mostly yes! If a website is still not supported you will get an email from us, don't worry :)",
    value: "item-1",
  },
  {
    question: "How often will I receive it in my inbox?",
    answer: "Daily! But you can set it as you want",
    value: "item-2",
  },
  {
    question: "Could I lose a good article if I use Redact?",
    answer: "No. If your preferences are set correctly we'll filter out just the noise (non related articles)",
    value: "item-3",
  },
  {
    question: "Can I include paid websites?",
    answer: "Not all of them. If you are a company or a premium user, we'll work with you to make your websites compatible.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
