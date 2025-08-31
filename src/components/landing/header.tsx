"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <Link href="#" className="flex items-center justify-center gap-2" onClick={closeSheet}>
        <Image src="/logo-small.png" alt="Kool Dadi Cuisine Logo" width={40} height={40} className="h-10 w-10" />
        <span className="text-2xl font-headline text-primary">Kool Dadi Cuisine</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
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

      {/* Mobile Navigation */}
      <div className="ml-auto md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold" onClick={closeSheet}>
                  <Image src="/logo-small.png" alt="Kool Dadi Cuisine Logo" width={32} height={32} className="h-8 w-8" />
                  <span className="text-2xl font-headline text-primary">Kool Dadi Cuisine</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="grid gap-6 text-lg font-medium mt-10">
              <SheetClose asChild>
                <Link href="#order" className="hover:text-foreground/80 text-foreground" onClick={closeSheet}>
                  Menu
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#reviews" className="hover:text-foreground/80 text-foreground" onClick={closeSheet}>
                  Reviews
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#promo" className="hover:text-foreground/80 text-foreground" onClick={closeSheet}>
                  Promos
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
