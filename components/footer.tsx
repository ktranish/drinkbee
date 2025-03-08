import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-yellow/20 bg-black pb-8 pt-16 text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About section */}
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="logo-animation">
                  <span className="text-4xl">🐝</span>
                </div>
                <span className="text-2xl font-bold text-yellow">Drinkbee</span>
              </Link>
            </div>
            <p className="mb-4 text-gray-400">
              Drinkbee erbjuder roliga och interaktiva spel för fester och
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
                  href="/spelregler"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Spelregler
                </Link>
              </li>
              <li>
                <Link
                  href="/blogg"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Blogg
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakta-oss"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow">Kategorier</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/alla-spel"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Alla spel
                </Link>
              </li>
              <li>
                <Link
                  href="/dricklekar-och-drickspel"
                  className="text-gray-400"
                >
                  Dricklekar & drickspel
                </Link>
              </li>
              <li>
                <Link href="/sallskapsspel" className="text-gray-400">
                  Sällskapspel
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-gray-400">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Games */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-yellow">
              Populära Spel
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Med andra ord
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  200 Frågor
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Jag har aldrig
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Pekleken
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Snurra flaskan
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition-colors hover:text-yellow"
                >
                  Sanning eller konka
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Drinkbee. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
