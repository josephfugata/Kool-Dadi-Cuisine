import { Leaf, Truck, CircleDollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Always Fresh',
    description: 'Made daily with high-quality ingredients for the best taste.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your siomai fix delivered straight to your door, quick!',
  },
  {
    icon: CircleDollarSign,
    title: 'Value for Money',
    description: 'Generous servings at prices that won\'t break the bank.',
  },
];

export default function TrustBuilders() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-2">
              <div className="bg-primary text-primary-foreground rounded-full p-4 mb-4 transition-transform hover:scale-110">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-headline">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
