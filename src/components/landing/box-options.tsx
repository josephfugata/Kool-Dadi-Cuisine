import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import MessengerButton from './messenger-button';

const boxOptions = [
  {
    name: 'Solo Box',
    tagline: 'Perfect for one',
    price: '₱89',
    image: 'https://picsum.photos/400/300',
    hint: 'dumpling meal',
    orderMessage: "Hi! I'd like to order a Solo Box.",
  },
  {
    name: 'Barkada Box',
    tagline: 'Share with friends',
    price: '₱249',
    image: 'https://picsum.photos/400/300',
    hint: 'food platter',
    orderMessage: "Hi! I'd like to order a Barkada Box.",
  },
  {
    name: 'Party Box',
    tagline: 'For the whole crew',
    price: '₱499',
    image: 'https://picsum.photos/400/300',
    hint: 'party food',
    orderMessage: "Hi! I'd like to order a Party Box.",
  },
];

export default function BoxOptions() {
  return (
    <section id="order" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Choose Your Box</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We have the perfect size for any craving or occasion.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {boxOptions.map((box) => (
            <Card key={box.name} className="flex flex-col h-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <CardHeader className="p-0">
                <Image
                  src={box.image}
                  alt={box.name}
                  width={400}
                  height={300}
                  data-ai-hint={box.hint}
                  className="object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl font-headline text-primary">{box.name}</CardTitle>
                <p className="text-muted-foreground mt-2">{box.tagline}</p>
                <p className="text-3xl font-bold mt-4 text-secondary">{box.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <MessengerButton message={box.orderMessage} className="w-full" variant="default" size="lg">
                  Order via Messenger
                </MessengerButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
