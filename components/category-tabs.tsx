"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/constants";
import { Flame, Grid, PartyPopper, Sparkles } from "lucide-react";
import { useState } from "react";

interface CategoryTabsProps {
  onCategoryChange: (category: Category | "all") => void;
  includeAll?: boolean;
  defaultCategory?: Category | "all";
}

export function CategoryTabs({
  onCategoryChange,
  includeAll = false,
  defaultCategory = "all",
}: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    defaultCategory,
  );

  const handleCategoryChange = (category: Category | "all") => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
      {includeAll && (
        <Button
          variant="category"
          className={`category-button flex items-center ${activeCategory === "all" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
          onClick={() => handleCategoryChange("all")}
        >
          <Grid className="mr-2 h-4 w-4" />
          <span>Alla</span>
        </Button>
      )}

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "dricklekar-och-drickspel" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("dricklekar-och-drickspel")}
      >
        <PartyPopper className="mr-2 h-4 w-4" />
        <span>Drickspel & Dricklekar</span>
      </Button>

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "sallskapsspel" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("sallskapsspel")}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        <span>Sällskapsspel</span>
      </Button>

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "quiz" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("quiz")}
      >
        <Flame className="mr-2 h-4 w-4" />
        <span>Quiz</span>
      </Button>
    </div>
  );
}
