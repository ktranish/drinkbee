import { Breadcrumb } from "@/components/breadcrumb";
import { TableOfContents } from "@/components/table-of-contents";
import { Button } from "@/components/ui/button";
import { GAME_RULES } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths for all games
export function generateStaticParams() {
  return Object.keys(GAME_RULES).map((slug) => ({ slug }));
}

export default function GameRulesPage({
  params,
}: {
  params: { slug: string };
}) {
  const game = GAME_RULES[params.slug as keyof typeof GAME_RULES];

  if (!game) {
    notFound();
  }

  // Define sections for the table of contents
  const sections = [
    { id: "overview", title: "Översikt" },
    ...(game.materials ? [{ id: "materials", title: "Material" }] : []),
    ...(game.setup ? [{ id: "setup", title: "Förberedelser" }] : []),
    ...(game.rules ? [{ id: "rules", title: "Spelregler" }] : []),
    ...(game.tips ? [{ id: "tips", title: "Tips" }] : []),
  ];

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="flex-1 space-y-8">
        <Breadcrumb
          items={[
            { label: "Regler", href: "/spelregler" },
            { label: game.title },
          ]}
          className="mb-8"
        />
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-5xl">{game.emoji}</span>
            <h1 className="text-4xl font-bold" id="overview">
              {game.title}
            </h1>
          </div>
          <p className="text-muted-foreground text-lg">{game.description}</p>
        </div>

        <div className="grid gap-6">
          {/* Game overview */}
          <div className="rounded-lg border bg-card p-6" id="overview">
            <h2 className="mb-4 text-2xl font-bold">Översikt</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-lg font-medium">Mål</h3>
                <p>{game.objective}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Spelare</h3>
                <p>{game.players}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Tid</h3>
                <p>{game.duration}</p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium">Svårighetsgrad</h3>
                <p>{game.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Materials */}
          {game.materials && (
            <div className="rounded-lg border bg-card p-6" id="materials">
              <h2 className="mb-4 text-2xl font-bold">Material</h2>
              <ul className="list-disc space-y-2 pl-6">
                {game.materials.map((material, index) => (
                  <li key={index}>{material}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Setup */}
          {game.setup && (
            <div className="rounded-lg border bg-card p-6" id="setup">
              <h2 className="mb-4 text-2xl font-bold">Förberedelser</h2>
              <ol className="list-decimal space-y-2 pl-6">
                {game.setup.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Rules */}
          {game.rules && (
            <div className="rounded-lg border bg-card p-6" id="rules">
              <h2 className="mb-4 text-2xl font-bold">Spelregler</h2>
              <ol className="list-decimal space-y-2 pl-6">
                {game.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Tips */}
          {game.tips && (
            <div className="rounded-lg border bg-card p-6" id="tips">
              <h2 className="mb-4 text-2xl font-bold">Tips</h2>
              <ul className="list-disc space-y-2 pl-6">
                {game.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href={`/alla-spel/${params.slug}`}>
            <Button
              variant="game"
              className="flex items-center font-bold uppercase"
            >
              Spela nu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <TableOfContents sections={sections} />
    </div>
  );
}
