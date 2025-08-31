import { MessageSquare, Send, ThumbsUp } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "1. Chat with Us",
    description: "Click any 'Order via Messenger' button to start a conversation.",
  },
  {
    icon: Send,
    title: "2. Place Your Order",
    description: "Tell us what you're craving. It's as easy as texting a friend.",
  },
  {
    icon: ThumbsUp,
    title: "3. Enjoy Your Siomai",
    description: "We'll confirm your order and have it delivered to you, hot and fresh.",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Effortless Joy in 3 Simple Steps.</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe getting your favorite food should be simple and stress-free. 
                </p>
            </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 mt-12">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="bg-secondary text-secondary-foreground rounded-full p-4 mb-2">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
