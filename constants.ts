export type Category = (typeof ALL_GAMES)[number]["category"];

export const ALL_GAMES = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    color: "bg-gray-50",
    category: "sallskapsspel",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    color: "bg-blue-50",
    category: "quiz",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    color: "bg-yellow-50",
    category: "dricklekar-och-drickspel",
  },
  {
    title: "Pekleken",
    emoji: "👉",
    slug: "pekleken",
    color: "bg-purple-50",
    category: "dricklekar-och-drickspel",
  },
  {
    title: "Snurra flaskan",
    emoji: "🍾",
    slug: "snurra-flaskan",
    color: "bg-green-50",
    category: "dricklekar-och-drickspel",
  },
  {
    title: "Sanning eller Konka",
    emoji: "🎭",
    slug: "sanning-eller-konka",
    color: "bg-blue-50",
    category: "sallskapsspel",
  },
  {
    title: "Vem i rummet",
    emoji: "👥",
    slug: "vem-i-rummet",
    color: "bg-purple-50",
    category: "dricklekar-och-drickspel",
  },
  {
    title: "Gissa låten",
    emoji: "🎵",
    slug: "gissa-laten",
    color: "bg-blue-50",
    category: "quiz",
  },
  {
    title: "Charades",
    emoji: "🎬",
    slug: "charades",
    color: "bg-amber-50",
    category: "sallskapsspel",
  },
  {
    title: "0-100 Frågor",
    emoji: "🧠",
    slug: "0-100-fragor",
    color: "bg-purple-50",
    category: "quiz",
  },
  {
    title: "Utmaningar",
    emoji: "🔥",
    slug: "utmaningar",
    color: "bg-red-50",
    category: "sallskapsspel",
  },
  {
    title: "Rygg mot rygg",
    emoji: "🪑",
    slug: "rygg-mot-rygg",
    color: "bg-orange-50",
    category: "dricklekar-och-drickspel",
  },
] as const;

export const HERO_CARDS = [
  {
    title: "Med andra ord",
    emoji: "🎯",
    slug: "med-andra-ord",
    color: "bg-gray-50",
  },
  {
    title: "200 Frågor",
    emoji: "❓",
    slug: "200-fragor",
    color: "bg-blue-50",
  },
  {
    title: "Jag har aldrig",
    emoji: "🙅‍♂️",
    slug: "jag-har-aldrig",
    color: "bg-yellow-50",
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
