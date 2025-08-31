import { Moon } from 'lucide-react';
import MessengerButton from './messenger-button';

export default function LateNightCravings() {
  return (
    <section id="late-night" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
            <Moon className="mx-auto h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Got Late-Night Cravings?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We get it. Those 10 PM hunger pangs are real. We're here for you. A quick message is all it takes to satisfy that craving and turn your night around.
            </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
            <MessengerButton
                message="It's late and I'm hungry! Help!"
                className="w-full"
                variant="default"
                size="lg"
            >
                Cure My Craving
            </MessengerButton>
        </div>
      </div>
    </section>
  );
}
