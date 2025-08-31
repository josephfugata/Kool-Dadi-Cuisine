import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Paano umorder?",
        answer: "Click mo lang 'yung 'Order via Messenger' button! Parang kachat mo lang tropa mo. Sabi mo lang kung ano'ng gusto mo at saan, kami na bahala."
    },
    {
        question: "Anong oras ang delivery?",
        answer: "Bukas kami 10 AM to 10 PM araw-araw. Kasi 'di ba, ang gutom, walang pinipiling oras."
    },
    {
        question: "May minimum order ba?",
        answer: "Walang minimum order! Kahit Solo Box lang para sa'yo o Party Box para sa buong barangay, G kami!"
    },
    {
        question: "Gaano kabilis ang delivery?",
        answer: "Mabilis pa sa alas-kwatro! Mga 30-45 minutes lang, depende sa location mo, darating na 'yang mainit at sariwang siomai mo."
    }
]

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">May Tanong Ka Pa?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sagot namin 'yan.
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
