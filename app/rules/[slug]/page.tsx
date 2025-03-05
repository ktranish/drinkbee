import { Breadcrumb } from "@/components/breadcrumb";
import { TableOfContents } from "@/components/table-of-contents";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface GamesData {
  title: string;
  emoji: string;
  description: string;
  objective: string;
  players: string;
  duration: string;
  difficulty: string;
  materials: string[];
  setup: string[];
  rules: string[];
  tips: string[];
}

// Game data with rules
const gamesData: { [key: string]: GamesData } = {
  "med-andra-ord": {
    title: "Med andra ord",
    emoji: "🎯",
    description:
      "Ett ordförklaringsspel där du ska få ditt lag att gissa ett ord utan att använda förbjudna termer.",
    objective:
      "Få ditt lag att gissa så många ord som möjligt inom tidsgränsen.",
    players: "4+ spelare (jämna lag)",
    duration: "15-30 minuter",
    difficulty: "Medel",
    materials: [
      "Timer",
      "Ordkort eller app",
      "Papper och penna för poängräkning",
    ],
    setup: [
      "Dela upp spelarna i två eller fler jämna lag.",
      "Bestäm en tidsgräns för varje runda (vanligtvis 60 sekunder).",
      "Förbered ordkort eller använd Drinkbee-appen för att generera ord.",
    ],
    rules: [
      "En spelare från det aktiva laget tar ett kort och försöker få sitt lag att gissa ordet.",
      "Spelaren får INTE använda ordet självt eller delar av ordet.",
      "Spelaren får INTE använda översättningar av ordet eller ljud som låter som ordet.",
      "Om laget gissar rätt, tar spelaren ett nytt kort och fortsätter.",
      "Om spelaren använder ett förbjudet ord eller ger upp, hoppa över kortet.",
      "När tiden är ute, räkna antalet korrekt gissade ord. Detta är lagets poäng för rundan.",
      "Turen går vidare till nästa lag.",
      "Spela tills alla lag har haft lika många turer.",
    ],
    tips: [
      "Använd synonymer och beskrivningar.",
      "Tänk på hur föremålet används eller var det finns.",
      "Använd motsatser ('inte kall' för 'varm').",
      "Var kreativ med förklaringar men håll dig till reglerna.",
    ],
  },
  "200-fragor": {
    title: "200 Frågor",
    emoji: "❓",
    description:
      "Ett frågespel som hjälper er att lära känna varandra bättre genom personliga och utmanande frågor.",
    objective:
      "Svara på frågor för att skapa diskussion och lära känna varandra bättre.",
    players: "2+ spelare",
    duration: "Varierar (15-60 minuter)",
    difficulty: "Lätt",
    materials: ["Frågor från Drinkbee-appen eller kort"],
    setup: [
      "Samla alla spelare i en cirkel.",
      "Förbered frågorna genom att använda Drinkbee-appen eller utskrivna kort.",
    ],
    rules: [
      "Turas om att dra en fråga.",
      "Läs frågan högt och svara ärligt.",
      "Alla spelare måste svara på frågan innan ni går vidare till nästa.",
      "Spelare kan välja att 'passa' på en fråga, men uppmuntra ärlighet.",
      "Fortsätt tills ni har gått igenom önskat antal frågor.",
    ],
    tips: [
      "Skapa en trygg miljö där alla känner sig bekväma att dela.",
      "Respektera om någon inte vill svara på en specifik fråga.",
      "Lyssna aktivt när andra svarar.",
      "Följ upp med följdfrågor för att fördjupa samtalet.",
    ],
  },
  "jag-har-aldrig": {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    description:
      "Ett avslöjande spel där spelare berättar om saker de aldrig har gjort, och de som har gjort det måste dricka eller utföra en handling.",
    objective:
      "Avslöja hemligheter och lära känna varandra bättre genom att dela erfarenheter.",
    players: "3+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt",
    materials: [
      "Drycker (alkoholhaltiga eller alkoholfria)",
      "Eventuellt frågor från Drinkbee-appen",
    ],
    setup: [
      "Samla alla spelare i en cirkel.",
      "Se till att alla har en dryck.",
      "Bestäm om ni vill använda förberedda frågor eller hitta på egna.",
    ],
    rules: [
      "Turas om att säga en mening som börjar med 'Jag har aldrig...' följt av något du aldrig har gjort.",
      "Alla spelare som HAR gjort det som nämns måste dricka.",
      "Spelaren kan välja att berätta mer om sin erfarenhet om hen vill.",
      "Spelet fortsätter medsols i cirkeln.",
      "Målet är att säga saker du tror att andra har gjort, för att få dem att dricka.",
    ],
    tips: [
      "Var kreativ med dina påståenden.",
      "Balansera mellan roliga, utmanande och personliga påståenden.",
      "Respektera om någon inte vill förklara varför de dricker.",
      "Håll det lättsamt och undvik alltför känsliga ämnen om ni inte känner varandra väl.",
    ],
  },
  pekleken: {
    title: "Pekleken",
    emoji: "👉",
    description:
      "Ett enkelt men roligt spel där spelarna pekar på varandra baserat på olika påståenden.",
    objective:
      "Peka på den person som bäst passar in på påståendet som läses upp.",
    players: "4+ spelare",
    duration: "15-30 minuter",
    difficulty: "Lätt",
    materials: ["Lista med påståenden (eller använd Drinkbee-appen)"],
    setup: [
      "Samla alla spelare i en cirkel så att alla kan se varandra.",
      "Förbered en lista med påståenden eller använd Drinkbee-appen.",
    ],
    rules: [
      "En spelare läser upp ett påstående, till exempel 'Peka på den som mest sannolikt skulle somna på en fest'.",
      "På räkningen tre pekar alla spelare samtidigt på den person de tycker passar bäst in på påståendet.",
      "Den person som får flest pekningar måste dricka eller utföra en utmaning.",
      "Om det blir oavgjort, dricker eller utför båda personerna utmaningen.",
      "Turen går vidare till nästa spelare som läser nästa påstående.",
    ],
    tips: [
      "Var kreativ med påståendena.",
      "Blanda roliga, utmanande och personliga påståenden.",
      "Håll det lättsamt och respektfullt.",
      "Uppmuntra alla att delta aktivt.",
    ],
  },
  dryckesspel: {
    title: "Dryckesspel",
    emoji: "🍻",
    description: "Ett klassiskt dryckesspel med olika regler och utmaningar.",
    objective:
      "Ha kul och lära känna varandra bättre genom olika dryckesorienterade utmaningar.",
    players: "3+ spelare",
    duration: "30-60 minuter",
    difficulty: "Medel",
    materials: [
      "Drycker (alkoholhaltiga eller alkoholfria)",
      "Kortlek",
      "Eventuellt muggar",
    ],
    setup: [
      "Samla alla spelare runt ett bord.",
      "Se till att alla har en dryck.",
      "Blanda kortleken och placera den mitt på bordet.",
    ],
    rules: [
      "Turas om att dra ett kort från kortleken.",
      "Varje kort har en specifik regel eller utmaning kopplad till sig.",
      "Följ regeln för det dragna kortet.",
      "Fortsätt tills kortleken är slut eller ni bestämmer er för att avsluta spelet.",
    ],
    tips: [
      "Anpassa reglerna efter gruppen.",
      "Ha alltid alkoholfria alternativ tillgängliga.",
      "Drick ansvarsfullt och respektera om någon vill hoppa över.",
      "Var kreativ med reglerna och anpassa dem efter situationen.",
    ],
  },
  "sanning-eller-konka": {
    title: "Sanning eller Konka",
    emoji: "🎭",
    description:
      "Ett klassiskt partyspel där spelare turas om att välja mellan att svara på en personlig fråga eller utföra en utmaning.",
    objective:
      "Ha roligt och lära känna varandra bättre genom att svara på frågor eller anta utmaningar.",
    players: "3+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt",
    materials: [
      "Lista med frågor och utmaningar (eller använd Drinkbee-appen)",
    ],
    setup: [
      "Samla alla spelare i en cirkel.",
      "Bestäm om ni vill använda förberedda frågor och utmaningar eller hitta på egna under spelet.",
      "Bestäm om det ska finnas några gränser för vilka frågor eller utmaningar som är tillåtna.",
    ],
    rules: [
      "En spelare får frågan 'Sanning eller konka?'.",
      "Om spelaren väljer 'Sanning', får de en fråga och måste svara ärligt.",
      "Om spelaren väljer 'Konka', får de en utmaning de måste genomföra.",
      "Om en spelare vägrar både sanning och konka, kan de antingen dricka (i en dryckesvariant) eller få en straffutmaning.",
      "Spelet fortsätter medsols tills alla har fått spela minst en gång eller tills gruppen bestämmer sig för att avsluta.",
    ],
    tips: [
      "Håll spelet roligt och inkluderande – tvinga ingen att svara på något de inte är bekväma med.",
      "Blanda sanningar och utmaningar för att hålla spelet intressant.",
      "Sätt gränser innan spelet börjar om vissa frågor eller utmaningar är för mycket.",
    ],
  },
  "vem-i-rummet": {
    title: "Vem i rummet",
    emoji: "👥",
    description:
      "Ett roligt och avslöjande spel där spelarna pekar ut vem i rummet som bäst passar in på olika påståenden.",
    objective:
      "Lära känna varandra bättre och ha kul genom att identifiera vem i gruppen som bäst passar in på olika påståenden.",
    players: "3+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt",
    materials: ["Lista med påståenden (eller använd DrinkBee-appen)"],
    setup: [
      "Samla alla spelare i en cirkel så att alla kan se varandra.",
      "Bestäm om ni vill använda förberedda påståenden eller hitta på egna under spelets gång.",
    ],
    rules: [
      "En spelare läser upp ett påstående, exempelvis: 'Vem i rummet skulle klara sig bäst i en zombieapokalyps?'.",
      "På räkningen tre pekar alla spelare samtidigt på den person de tycker bäst passar in på påståendet.",
      "Den person som får flest pekningar kan få berätta varför de tror att de blev utpekade.",
      "Spelet fortsätter medsols tills alla har fått läsa upp minst ett påstående, eller tills gruppen vill avsluta.",
    ],
    tips: [
      "Var inte rädd att motivera ditt val efter att ha pekat.",
      "Se till att hålla spelet roligt och lättsamt, undvik att göra någon obekväm.",
      "Uppmuntra alla att vara ärliga men respektfulla.",
      "Om någon får många pekningar på en fråga, låt dem berätta vad de själva tycker.",
    ],
  },
  "gissa-laten": {
    title: "Gissa låten",
    emoji: "🎵",
    description:
      "Ett musikquiz där spelarna ska gissa låten så snabbt som möjligt utifrån en kort ljudsnutt eller en nynnad melodi.",
    objective:
      "Identifiera och gissa låtar snabbare än de andra spelarna för att samla poäng.",
    players: "2+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt till medel",
    materials: [
      "En musikspelare (Spotify, YouTube, Drinkbee-appen eller en spellista)",
      "Penna och papper för poängräkning",
    ],
    setup: [
      "Välj en spellista eller en samling låtar att använda.",
      "Bestäm en spelläsare (DJ) som spelar upp ljudklipp från låtar.",
      "Bestäm om spelarna ska gissa individuellt eller i lag.",
      "Sätt regler för hur låtar spelas upp – exempelvis en kort snutt på 5 sekunder.",
    ],
    rules: [
      "DJ:n spelar upp en kort del av en låt (kan vara början, en instrumental del eller en nynnad melodi).",
      "Den första spelaren eller laget som gissar rätt får poäng.",
      "För ett fullständigt poäng måste spelaren säga både låttitel och artist (kan anpassas).",
      "Om ingen gissar rätt efter 10 sekunder, ges en ledtråd och en ny chans att svara.",
      "Spelet fortsätter tills en viss poänggräns uppnås eller tills spellistan är slut.",
    ],
    tips: [
      "Använd en mix av gamla och nya låtar för att göra spelet mer utmanande.",
      "Låt en person nynna eller sjunga låten istället för att spela upp den för extra svårighet.",
      "Spela bara en instrumentell del av låten för att göra det svårare.",
      "Sätt en tidsbegränsning på hur länge spelarna får fundera på sitt svar.",
    ],
  },
  charades: {
    title: "Charades",
    emoji: "🎬",
    description:
      "Ett klassiskt partyspel där spelare ska gestikulera ord och fraser utan att tala medan andra försöker gissa.",
    objective:
      "Få ditt lag att gissa så många ord eller fraser som möjligt genom att agera utan att tala.",
    players: "4+ spelare (delas upp i lag)",
    duration: "15-45 minuter",
    difficulty: "Lätt till medel",
    materials: [
      "Lappar med ord eller använd Drinkbee-appen",
      "Timer",
      "Poängräkning (papper och penna)",
    ],
    setup: [
      "Dela upp spelarna i två eller fler lag.",
      "Förbered ord eller fraser att spela med, antingen skrivna på lappar eller i en app.",
      "Bestäm en tidsgräns för varje omgång (vanligtvis 60 sekunder).",
    ],
    rules: [
      "En spelare från det aktiva laget drar en lapp eller får ett ord från appen.",
      "Spelaren måste gestikulera för att få sitt lag att gissa ordet utan att prata, peka på föremål eller använda teckenspråk.",
      "Om laget gissar rätt innan tiden går ut, får de poäng och spelaren drar ett nytt kort.",
      "Om laget inte gissar rätt kan de passa och gå vidare till nästa ord, men detta ger inga poäng.",
      "När tiden är slut byter turen till nästa lag.",
      "Spelet fortsätter tills en viss poänggräns uppnås eller tills alla lag har haft lika många omgångar.",
    ],
    tips: [
      "Använd stora rörelser för att göra gissandet enklare.",
      "Om ordet är svårt, försök bryta ner det i mindre delar och agera ut dem separat.",
      "Planera ditt kroppsspråk noggrant för att undvika att oavsiktligt prata eller peka.",
      "Använd mimik och ansiktsuttryck för att förstärka ledtrådarna.",
    ],
  },
  quiz: {
    title: "Quiz",
    emoji: "🧠",
    description:
      "Ett klassiskt frågesportspel där spelarna tävlar om att svara rätt på frågor inom olika kategorier.",
    objective:
      "Svara rätt på så många frågor som möjligt för att samla poäng och vinna spelet.",
    players: "2+ spelare eller lag",
    duration: "15-60 minuter",
    difficulty: "Lätt till svår (beroende på frågorna)",
    materials: [
      "Lista med frågor (eller använd Drinkbee-appen)",
      "Poängräkning (papper och penna)",
      "Timer (valfritt)",
    ],
    setup: [
      "Dela upp spelarna i lag eller spela individuellt.",
      "Bestäm vilka kategorier som ska användas och hur många frågor per kategori.",
      "Förbered en quizmaster som ställer frågorna, eller låt spelarna turas om att läsa frågorna.",
    ],
    rules: [
      "Quizmastern ställer en fråga till spelarna eller lagen.",
      "Spelarna har en begränsad tid att svara (t.ex. 30 sekunder).",
      "Om en spelare eller ett lag svarar rätt, får de poäng.",
      "Om svaret är fel, kan en annan spelare eller ett annat lag få chansen att svara.",
      "Spelet fortsätter tills alla frågor är besvarade eller tills en poänggräns har uppnåtts.",
    ],
    tips: [
      "Anpassa svårighetsgraden på frågorna efter gruppen.",
      "Använd en timer för att göra spelet mer spännande.",
      "Variera kategorierna för att inkludera alla spelarnas styrkor.",
      "Gör det roligare genom att lägga till bonusfrågor eller specialutmaningar.",
    ],
  },
  utmaningar: {
    title: "Utmaningar",
    emoji: "🔥",
    description:
      "Ett spännande spel där spelarna får olika utmaningar att utföra, från roliga till extrema.",
    objective:
      "Utföra så många utmaningar som möjligt för att samla poäng och vinna spelet.",
    players: "2+ spelare",
    duration: "15-60 minuter",
    difficulty: "Lätt till svår (beroende på utmaningarna)",
    materials: [
      "Lista med utmaningar (eller använd Drinkbee-appen)",
      "Timer (valfritt)",
      "Eventuella rekvisita för vissa utmaningar",
    ],
    setup: [
      "Samla spelarna i en cirkel.",
      "Förbered en lista med utmaningar eller använd Drinkbee-appen för att generera dem.",
      "Bestäm regler för att hoppa över utmaningar (t.ex. dricka, få minuspoäng eller en straffutmaning).",
    ],
    rules: [
      "Varje spelare turas om att dra en utmaning.",
      "Spelaren måste antingen utföra utmaningen eller välja att hoppa över den (med en påföljd).",
      "Om utmaningen utförs korrekt får spelaren poäng.",
      "Vissa utmaningar kan kräva en domare eller röstning från gruppen för att avgöra om den klarats.",
      "Spelet fortsätter tills en viss poänggräns uppnås eller tills alla har gjort ett visst antal utmaningar.",
    ],
    tips: [
      "Anpassa utmaningarna efter gruppens komfortnivå.",
      "Blanda lätta, roliga och extrema utmaningar för variation.",
      "Uppmuntra spelarna att verkligen gå in för sina utmaningar.",
      "Se till att alla får lika många utmaningar.",
    ],
  },
  "hot-seat": {
    title: "Hot Seat",
    emoji: "🪑",
    description:
      "Ett avslöjande och roligt frågespel där en spelare sitter i heta stolen och får svara på frågor från de andra spelarna.",
    objective:
      "Lära känna varandra bättre genom att en spelare får svara på djärva och personliga frågor.",
    players: "3+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt till medel",
    materials: [
      "Lista med frågor (eller använd Drinkbee-appen)",
      "Papper och penna för poäng (valfritt)",
    ],
    setup: [
      "Samla alla spelare i en cirkel.",
      "Bestäm vem som ska börja i heta stolen.",
      "Välj om frågorna ska vara förberedda eller om spelarna får hitta på egna under spelet.",
    ],
    rules: [
      "En spelare sitter i 'hot seat' och ska svara på frågor från resten av gruppen.",
      "Gruppen ställer frågor en i taget och den i heta stolen måste svara ärligt.",
      "Om spelaren vägrar svara kan de antingen välja en straffutmaning eller ta en dryck (i en dryckesvariant).",
      "Efter ett bestämt antal frågor (t.ex. 5–10) går turen till nästa spelare.",
      "Spelet fortsätter tills alla har varit i heta stolen minst en gång eller tills gruppen bestämmer sig för att avsluta.",
    ],
    tips: [
      "Håll spelet roligt och bekvämt – tvinga ingen att svara på något de inte vill.",
      "Blanda lätta och mer utmanande frågor för variation.",
      "Respektera om någon väljer att hoppa över en fråga.",
      "Använd en timer om ni vill göra spelet mer intensivt.",
    ],
  },
};

// Generate static paths for all games
export function generateStaticParams() {
  return Object.keys(gamesData).map((slug) => ({ slug }));
}

export default function GameRulesPage({
  params,
}: {
  params: { slug: string };
}) {
  const game = gamesData[params.slug as keyof typeof gamesData];

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
          items={[{ label: "Regler", href: "/rules" }, { label: game.title }]}
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
          <Link href={`/games/${params.slug}`}>
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
