import { Trophy, Award, Star } from 'lucide-react';

export default function YourDailyWin() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-semibold">You Deserve It</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Celebrate Your Daily Wins.</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Finished a big project? Survived a Monday? That’s a win. Celebrate the small victories with a Solo Box. It’s the perfect, affordable reward to acknowledge your hard work and keep you going.
            </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 py-12">
            <div className="flex flex-col items-center gap-2">
                <Trophy className="w-10 h-10 text-secondary" />
                <p className="font-semibold">Nailed the Presentation</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Award className="w-10 h-10 text-secondary" />
                <p className="font-semibold">Finished Your Workout</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Star className="w-10 h-10 text-secondary" />
                <p className="font-semibold">Just Because It's Tuesday</p>
            </div>
        </div>
      </div>
    </section>
  );
}
