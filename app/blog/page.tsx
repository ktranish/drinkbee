"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { blogArticles, getAllCategories } from "@/lib/blog-data";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", ...getAllCategories()];

  const filteredArticles =
    activeCategory === "all"
      ? blogArticles
      : blogArticles.filter((article) => article.category === activeCategory);

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Estimate read time (1 min per 200 words)
  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return readTime;
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-white dark:bg-black">
      <Header />

      <section className="container mx-auto max-w-6xl px-4 py-12">
        <Breadcrumb items={[{ label: "Blog" }]} className="mb-8" />

        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-black dark:text-white md:text-5xl">
            Drinkbee Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Tips, tricks och inspiration för att göra dina spelkvällar ännu
            roligare
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="category"
              className={cn(
                "category-button flex items-center capitalize",
                activeCategory === category
                  ? "bg-yellow text-black dark:bg-yellow dark:text-black"
                  : "",
              )}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category === "all" ? "Alla" : category}</span>
            </Button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.coverImage || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold capitalize text-black">
                    {article.category}
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{getReadTime(article.content)} min läsning</span>
                  </div>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <h2 className="mb-3 text-xl font-bold text-black transition-colors hover:text-yellow dark:text-white dark:hover:text-yellow">
                    {article.title}
                  </h2>
                </Link>

                <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center font-medium text-yellow hover:underline"
                >
                  Läs mer
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
