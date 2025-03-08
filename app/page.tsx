"use client";

import { CategoryTabs } from "@/components/category-tabs";
import { GameCard } from "@/components/game-card";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SuggestionForm } from "@/components/suggestion-form";
import { Button } from "@/components/ui/button";
import { ALL_GAMES, Category } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState<Category | "all">("all");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      {/* Hero Section with Self-Animating Cards */}
      <Hero />

      {/* All games section with category filter */}
      <section
        id="all-games"
        className="container mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Våra Spel
        </h2>

        <CategoryTabs
          onCategoryChange={setCategory}
          includeAll={true}
          defaultCategory="all"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ALL_GAMES.filter((item) =>
            category === "all" ? true : item.category === category,
          ).map((game) => (
            <GameCard
              key={game.slug}
              title={game.title}
              emoji={game.emoji}
              slug={game.slug}
              color={game.color}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/alla-spel">
            <Button variant="game" className="font-bold uppercase">
              Visa alla spel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Suggestion section */}
      <section className="w-full border-t border-gray-200 bg-white py-20 dark:border-gray-800 dark:bg-black">
        <div className="container mx-auto max-w-6xl px-4">
          <SuggestionForm />
        </div>
      </section>
    </main>
  );
}
