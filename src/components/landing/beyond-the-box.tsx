import Image from 'next/image';

export default function BeyondTheBox() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A vibrant office party with people enjoying food"
        fill
        className="object-cover -z-10 brightness-[.3]"
        data-ai-hint="office party"
      />
      <div className="container px-4 md:px-6 text-white text-center">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-shadow-lg">
            More Than Just a Meal. It's a Mood.
          </h2>
          <p className="max-w-[800px] text-lg md:text-xl">
            Office lunch hero? Check. Movie night snack? Done. Spontaneous picnic showstopper? Absolutely. Our siomai isn't just for cravings—it's for creating experiences. It's the easy, delicious way to elevate any moment, big or small.
          </p>
        </div>
      </div>
    </section>
  );
}
