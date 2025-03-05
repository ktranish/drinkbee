"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryTabs } from "@/components/category-tabs";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// Mock questions data
const questionsData = {
  popular: [
    "Vad är din största osäkerhet?",
    "Vad är din bästa egenskap?",
    "Om du kunde resa vart som helst, vart skulle du åka?",
    "Vad är din största rädsla?",
    "Vad är ditt bästa minne?",
  ],
  party: [
    "Vem i rummet skulle du vilja byta liv med för en dag?",
    "Berätta om ditt mest pinsamma ögonblick",
    "Vem i rummet skulle klara sig bäst i en zombieapokalyps?",
    "Vem i rummet skulle du ringa om du hamnade i fängelse?",
    "Vem i rummet skulle du vilja vara fast i en hiss med?",
  ],
  fun: [
    "Vilken superkraft skulle du vilja ha?",
    "Om du var ett djur, vilket skulle du vara?",
    "Vilken är din favoritfilm?",
    "Vad skulle du göra om du vann en miljon kronor?",
    "Vilken är din favoritmat?",
  ],
  extreme: [
    "Vad är det galnaste du någonsin gjort?",
    "Berätta om ditt värsta dejt",
    "Vad är din största hemlighet?",
    "Vad är det mest olagliga du gjort?",
    "Vad är det mest extrema du skulle göra för pengar?",
  ],
};

export default function GamePage({ params }: { params: { slug: string } }) {
  const [category, setCategory] = useState("popular");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setQuestions(questionsData[category as keyof typeof questionsData]);
    setCurrentQuestion(0);
  }, [category]);

  const handleNextQuestion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      setIsAnimating(false);
    }, 300);
  };

  const gameTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto flex max-w-6xl flex-grow flex-col items-center px-4 py-12">
        <Breadcrumb
          items={[{ label: "Spel", href: "/games" }, { label: gameTitle }]}
          className="mb-8 self-start"
        />

        <h1 className="mb-8 animate-fade-in text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          {gameTitle}
        </h1>

        <div className="mb-8 flex justify-center">
          <Link href={`/rules/${params.slug}`}>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Visa spelregler</span>
            </Button>
          </Link>
        </div>

        <div className="emoji-pulse mb-8 text-6xl">
          {params.slug === "med-andra-ord"
            ? "🎯"
            : params.slug === "200-fragor"
              ? "❓"
              : params.slug === "jag-har-aldrig"
                ? "🙅‍♂️"
                : params.slug === "pekleken"
                  ? "👉"
                  : params.slug === "dryckesspel"
                    ? "🍻"
                    : params.slug === "sanning-eller-konka"
                      ? "🎭"
                      : params.slug === "vem-i-rummet"
                        ? "👥"
                        : params.slug === "gissa-laten"
                          ? "🎵"
                          : params.slug === "charades"
                            ? "🎬"
                            : params.slug === "quiz"
                              ? "🧠"
                              : params.slug === "utmaningar"
                                ? "🔥"
                                : params.slug === "hot-seat"
                                  ? "🪑"
                                  : "🎮"}
        </div>

        <CategoryTabs onCategoryChange={setCategory} />

        <div
          className={`mb-16 mt-12 text-center transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-2xl font-medium text-black dark:text-white md:text-3xl">
            {questions[currentQuestion]}
          </h2>
        </div>

        <Button
          onClick={handleNextQuestion}
          className="next-button flex items-center bg-yellow px-8 py-6 text-lg font-bold text-black hover:bg-white"
        >
          Nästa
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </main>
  );
}
