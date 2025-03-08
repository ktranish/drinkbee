"use client";

import { ANIMATION_POSITIONS, HERO_CARDS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GameCard } from "./game-card";
import { Button } from "./ui/button";

export function Hero() {
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const [animationStep, setAnimationStep] = useState(0);

  // Set up the animation interval
  useEffect(() => {
    // Start the animation cycle
    animationIntervalRef.current = setInterval(() => {
      setAnimationStep(
        (prevStep) => (prevStep + 1) % ANIMATION_POSITIONS.length,
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
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Hero content */}
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
              Gör festen{" "}
              <span className="relative m-2 inline-block w-fit p-1 text-yellow dark:text-black">
                <span className="relative z-10">roligare</span>
                <span className="absolute -bottom-1 -left-2 -right-2 -top-1 -rotate-1 rounded-md bg-black dark:bg-yellow md:-bottom-0 md:-left-3 md:-right-3 md:-top-0" />
              </span>{" "}
              med Drinkbee
            </h1>
            <p className="max-w-lg text-lg text-gray-700 dark:text-gray-300 md:text-xl">
              Upptäck våra interaktiva spel som garanterar skratt och
              underhållning på din nästa fest
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/alla-spel">
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
          <div className="relative h-[400px] w-full md:h-[500px] md:w-1/2">
            <div className="relative mx-auto max-w-xs md:mx-0 md:max-w-none">
              {HERO_CARDS.map((card, index) => {
                const position = ANIMATION_POSITIONS[animationStep][index];

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
                    <Link href={card.url}>
                      <GameCard
                        title={card.title}
                        emoji={card.emoji}
                        url={card.url}
                        color={card.color}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
