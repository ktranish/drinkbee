"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Game categories with their respective games
const gameCategories = [
  {
    name: "Popular",
    games: [
      { title: "Med andra ord", slug: "med-andra-ord", emoji: "🎯" },
      { title: "200 Frågor", slug: "200-fragor", emoji: "❓" },
      { title: "Jag har aldrig", slug: "jag-har-aldrig", emoji: "🙅‍♂️" },
      { title: "Pekleken", slug: "pekleken", emoji: "👉" },
    ],
  },
  {
    name: "Party",
    games: [
      { title: "Snurra flaskan", slug: "snurra-flaskan", emoji: "🍾" },
      {
        title: "Sanning eller Konka",
        slug: "sanning-eller-konka",
        emoji: "🎭",
      },
      { title: "Vem i rummet", slug: "vem-i-rummet", emoji: "👥" },
    ],
  },
  {
    name: "Fun",
    games: [
      { title: "Gissa låten", slug: "gissa-laten", emoji: "🎵" },
      { title: "Charades", slug: "charades", emoji: "🎬" },
      { title: "0-100 Frågor", slug: "0-100-fragor", emoji: "🧠" },
    ],
  },
  {
    name: "Extreme",
    games: [
      { title: "Utmaningar", slug: "utmaningar", emoji: "🔥" },
      { title: "Rygg mot rygg", slug: "rygg-mot-rygg", emoji: "🪑" },
    ],
  },
];

export function RulesSidebar() {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<string[]>(["Popular"]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          variant="game"
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "w-full flex-shrink-0 overflow-y-auto border-r border-border bg-background md:w-64 lg:w-72",
          "transition-all duration-300 ease-in-out",
          "fixed top-0 z-40 h-screen md:sticky md:top-[86px] md:h-[calc(100vh-86px)]",
          isMobileMenuOpen ? "left-0" : "-left-full md:left-0",
        )}
      >
        <div className="p-6 pt-20 md:pt-6">
          <h2 className="mb-6 text-xl font-bold">Spelregler</h2>

          <div className="space-y-2">
            {gameCategories.map((category) => (
              <div key={category.name} className="space-y-1">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="flex w-full items-center justify-between rounded-md p-2 text-left font-medium transition-colors hover:bg-yellow hover:text-accent-foreground"
                >
                  <span>{category.name}</span>
                  {openCategories.includes(category.name) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>

                {openCategories.includes(category.name) && (
                  <div className="ml-4 space-y-1">
                    {category.games.map((game) => (
                      <Link
                        key={game.slug}
                        href={`/rules/${game.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex w-full items-center gap-2 rounded-md p-2 text-sm",
                          pathname === `/rules/${game.slug}`
                            ? "bg-yellow font-medium text-black"
                            : "hover:bg-yellow hover:text-accent-foreground",
                        )}
                      >
                        <span>{game.emoji}</span>
                        <span>{game.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}
