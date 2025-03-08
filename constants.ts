export type Category = (typeof ALL_GAMES)[number]["category"];

export interface GameRules {
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

export const GAME_RULES: { [key: string]: GameRules } = {
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
  "snurra-flaskan": {
    title: "Snurra Flaskan",
    emoji: "🍾",
    description:
      "Ett klassiskt partyspel där spelarna turas om att snurra en flaska och utföra sanningar eller utmaningar.",
    objective:
      "Ha roligt och skapa spännande ögonblick genom att svara på frågor eller utföra utmaningar baserat på flaskans riktning.",
    players: "3+ spelare",
    duration: "15-45 minuter",
    difficulty: "Lätt",
    materials: [
      "En flaska",
      "Lista med frågor och utmaningar (eller använd DrinkBee-appen)",
    ],
    setup: [
      "Samla alla spelare i en cirkel.",
      "Placera en tom flaska i mitten av cirkeln.",
      "Bestäm om spelet ska ha enbart sanningar, enbart utmaningar eller båda.",
    ],
    rules: [
      "En spelare snurrar flaskan.",
      "Personen som flaskans hals pekar på måste välja mellan 'Sanning' eller 'Utmaning'.",
      "Om spelaren väljer 'Sanning', måste de svara ärligt på en fråga från gruppen.",
      "Om spelaren väljer 'Utmaning', måste de utföra en utmaning som gruppen bestämmer eller som tas från en lista.",
      "Om spelaren vägrar att svara eller utföra utmaningen, kan de antingen dricka (i en dryckesvariant) eller få en straffutmaning.",
      "Spelet fortsätter medsols tills alla har fått en chans att snurra flaskan flera gånger.",
    ],
    tips: [
      "Variera mellan sanningar och utmaningar för att hålla spelet intressant.",
      "Anpassa frågorna och utmaningarna efter gruppens komfortnivå.",
      "Ha en 'passa'-regel om någon inte vill svara eller göra en utmaning, men ge en liten konsekvens.",
      "Se till att hålla spelet roligt och respektfullt.",
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
  "0-100-fragor": {
    title: "0-100 Frågor",
    emoji: "🧠",
    description:
      "Ett roligt gissningsspel där spelarna ska uppskatta svaren på frågor med siffror mellan 0 och 100.",
    objective:
      "Gissa rätt siffra eller komma så nära som möjligt för att samla poäng och vinna spelet.",
    players: "2+ spelare eller lag",
    duration: "15-45 minuter",
    difficulty: "Lätt till medel",
    materials: [
      "Lista med frågor (eller använd DrinkBee-appen)",
      "Poängräkning (papper och penna)",
      "Timer (valfritt)",
    ],
    setup: [
      "Samla spelarna i en cirkel eller dela upp dem i lag.",
      "En frågeställare (eller appen) läser upp frågor där svaret är en siffra mellan 0 och 100.",
      "Bestäm hur många rundor ni vill spela innan spelet börjar.",
    ],
    rules: [
      "Frågeställaren läser upp en fråga, t.ex. 'Hur många procent av jordens yta är täckt av vatten?'.",
      "Varje spelare eller lag skriver ner sin gissning på en lapp eller säger den högt.",
      "Den som gissar närmast det korrekta svaret vinner omgången och får poäng.",
      "Om två spelare gissar lika nära delar de på poängen.",
      "Spelet fortsätter tills det förutbestämda antalet frågor har ställts eller tills en viss poänggräns uppnås.",
    ],
    tips: [
      "Använd en mix av enkla och svåra frågor för att göra spelet mer varierat.",
      "Ge bonuspoäng för exakt svar för att göra spelet mer spännande.",
      "Låt varje spelare motivera sin gissning innan svaret avslöjas.",
      "Variera mellan individuella och lagbaserade omgångar för variation.",
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
  "rygg-mot-rygg": {
    title: "Rygg mot Rygg",
    emoji: "🪑",
    description:
      "Ett roligt och avslöjande spel där två spelare sitter rygg mot rygg och svarar på frågor,",
    objective:
      "Testa hur väl spelarna känner varandra genom att svara anonymt på frågor med en enkel gest.",
    players: "4+ spelare",
    duration: "15-30 minuter",
    difficulty: "Lätt",
    materials: ["Lista med frågor (eller använd DrinkBee-appen)"],
    setup: [
      "Välj två spelare som börjar och låt dem sätta sig rygg mot rygg i mitten av rummet.",
      "Bestäm en frågeställare som läser upp påståenden.",
      "Övriga spelare kan turas om att läsa frågor eller komma på egna.",
    ],
    rules: [
      "Frågeställaren läser upp ett påstående, exempelvis: 'Vem av er är mest tävlingsinriktad?'.",
      "Om en spelare tycker att påståendet stämmer in på sig själv, lyfter de handen.",
      "Om en spelare tycker att påståendet stämmer bättre in på den andra personen, lyfter de också handen.",
      "Eftersom spelarna sitter rygg mot rygg kan de inte se vad den andra svarar.",
      "Efter varje fråga får gruppen skratta och reagera på svaren, men ingen får avslöja vad den andra spelaren svarade förrän spelet är klart.",
      "Efter ett visst antal frågor byts spelarna ut mot nya personer i mitten.",
    ],
    tips: [
      "Välj frågor som passar gruppens dynamik och komfortnivå.",
      "Se till att hålla spelet roligt och respektfullt.",
      "Använd en neutral frågeställare som inte favoriserar någon.",
      "Byt ut spelarna i mitten ofta för att alla ska få vara med.",
    ],
  },
};

export const GAME_CATEGORIES = [
  {
    name: "Popular",
    games: [
      { title: "Med andra ord", slug: "med-andra-ord", emoji: "🎯" },
      { title: "200 Frågor", slug: "200-fragor", emoji: "❓" },
      { title: "Jag har aldrig", slug: "jag-har-aldrig", emoji: "🙅‍♂️" },
      { title: "Pekleken", slug: "pekleken", emoji: "👉" },
    ],
  },
  {
    name: "Party",
    games: [
      { title: "Snurra flaskan", slug: "snurra-flaskan", emoji: "🍾" },
      {
        title: "Sanning eller Konka",
        slug: "sanning-eller-konka",
        emoji: "🎭",
      },
      { title: "Vem i rummet", slug: "vem-i-rummet", emoji: "👥" },
    ],
  },
  {
    name: "Fun",
    games: [
      { title: "Gissa låten", slug: "gissa-laten", emoji: "🎵" },
      { title: "Charades", slug: "charades", emoji: "🎬" },
      { title: "0-100 Frågor", slug: "0-100-fragor", emoji: "🧠" },
    ],
  },
  {
    name: "Extreme",
    games: [
      { title: "Utmaningar", slug: "utmaningar", emoji: "🔥" },
      { title: "Rygg mot rygg", slug: "rygg-mot-rygg", emoji: "🪑" },
    ],
  },
];

export const ALL_GAMES = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    color: "bg-gray-50",
    category: "sallskapsspel",
    url: "/sallskapsspel/med-andra-ord",
    description:
      "Ett ordförklaringsspel där du ska få ditt lag att gissa ett ord utan att använda förbjudna termer.",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    color: "bg-blue-50",
    category: "quiz",
    url: "/quiz/200-fragor",
    description:
      "Ett frågespel som hjälper er att lära känna varandra bättre genom personliga och utmanande frågor.",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    color: "bg-yellow-50",
    category: "dricklekar-och-drickspel",
    url: "/dricklekar-och-drickspel/jag-har-aldrig",
    description:
      "Ett avslöjande spel där spelare berättar om saker de aldrig har gjort, och de som har gjort det måste dricka.",
  },
  {
    title: "Pekleken",
    emoji: "👉",
    slug: "pekleken",
    color: "bg-purple-50",
    category: "dricklekar-och-drickspel",
    url: "/dricklekar-och-drickspel/pekleken",
    description:
      "Ett enkelt men roligt spel där spelarna pekar på varandra baserat på olika påståenden.",
  },
  {
    title: "Snurra flaskan",
    emoji: "🍾",
    slug: "snurra-flaskan",
    color: "bg-green-50",
    category: "dricklekar-och-drickspel",
    url: "/dricklekar-och-drickspel/snurra-flaskan",
    description:
      "Ett klassiskt partyspel där spelarna snurrar en flaska och får utmaningar eller sanningar att besvara.",
  },
  {
    title: "Sanning eller Konka",
    emoji: "🎭",
    slug: "sanning-eller-konka",
    color: "bg-blue-50",
    category: "sallskapsspel",
    url: "/sallskapsspel/sanning-eller-konka",
    description:
      "Välj mellan att svara ärligt på en fråga eller utföra en utmaning.",
  },
  {
    title: "Vem i rummet",
    emoji: "👥",
    slug: "vem-i-rummet",
    color: "bg-purple-50",
    category: "dricklekar-och-drickspel",
    url: "/dricklekar-och-drickspel/vem-i-rummet",
    description:
      "Svara på frågor om vilken person i rummet som mest sannolikt skulle göra olika saker.",
  },
  {
    title: "Gissa låten",
    emoji: "🎵",
    slug: "gissa-laten",
    color: "bg-blue-50",
    category: "quiz",
    url: "/quiz/gissa-laten",
    description:
      "Testa dina musikkunskaper genom att gissa låtar baserat på korta ljudklipp.",
  },
  {
    title: "Charades",
    emoji: "🎬",
    slug: "charades",
    color: "bg-amber-50",
    category: "sallskapsspel",
    url: "/sallskapsspel/charades",
    description: "Förklara ord eller fraser genom att agera utan att prata.",
  },
  {
    title: "0-100 Frågor",
    emoji: "🧠",
    slug: "0-100-fragor",
    color: "bg-purple-50",
    category: "quiz",
    url: "/quiz/0-100-fragor",
    description:
      "Ett roligt gissningsspel där spelarna ska uppskatta svaren på frågor med siffror mellan 0 och 100.",
  },
  {
    title: "Utmaningar",
    emoji: "🔥",
    slug: "utmaningar",
    color: "bg-red-50",
    category: "sallskapsspel",
    url: "/sallskapsspel/utmaningar",
    description: "Våga utföra roliga och utmanande uppgifter för att få poäng.",
  },
  {
    title: "Rygg mot rygg",
    emoji: "🪑",
    slug: "rygg-mot-rygg",
    color: "bg-orange-50",
    category: "dricklekar-och-drickspel",
    url: "/dricklekar-och-drickspel/rygg-mot-rygg",
    description:
      "Ett roligt och avslöjande spel där två spelare sitter rygg mot rygg och svarar på frågor.",
  },
] as const;

export const HERO_CARDS = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    color: "bg-gray-50",
    url: "/sallskapsspel/med-andra-ord",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    color: "bg-blue-50",
    url: "/quiz/200-fragor",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    color: "bg-yellow-50",
    url: "/dricklekar-och-drickspel/jag-har-aldrig",
  },
];

export const ANIMATION_POSITIONS = [
  // Position 1
  [
    {
      top: 20,
      right: 20,
      rotate: 6,
      scale: 1,
      zIndex: 30,
      opacity: 1,
      blur: 0,
    },
    {
      top: 100,
      right: 60,
      rotate: -8,
      scale: 0.95,
      zIndex: 20,
      opacity: 0.9,
      blur: 1,
    },
    {
      top: 180,
      right: 30,
      rotate: 12,
      scale: 0.9,
      zIndex: 10,
      opacity: 0.8,
      blur: 2,
    },
  ],
  // Position 2
  [
    {
      top: 180,
      right: 30,
      rotate: 12,
      scale: 0.9,
      zIndex: 10,
      opacity: 0.8,
      blur: 2,
    },
    {
      top: 20,
      right: 20,
      rotate: 6,
      scale: 1,
      zIndex: 30,
      opacity: 1,
      blur: 0,
    },
    {
      top: 100,
      right: 60,
      rotate: -8,
      scale: 0.95,
      zIndex: 20,
      opacity: 0.9,
      blur: 1,
    },
  ],
  // Position 3
  [
    {
      top: 100,
      right: 60,
      rotate: -8,
      scale: 0.95,
      zIndex: 20,
      opacity: 0.9,
      blur: 1,
    },
    {
      top: 180,
      right: 30,
      rotate: 12,
      scale: 0.9,
      zIndex: 10,
      opacity: 0.8,
      blur: 2,
    },
    {
      top: 20,
      right: 20,
      rotate: 6,
      scale: 1,
      zIndex: 30,
      opacity: 1,
      blur: 0,
    },
  ],
];

export const QUESTIONS_DATA = {
  popular: [
    "Vad är din största osäkerhet?",
    "Vad är din bästa egenskap?",
    "Om du kunde resa vart som helst, vart skulle du åka?",
    "Vad är din största rädsla?",
    "Vad är ditt bästa minne?",
  ],
  party: [
    "Vem i rummet skulle du vilja byta liv med för en dag?",
    "Berätta om ditt mest pinsamma ögonblick",
    "Vem i rummet skulle klara sig bäst i en zombieapokalyps?",
    "Vem i rummet skulle du ringa om du hamnade i fängelse?",
    "Vem i rummet skulle du vilja vara fast i en hiss med?",
  ],
  fun: [
    "Vilken superkraft skulle du vilja ha?",
    "Om du var ett djur, vilket skulle du vara?",
    "Vilken är din favoritfilm?",
    "Vad skulle du göra om du vann en miljon kronor?",
    "Vilken är din favoritmat?",
  ],
  extreme: [
    "Vad är det galnaste du någonsin gjort?",
    "Berätta om ditt värsta dejt",
    "Vad är din största hemlighet?",
    "Vad är det mest olagliga du gjort?",
    "Vad är det mest extrema du skulle göra för pengar?",
  ],
};
