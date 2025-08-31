import Image from "next/image";
import MessengerButton from "./messenger-button";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center">
      {/* Desktop Image */}
      <Image
        src="/Hero-Main-Image.webp"
        alt="A delicious box of siomai"
        fill
        className="object-cover -z-10 brightness-50 hidden md:block"
        priority
        data-ai-hint="steamed dumplings"
      />
      {/* Mobile Image */}
      <Image
        src="/Hero-Main-Image-Mobile.webp"
        alt="A delicious box of siomai"
        fill
        className="object-cover -z-10 brightness-50 md:hidden"
        priority
        data-ai-hint="steamed dumplings"
      />
      <div className="container px-4 md:px-6 text-white">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-shadow-lg">
            Gutom? Siomai ang Sagot.
          </h1>
          <p className="max-w-[700px] text-lg md:text-xl">
            Sariwa, legit na masarap, at abot-kaya. Isang chat lang, solve na ang cravings!
          </p>
          <div className="mt-6">
            <MessengerButton 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 transition-transform duration-300 hover:scale-110"
              message="Boss, pa-order ng siomai! Nagugutom na ako."
            >
              Order sa Messenger
            </MessengerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
