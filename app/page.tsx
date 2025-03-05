"use client";
import { CategoryTabs } from "@/components/category-tabs";
import { GameCard } from "@/components/game-card";
import { Header } from "@/components/header";
import { SuggestionForm } from "@/components/suggestion-form";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [animationStep, setAnimationStep] = useState(0);
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Hero cards data
  const heroCards = [
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
  ];

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
        title: "Dryckesspel",
        emoji: "🍻",
        slug: "dryckesspel",
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
        color: "bg-green-50",
      },
      { title: "Quiz", emoji: "🧠", slug: "quiz", color: "bg-purple-50" },
    ],
    extreme: [
      {
        title: "Utmaningar",
        emoji: "🔥",
        slug: "utmaningar",
        color: "bg-red-50",
      },
      {
        title: "Hot Seat",
        emoji: "🪑",
        slug: "hot-seat",
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

  // Animation positions for the cards
  // Each array represents a different animation state
  const animationPositions = [
    // Position 1
    [
      {
        top: 20,
        right: 20,
        rotate: 6,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        blur: 0,
      },
      {
        top: 100,
        right: 60,
        rotate: -8,
        scale: 0.95,
        zIndex: 20,
        opacity: 0.9,
        blur: 1,
      },
      {
        top: 180,
        right: 30,
        rotate: 12,
        scale: 0.9,
        zIndex: 10,
        opacity: 0.8,
        blur: 2,
      },
    ],
    // Position 2
    [
      {
        top: 180,
        right: 30,
        rotate: 12,
        scale: 0.9,
        zIndex: 10,
        opacity: 0.8,
        blur: 2,
      },
      {
        top: 20,
        right: 20,
        rotate: 6,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        blur: 0,
      },
      {
        top: 100,
        right: 60,
        rotate: -8,
        scale: 0.95,
        zIndex: 20,
        opacity: 0.9,
        blur: 1,
      },
    ],
    // Position 3
    [
      {
        top: 100,
        right: 60,
        rotate: -8,
        scale: 0.95,
        zIndex: 20,
        opacity: 0.9,
        blur: 1,
      },
      {
        top: 180,
        right: 30,
        rotate: 12,
        scale: 0.9,
        zIndex: 10,
        opacity: 0.8,
        blur: 2,
      },
      {
        top: 20,
        right: 20,
        rotate: 6,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        blur: 0,
      },
    ],
  ];

  // Set up the animation interval
  useEffect(() => {
    // Start the animation cycle
    animationIntervalRef.current = setInterval(() => {
      setAnimationStep(
        (prevStep) => (prevStep + 1) % animationPositions.length,
      );
    }, 3000); // Change position every 3 seconds

    // Clean up on unmount
    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      {/* Hero Section with Self-Animating Cards */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            {/* Hero content */}
            <div className="space-y-6 text-center md:w-1/2 md:text-left">
              <h1 className="text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                Gör festen{" "}
                <span className="relative m-2 inline-block w-fit p-1 text-yellow dark:text-black">
                  <span className="relative z-10">roligare</span>
                  <span className="absolute -bottom-1 -left-2 -right-2 -top-1 -rotate-1 rounded-md bg-black dark:bg-yellow md:-bottom-0 md:-left-3 md:-right-3 md:-top-0" />
                </span>{" "}
                med DrinkBee
              </h1>
              <p className="max-w-lg text-lg text-gray-700 dark:text-gray-300 md:text-xl">
                Upptäck våra interaktiva spel som garanterar skratt och
                underhållning på din nästa fest
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href="/games">
                  <Button
                    variant="game"
                    className="px-8 py-6 text-lg font-bold uppercase"
                  >
                    Utforska Spel
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Self-animating game cards */}
            <div className="relative h-[400px] md:h-[500px] md:w-1/2">
              {heroCards.map((card, index) => {
                const position = animationPositions[animationStep][index];

                return (
                  <div
                    key={card.slug}
                    className="duration-2000 absolute w-64 transition-all ease-in-out md:w-72"
                    style={{
                      top: `${position.top}px`,
                      right: `${position.right}px`,
                      transform: `rotate(${position.rotate}deg) scale(${position.scale})`,
                      zIndex: position.zIndex,
                      filter: `blur(${position.blur}px)`,
                      opacity: position.opacity,
                      transitionDuration: "2s",
                    }}
                  >
                    <Link href={`/games/${card.slug}`}>
                      <GameCard
                        title={card.title}
                        emoji={card.emoji}
                        slug={card.slug}
                        color={card.color}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All games section with category filter */}
      <section
        id="all-games"
        className="container mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="mb-8 animate-fade-in text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Våra Spel
        </h2>

        <CategoryTabs
          onCategoryChange={setCategory}
          includeAll={true}
          defaultCategory="all"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        <div className="mt-12 flex justify-center">
          <Link href="/games">
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
