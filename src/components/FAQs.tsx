import Image from "next/image";

import { Container } from "@/components/Container";

const faqs = [
  [
    {
      question: "DO I still need to add FAQ here?",
      answer:
        "Yes, many more faq's need to be added as we flesh out the product, but for now this will suffice.",
    },
    {
      question: "Can I pay for my subscription via money order?",
      answer: "Absolutely, we are happy to take your money in all forms.",
    },
    {
      question: "How do I apply for a job at HRMNY?",
      answer:
        "We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
    },
  ],
  [
    {
      question: "Should I place some Lorem Ipsum text here?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "HRMNY sounds horrible but why do I still feel compelled to purchase?",
      answer:
        "This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
    },
    {
      question: "I found other companies called HRMNY, are you sure you can use this name?",
      answer:
        "Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
    },
  ],
  [
    {
      question: "How do you generate reports?",
      answer:
        "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
    },
    {
      question: "Can we expect more inventory features?",
      answer: "In life it’s really better to never expect anything at all.",
    },
    {
      question: "I lost my password, how do I get into my account?",
      answer:
        "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative bg-slate-50 py-20 sm:py-32"
      style={{
        background:
          "linear-gradient(90deg, rgba(202,210,197,0.8547794117647058) 25%, rgba(53,79,82,0.2413340336134454) 81%)",
      }}
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team and if you’re lucky
            someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
