"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryTabs } from "@/components/category-tabs";
import { GameCard } from "@/components/game-card";
import { Header } from "@/components/header";
import { useState } from "react";

export default function GamesPage() {
  const [category, setCategory] = useState("all");

  // All games data - same structure as in games page
  const allGames = {
    popular: [
      {
        title: "Med andra ord",
        emoji: "🎯",
        slug: "med-andra-ord",
        color: "bg-gray-50",
      },
      {
        title: "200 Frågor",
        emoji: "❓",
        slug: "200-fragor",
        color: "bg-blue-50",
      },
      {
        title: "Jag har aldrig",
        emoji: "🙅‍♂️",
        slug: "jag-har-aldrig",
        color: "bg-yellow-50",
      },
      {
        title: "Pekleken",
        emoji: "👉",
        slug: "pekleken",
        color: "bg-purple-50",
      },
    ],
    party: [
      {
        title: "Snurra flaskan",
        emoji: "🍾",
        slug: "snurra-flaskan",
        color: "bg-amber-50",
      },
      {
        title: "Sanning eller Konka",
        emoji: "🎭",
        slug: "sanning-eller-konka",
        color: "bg-blue-50",
      },
      {
        title: "Vem i rummet",
        emoji: "👥",
        slug: "vem-i-rummet",
        color: "bg-purple-50",
      },
    ],
    fun: [
      {
        title: "Gissa låten",
        emoji: "🎵",
        slug: "gissa-laten",
        color: "bg-blue-50",
      },
      {
        title: "Charades",
        emoji: "🎬",
        slug: "charades",
        color: "bg-amber-50",
      },
      {
        title: "0-100 Frågor",
        emoji: "🧠",
        slug: "0-100-fragor",
        color: "bg-purple-50",
      },
    ],
    extreme: [
      {
        title: "Utmaningar",
        emoji: "🔥",
        slug: "utmaningar",
        color: "bg-red-50",
      },
      {
        title: "Rygg mot rygg",
        emoji: "🪑",
        slug: "rygg-mot-rygg",
        color: "bg-orange-50",
      },
    ],
  };

  // Get games based on selected category
  const getGamesToDisplay = () => {
    if (category === "all") {
      return Object.values(allGames).flat();
    }
    return allGames[category as keyof typeof allGames] || [];
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[{ label: "Spel", href: "/games" }]}
          className="mb-8"
        />

        <h1 className="mb-12 animate-fade-in text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Våra Spel
        </h1>

        <CategoryTabs
          onCategoryChange={setCategory}
          includeAll={true}
          defaultCategory="all"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getGamesToDisplay().map((game) => (
            <GameCard
              key={game.slug}
              title={game.title}
              emoji={game.emoji}
              slug={game.slug}
              color={game.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
