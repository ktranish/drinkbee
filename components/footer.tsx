import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

// Game categories with their respective games
const gameCategories = [
  {
    name: "Popular",
    games: [
      { title: "Med andra ord", slug: "med-andra-ord" },
      { title: "200 Frågor", slug: "200-fragor" },
      { title: "Jag har aldrig", slug: "jag-har-aldrig" },
      { title: "Pekleken", slug: "pekleken" },
    ],
  },
  {
    name: "Party",
    games: [
      { title: "Dryckesspel", slug: "dryckesspel" },
      { title: "Sanning eller Konka", slug: "sanning-eller-konka" },
      { title: "Vem i rummet", slug: "vem-i-rummet" },
    ],
  },
  {
    name: "Fun",
    games: [
      { title: "Gissa låten", slug: "gissa-laten" },
      { title: "Charades", slug: "charades" },
      { title: "Quiz", slug: "quiz" },
    ],
  },
  {
    name: "Extreme",
    games: [
      { title: "Utmaningar", slug: "utmaningar" },
      { title: "Hot Seat", slug: "hot-seat" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-yellow/20 bg-black pb-8 pt-16 text-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About section */}
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="logo-animation">
                  <span className="text-4xl">🐝</span>
                </div>
                <span className="text-2xl font-bold text-yellow">DrinkBee</span>
              </Link>
            </div>
            <p className="mb-4 text-gray-400">
              DrinkBee erbjuder roliga och interaktiva spel för fester och
              sociala sammankomster.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-yellow"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-yellow"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-yellow"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow">Navigering</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Hem
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Alla Spel
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Spelregler
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow">Kategorier</h3>
            <ul className="space-y-2">
              {gameCategories.map((category) => (
                <li key={category.name}>
                  <span className="text-gray-400">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow">
              Populära Spel
            </h3>
            <ul className="space-y-2">
              {gameCategories
                .flatMap((category) => category.games)
                .slice(0, 6)
                .map((game) => (
                  <li key={game.slug}>
                    <Link
                      href={`/games/${game.slug}`}
                      className="text-gray-400 transition-colors hover:text-yellow"
                    >
                      {game.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} DrinkBee. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
