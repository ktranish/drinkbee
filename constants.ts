export type Category = (typeof ALL_GAMES)[number]["category"];

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
