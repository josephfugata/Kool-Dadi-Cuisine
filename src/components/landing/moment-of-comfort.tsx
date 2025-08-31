import Image from 'next/image';
import MessengerButton from './messenger-button';

export default function MomentOfComfort() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Image
            src="https://picsum.photos/600/400"
            alt="Person enjoying a quiet moment with siomai"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full aspect-video"
            data-ai-hint="person eating"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Your Personal Bite of Comfort.</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Long day? Tough meeting? Sometimes, all you need is a moment for yourself. A warm, savory bite that feels like a hug. Our siomai is more than just food; it's your personal comfort break, ready whenever you need it.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <MessengerButton
                size="lg"
                message="I need a comfort food break!"
              >
                Treat Myself
              </MessengerButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
