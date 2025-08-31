import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift } from 'lucide-react';

export default function ShareTheJoy() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Share mo ang Saya, Isang Box sa Isang Oras.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ang a+ moments, mas masarap kapag may kasama. I-surprise ang tropa, i-treat ang pamilya, o gawing legendary ang next get-together. Ang Barkada at Party boxes namin, perfect para sa kwentuhan, tawanan, at pag-gawa ng memories.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
             <Button size="lg" asChild>
                <Link href="#order">
                    <Gift className="mr-2 h-5 w-5" />
                    Tingnan ang Party Boxes
                </Link>
            </Button>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
                src="https://picsum.photos/600/400"
                alt="Friends sharing food"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint="friends eating"
            />
            <Image
                src="https://picsum.photos/600/400"
                alt="Family enjoying a meal"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint="family meal"
            />
        </div>
      </div>
    </section>
  );
}
