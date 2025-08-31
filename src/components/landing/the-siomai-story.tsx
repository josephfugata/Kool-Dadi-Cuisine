import Image from 'next/image';

export default function TheSiomaiStory() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Kwentong Kusina, Galing sa Puso.</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nagsimula lahat sa isang family recipe, na pinamana pa. Isang recipe na simple lang ang gusto: pagsamahin ang mga tao sa pamamagitan ng masarap na pagkaing gawa sa pagmamahal. 'Yun pa rin ang recipe namin ngayon. Bawat siomai, may kasamang puso. Kapag natikman mo, natikman mo ang tradisyon ng pamilya, sarap, at saya.
          </p>
        </div>
        <Image
          src="/kwentong-kusina.webp"
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
