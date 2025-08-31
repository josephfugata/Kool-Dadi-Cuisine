import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "How do I order?",
        answer: "Just click any 'Order via Messenger' button on our page! It's like chatting with a friend. Tell us what you want and where you are, and we'll handle the rest."
    },
    {
        question: "What are your delivery hours?",
        answer: "We deliver from 10 AM to 10 PM every day, because cravings don't keep a 9-to-5 schedule."
    },
    {
        question: "Is there a minimum order?",
        answer: "No minimum order! Whether you're treating yourself to a Solo Box or feeding a village with a Party Box, we're happy to serve you."
    },
    {
        question: "How long does delivery take?",
        answer: "We're fast! We aim to get your fresh, hot siomai to your doorstep as quickly as possible, typically within 30-45 minutes depending on your location."
    }
]

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Still Curious?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've got answers to your questions.
            </p>
        </div>
        <div className="mx-auto max-w-3xl w-full mt-12">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
