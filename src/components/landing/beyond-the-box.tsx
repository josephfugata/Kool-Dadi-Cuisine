import Image from 'next/image';

export default function BeyondTheBox() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      <Image
        src="/midnight-snack.webp"
        alt="A vibrant office party with people enjoying food"
        fill
        className="object-cover -z-10 brightness-[.3]"
        data-ai-hint="office party"
      />
      <div className="container px-4 md:px-6 text-white text-center">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-shadow-lg">
            Di Lang Basta Pagkain. Mood 'To.
          </h2>
          <p className="max-w-[800px] text-lg md:text-xl">
            Office lunch hero? Check. Movie night snack? G. Biglaang picnic? Pwedeng-pwede. Ang siomai namin, hindi lang pang-cravings—pang-bonding 'to. Simple, masarap, at siguradong magpapasaya ng kahit anong okasyon.
          </p>
        </div>
      </div>
    </section>
  );
}
