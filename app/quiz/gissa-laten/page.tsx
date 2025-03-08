"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import { LevelTabs } from "@/components/level-tab";
import { Button } from "@/components/ui/button";
import { QUESTIONS_DATA } from "@/constants";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GamePage() {
  const [category, setCategory] = useState("popular");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setQuestions(QUESTIONS_DATA[category as keyof typeof QUESTIONS_DATA]);
    setCurrentQuestion(0);
  }, [category]);

  const handleNextQuestion = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuestion((prev) => (prev + 1) % questions.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto flex max-w-6xl flex-grow flex-col items-center px-6 pb-12 pt-6">
        <Breadcrumb
          items={[{ label: "Quiz", href: "/quiz" }, { label: "Gissa låten" }]}
          className="mb-8 self-start"
        />

        <h1 className="mb-8 animate-fade-in text-center text-3xl font-bold text-black dark:text-white md:text-4xl">
          Gissa låten
        </h1>

        <div className="mb-8 flex justify-center">
          <Link href={`/spelregler/gissa-laten`}>
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Visa spelregler</span>
            </Button>
          </Link>
        </div>

        <div className="emoji-pulse mb-8 text-6xl">🎵</div>

        <LevelTabs onCategoryChange={setCategory} />

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
          className="next-button flex items-center bg-yellow px-8 py-6 text-lg font-bold text-black"
        >
          Nästa
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>
    </main>
  );
}
