"use client";

import { Button } from "@/components/ui/button";
import { Flame, Grid, PartyPopper, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void;
  includeAll?: boolean;
  defaultCategory?: string;
}

export function LevelTabs({
  onCategoryChange,
  includeAll = false,
  defaultCategory = "popular",
}: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-12 flex animate-fade-in flex-wrap justify-center gap-2 md:gap-4">
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
        className={`category-button flex items-center ${activeCategory === "popular" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("popular")}
      >
        <Trophy className="mr-2 h-4 w-4" />
        <span>Popular</span>
      </Button>

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "party" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("party")}
      >
        <PartyPopper className="mr-2 h-4 w-4" />
        <span>Party</span>
      </Button>

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "fun" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("fun")}
      >
        <Sparkles className="mr-2 h-4 w-4" />
        <span>Fun</span>
      </Button>

      <Button
        variant="category"
        className={`category-button flex items-center ${activeCategory === "extreme" ? "bg-yellow text-black dark:bg-yellow dark:text-black" : ""}`}
        onClick={() => handleCategoryChange("extreme")}
      >
        <Flame className="mr-2 h-4 w-4" />
        <span>Extreme</span>
      </Button>
    </div>
  );
}
