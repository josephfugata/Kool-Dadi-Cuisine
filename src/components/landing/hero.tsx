import Image from "next/image";
import MessengerButton from "./messenger-button";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A delicious box of siomai"
        fill
        className="object-cover -z-10 brightness-50"
        priority
        data-ai-hint="steamed dumplings"
      />
      <div className="container px-4 md:px-6 text-white">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-shadow-lg">
            Your Siomai Cravings, Delivered.
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl">
            Freshly steamed, irresistibly delicious, and crazy affordable. Get your siomai fix in just a few taps!
          </p>
          <div className="mt-6">
            <MessengerButton 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 transition-transform duration-300 hover:scale-110"
              message="Hi! I'm interested in ordering siomai."
            >
              Order via Messenger
            </MessengerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
