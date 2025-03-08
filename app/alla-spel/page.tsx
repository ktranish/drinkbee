"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryTabs } from "@/components/category-tabs";
import { GameCard } from "@/components/game-card";
import { Header } from "@/components/header";
import { ALL_GAMES } from "@/constants";
import { useRouter } from "next/navigation";

export default function GamesPage() {
  const { push } = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb
          items={[{ label: "Spel", href: "/alla-spel" }]}
          className="mb-8"
        />

        <h1 className="mb-12 text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Våra Spel
        </h1>

        <CategoryTabs
          onCategoryChange={(category) =>
            push(category === "all" ? "/alla-spel" : category)
          }
          includeAll={true}
          defaultCategory="all"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALL_GAMES.map((game) => (
            <GameCard
              key={game.slug}
              title={game.title}
              emoji={game.emoji}
              url={game.url}
              color={game.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
