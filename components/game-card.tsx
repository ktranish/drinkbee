import { Button } from "@/components/ui/button";
import Link from "next/link";

interface GameCardProps {
  title: string;
  emoji: string;
  slug: string;
  color: string;
}

export function GameCard({ title, emoji, slug, color }: GameCardProps) {
  return (
    <div
      className={`game-card overflow-hidden rounded-xl ${color} flex h-full flex-col items-center justify-between p-6 shadow-lg backdrop-blur-sm`}
      style={{ minHeight: "300px" }}
    >
      <h3 className="mb-4 text-center text-xl font-bold text-gray-800">
        {title}
      </h3>

      <div className="my-4 text-center">
        <span className={`text-8xl`} role="img" aria-label={title}>
          {emoji}
        </span>
      </div>

      <Link href={`/alla-spel/${slug}`} className="mt-4">
        <Button variant="play" className="font-bold uppercase">
          Spela
        </Button>
      </Link>
    </div>
  );
}
