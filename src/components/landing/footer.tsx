import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Siomai Messenger Bridge. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#order" className="text-xs hover:underline underline-offset-4 text-foreground">
          Order Now
        </Link>
        <Link href="#promo" className="text-xs hover:underline underline-offset-4 text-foreground">
          Promos
        </Link>
      </nav>
    </footer>
  );
}
