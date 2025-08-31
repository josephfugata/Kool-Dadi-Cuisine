import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <Link href="#" className="flex items-center justify-center">
        <span className="text-2xl font-headline text-primary">Siomai Messenger Bridge</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#order" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Menu
        </Link>
        <Link href="#reviews" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Reviews
        </Link>
        <Link href="#promo" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Promos
        </Link>
      </nav>
    </header>
  );
}
