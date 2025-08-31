import { Moon } from 'lucide-react';
import MessengerButton from './messenger-button';

export default function LateNightCravings() {
  return (
    <section id="late-night" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
            <Moon className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Gutom sa Gabi? Gets Ka Namin.</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Yung 10 PM gutom hits different, 'no? Nandito kami para sa'yo. Isang message lang, solve na 'yang craving na 'yan at good vibes na ulit ang gabi mo.
            </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
            <MessengerButton
                message="Gutom na ako, Dadi! Help!"
                className="w-full"
                variant="default"
                size="lg"
            >
                Sagipin Ang Gabi Ko
            </MessengerButton>
        </div>
      </div>
    </section>
  );
}
