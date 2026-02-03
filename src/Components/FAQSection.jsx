import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faqs = [
  {
    q: "What is the conversion % of MetaForm?",
    a: "At the moment, I'm pretty happy where I am. Currently I am not looking for any full-time opportunities. But I am always open to collaborations and interesting projects.",
  },
  {
    q: "How do your quote pricing works and when can we get on call?",
    a: "We provide custom pricing based on your needs. You can schedule a call anytime through our contact form.",
  },
  {
    q: "Can you facelift my design?",
    a: "Yes, we provide complete redesign and UI/UX improvements for modern web products.",
  },
  {
    q: "Can you facelift my design?",
    a: "Yes, we provide complete redesign and UI/UX improvements for modern web products.",
  },
];

function FAQSection() {
  return (
    <section className="w-full bg-black py-28">

      <div className="max-w-3xl mx-auto px-6 text-center mb-14">

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          A community for India’s investors hang out and talk about
          investments, personal finance
        </p>

      </div>

      <div className="max-w-3xl mx-auto px-6">

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >

          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="
              border border-white/10
              rounded-xl
              overflow-hidden

              bg-white/5
              backdrop-blur-md
              "
            >

              <AccordionTrigger
                className="
                px-6 py-4
                text-left
                text-white
                font-medium

                hover:no-underline
                "
              >
                {item.q}
              </AccordionTrigger>

              <AccordionContent
                className="
                px-6 pb-5
                text-gray-300
                text-sm
                leading-relaxed
                "
              >
                {item.a}
              </AccordionContent>

            </AccordionItem>
          ))}

        </Accordion>

      </div>

    </section>
  );
}

export default FAQSection;
