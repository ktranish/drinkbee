import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-6 shadow-sm dark:border-gray-800 dark:bg-black">
      <Logo />
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="hidden space-x-4 md:flex">
          <Link href="/rules">
            <Button variant="outline" className="font-bold uppercase">
              Regler
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" className="font-bold uppercase">
              Blog
            </Button>
          </Link>
          <Link href="/games">
            <Button variant="game" className="font-bold uppercase">
              Våra Spel
            </Button>
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
