import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import { ALL_GAMES } from "@/constants";
import Link from "next/link";

export default function RulesPage() {
  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: "Regler" }]} className="mb-8" />

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Spelregler</h1>
        <p className="text-muted-foreground text-lg">
          Välkommen till DrinkBee&apos;s spelregler! Här hittar du detaljerade
          instruktioner för alla våra spel.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-2xl font-bold">Hur använder jag reglerna?</h2>
        <p className="mb-4">
          Välj ett spel från listan nedan för att se detaljerade regler och
          instruktioner. Varje spel har:
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Grundläggande regler och mål</li>
          <li>Steg-för-steg instruktioner</li>
          <li>Tips för att göra spelet roligare</li>
          <li>Varianter och anpassningar</li>
        </ul>
        <p>
          Du kan anpassa reglerna efter din grupp och situation. Det viktigaste
          är att alla har kul!
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-6 text-2xl font-bold">Alla våra spel</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_GAMES.map((game) => (
            <Link
              key={game.slug}
              href={`/spelregler/${game.slug}`}
              className="block h-full rounded-md border p-4 transition-colors hover:bg-accent dark:hover:text-black"
            >
              <div className="flex h-full flex-col">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{game.emoji}</span>
                  <h3 className="text-lg font-medium">{game.title}</h3>
                </div>
                <p className="text-muted-foreground flex-grow text-sm">
                  {game.description}
                </p>
                <div className="mt-4 text-xs font-medium">Läs reglerna →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/alla-spel">
          <Button variant="game" className="font-bold uppercase">
            Börja spela
          </Button>
        </Link>
      </div>
    </div>
  );
}
