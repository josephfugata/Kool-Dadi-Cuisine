import MessengerButton from './messenger-button';
import MessengerLogo from '../icons/messenger-logo';

export default function JoinTheCommunity() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <MessengerLogo className="h-16 w-16 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Join sa Kool Dadi Fam!</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Hindi ka lang customer, tropa ka namin. Chat ka lang para umorder, o kahit mangumusta. Gusto namin 'yon. Tara, gawin nating mas masarap ang araw mo.
          </p>
          <div className="mt-6">
            <MessengerButton 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              message="Hi, Dadi! Pa-join sa community!"
            >
              Chat Na!
            </MessengerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
