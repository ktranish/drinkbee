import { Breadcrumb } from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
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

      <div className="grid gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Hur använder jag reglerna?
          </h2>
          <p className="mb-4">
            Välj ett spel från menyn till vänster för att se detaljerade regler
            och instruktioner. Varje spel har:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6">
            <li>Grundläggande regler och mål</li>
            <li>Steg-för-steg instruktioner</li>
            <li>Tips för att göra spelet roligare</li>
            <li>Varianter och anpassningar</li>
          </ul>
          <p>
            Du kan anpassa reglerna efter din grupp och situation. Det
            viktigaste är att alla har kul!
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-bold">Populära spel</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/rules/med-andra-ord"
              className="block rounded-md border p-4 transition-colors hover:bg-accent dark:hover:text-black"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h3 className="font-medium">Med andra ord</h3>
                  <p className="text-muted-foreground text-sm">
                    Förklara ord utan att använda förbjudna termer
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/rules/jag-har-aldrig"
              className="block rounded-md border p-4 transition-colors hover:bg-accent dark:hover:text-black"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🙅‍♂️</span>
                <div>
                  <h3 className="font-medium">Jag har aldrig</h3>
                  <p className="text-muted-foreground text-sm">
                    Avslöja hemligheter och drick om du har gjort det
                  </p>
                </div>
              </div>
            </Link>
          </div>
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
