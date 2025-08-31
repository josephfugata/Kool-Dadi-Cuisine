import { CircleDot } from "lucide-react";
import MessengerButton from "./messenger-button";

export default function Promo() {
  return (
    <section id="promo" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground font-semibold">Limited Time Offer</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">Libreng Coke!</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            May libreng Coke sa bawat order ng kahit anong Box. 'Wag palampasin 'tong cool na deal!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <MessengerButton
            message="Hi Dadi! G ako sa Free Coke promo niyo with my order."
            className="w-full"
            variant="secondary"
            size="lg"
          >
            <CircleDot className="mr-2 h-4 w-4" />
            Claim sa Messenger
          </MessengerButton>
          <p className="text-xs text-muted-foreground">Promo valid hanggang may supplies pa. Click mo na para ma-claim!</p>
        </div>
      </div>
    </section>
  );
}
