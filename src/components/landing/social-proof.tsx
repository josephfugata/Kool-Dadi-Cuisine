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
    review: 'Super sulit! Perfect for lunch sa office. Order ulit ako bukas!',
    initials: 'MG',
    hint: 'happy woman',
  },
  {
    name: 'John D.',
    review: 'The best siomai in town, hands down. Yung chili garlic, game-changer. Ang bilis pa ng delivery!',
    initials: 'JD',
    hint: 'smiling man',
  },
  {
    name: 'Sarah L.',
    review: "Love ng kids ko yung Barkada Box. Go-to namin for weekend movie nights. Napaka-convenient!",
    initials: 'SL',
    hint: 'happy person',
  },
];

const AvatarCircle = ({ initials }: { initials: string }) => (
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted text-muted-foreground" data-ai-hint="initials avatar">
        <span className="text-3xl font-semibold">{initials}</span>
    </div>
);


export default function SocialProof() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Sabi ng mga Suki Namin</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              'Wag maniwala sa'min, maniwala ka sa kanila. Ito ang chika nila sa siomai namin.
            </p>
          </div>
        </div>

        {/* Mobile View: Stacked testimonials */}
        <div className="mt-12 grid gap-6 md:hidden">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 text-center shadow-lg">
              <CardContent className="flex flex-col items-center justify-center p-0 gap-4">
                <AvatarCircle initials={testimonial.initials} />
                <blockquote className="text-lg font-semibold leading-snug">
                  “{testimonial.review}”
                </blockquote>
                <p className="text-sm font-medium text-muted-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop View: Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12 hidden md:block"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col items-center justify-center p-6 text-center shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-0 gap-4">
                      <AvatarCircle initials={testimonial.initials} />
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
