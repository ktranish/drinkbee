import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Game data with basic info for the overview page
const gamesOverview = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    description:
      "Ett ordförklaringsspel där du ska få ditt lag att gissa ett ord utan att använda förbjudna termer.",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    description:
      "Ett frågespel som hjälper er att lära känna varandra bättre genom personliga och utmanande frågor.",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    description:
      "Ett avslöjande spel där spelare berättar om saker de aldrig har gjort, och de som har gjort det måste dricka.",
  },
  {
    title: "Pekleken",
    emoji: "👉",
    slug: "pekleken",
    description:
      "Ett enkelt men roligt spel där spelarna pekar på varandra baserat på olika påståenden.",
  },
  {
    title: "Snurra Flaskan",
    emoji: "🍾",
    slug: "snurra-flaskan",
    description:
      "Ett klassiskt partyspel där spelarna snurrar en flaska och får utmaningar eller sanningar att besvara.",
  },
  {
    title: "Sanning eller Konka",
    emoji: "🎭",
    slug: "sanning-eller-konka",
    description:
      "Välj mellan att svara ärligt på en fråga eller utföra en utmaning.",
  },
  {
    title: "Vem i rummet",
    emoji: "👥",
    slug: "vem-i-rummet",
    description:
      "Svara på frågor om vilken person i rummet som mest sannolikt skulle göra olika saker.",
  },
  {
    title: "Gissa låten",
    emoji: "🎵",
    slug: "gissa-laten",
    description:
      "Testa dina musikkunskaper genom att gissa låtar baserat på korta ljudklipp.",
  },
  {
    title: "Charades",
    emoji: "🎬",
    slug: "charades",
    description: "Förklara ord eller fraser genom att agera utan att prata.",
  },
  {
    title: "0-100 Frågor",
    emoji: "🧠",
    slug: "0-100-fragor",
    description:
      "Ett roligt gissningsspel där spelarna ska uppskatta svaren på frågor med siffror mellan 0 och 100.",
  },
  {
    title: "Utmaningar",
    emoji: "🔥",
    slug: "utmaningar",
    description: "Våga utföra roliga och utmanande uppgifter för att få poäng.",
  },
  {
    title: "Rygg mot rygg",
    emoji: "🪑",
    slug: "rygg-mot-rygg",
    description:
      "Ett roligt och avslöjande spel där två spelare sitter rygg mot rygg och svarar på frågor.",
  },
];

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
          {gamesOverview.map((game) => (
            <Link
              key={game.slug}
              href={`/rules/${game.slug}`}
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
        <Link href="/games">
          <Button variant="game" className="font-bold uppercase">
            Börja spela
          </Button>
        </Link>
      </div>
    </div>
  );
}
