import MessengerButton from './messenger-button';
import MessengerLogo from '../icons/messenger-logo';

export default function JoinTheCommunity() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <MessengerLogo className="h-16 w-16 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Become Part of the Siomai Fam.</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            You're not just a customer, you're part of our community. Click to chat, order, or just say hi. We love hearing from you. Let's make your day a little more delicious.
          </p>
          <div className="mt-6">
            <MessengerButton 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              message="Hi! Just wanted to join the community!"
            >
              Chat With Us
            </MessengerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
