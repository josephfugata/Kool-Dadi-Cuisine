import { Leaf, Truck, CircleDollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Laging Fresh',
    description: 'Araw-araw ginagawa with quality ingredients para sa pinakamasarap na lasa.',
  },
  {
    icon: Truck,
    title: 'Mabilis na Delivery',
    description: 'Ang siomai mo, darating agad sa pinto mo, mabilis pa sa ex mo!',
  },
  {
    icon: CircleDollarSign,
    title: 'Sulit sa Pera',
    description: 'Madaming serving sa presyong hindi masakit sa bulsa.',
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
