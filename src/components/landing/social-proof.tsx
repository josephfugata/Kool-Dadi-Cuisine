import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Maria G.',
    review: 'Super sulit! Perfect for lunch sa office. Order ulit bukas!',
    image: 'https://picsum.photos/100/100',
    hint: 'happy woman',
  },
  {
    name: 'John D.',
    review: 'The best siomai in town, hands down. The chili garlic is a game-changer. Fast delivery too!',
    image: 'https://picsum.photos/100/100',
    hint: 'smiling man',
  },
  {
    name: 'Sarah L.',
    review: "My kids love the Barkada Box. It's our go-to for weekend movie nights. So convenient!",
    image: 'https://picsum.photos/100/100',
    hint: 'happy person',
  },
];

export default function SocialProof() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">What Our Customers Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what people are saying about our siomai.
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-0 gap-4">
                      <Image
                        className="rounded-full"
                        src={testimonial.image}
                        alt={`Photo of ${testimonial.name}`}
                        width={80}
                        height={80}
                        data-ai-hint={testimonial.hint}
                      />
                      <blockquote className="text-lg font-semibold leading-snug">
                        “{testimonial.review}”
                      </blockquote>
                      <p className="text-sm font-medium text-muted-foreground">— {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
