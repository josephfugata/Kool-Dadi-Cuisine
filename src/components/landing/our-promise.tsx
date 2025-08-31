import { Heart, Smile, Zap } from 'lucide-react';

const promises = [
  {
    icon: Heart,
    title: 'Gawang may Puso',
    description: 'Bawat siomai, gawa with care, na parang para sa sarili naming pamilya.',
  },
  {
    icon: Smile,
    title: 'Para sa Ngiti Mo',
    description: "Hindi kami masaya hangga't hindi ka masaya. Goal namin na mapasaya ka sa bawat order.",
  },
  {
    icon: Zap,
    title: 'Walang Hassle',
    description: "Mula pag-order hanggang delivery, ginagawa naming simple at convenient para sa'yo.",
  },
];

export default function OurPromise() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Ang Promise Namin Sa'yo</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Simple lang. Committed kami na maghatid hindi lang ng siomai, kundi ng a good time experience.
            </p>
        </div>
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-3">
          {promises.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
                <promise.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">{promise.title}</h3>
              <p className="text-sm text-muted-foreground">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
