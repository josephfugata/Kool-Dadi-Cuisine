import Image from 'next/image';

export default function TheSiomaiStory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">From Our Kitchen to Your Heart.</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            It all started with a family recipe, passed down through generations. A recipe built on the simple idea that good food, made with love, can bring people together. We still use that recipe today, putting a piece of our heart into every single siomai we steam. When you taste it, you're tasting a tradition of family, flavor, and happiness.
          </p>
        </div>
        <Image
          src="https://picsum.photos/600/600"
          alt="Vintage photo of a family cooking"
          width={600}
          height={600}
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          data-ai-hint="family recipe"
        />
      </div>
    </section>
  );
}
