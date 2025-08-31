import { CircleDot } from "lucide-react";
import MessengerButton from "./messenger-button";

export default function Promo() {
  return (
    <section id="promo" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground font-semibold">Limited Time Offer</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Free Iced Tea!</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get a refreshing free Iced Tea with every order of our Solo Box. Don't miss out on this cool deal!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <MessengerButton
            message="Hi! I'd like to claim the Free Iced Tea promo with my Solo Box order."
            className="w-full"
            variant="secondary"
            size="lg"
          >
            <CircleDot className="mr-2 h-4 w-4" />
            Claim in Messenger
          </MessengerButton>
          <p className="text-xs text-muted-foreground">Promo valid until supplies last. Click to claim now!</p>
        </div>
      </div>
    </section>
  );
}
