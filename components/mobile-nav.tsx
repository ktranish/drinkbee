"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={toggleMenu}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-black",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex justify-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="flex flex-col space-y-6">
            <Link href={"/rules"} onClick={toggleMenu}>
              <Button
                variant={"ghost"}
                className="w-full justify-start text-lg font-bold uppercase"
              >
                Regler
              </Button>
            </Link>
            <Link href={"/blog"} onClick={toggleMenu}>
              <Button
                variant={"ghost"}
                className="w-full justify-start text-lg font-bold uppercase"
              >
                Blog
              </Button>
            </Link>
            <Link href={"/games"} onClick={toggleMenu}>
              <Button
                variant={"ghost"}
                className="w-full justify-start text-lg font-bold uppercase"
              >
                Våra spel
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
