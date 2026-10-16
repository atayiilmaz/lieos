export const site = {
  name: "Lieos",
  email: "yiilmazataberk@gmail.com",
  description:
    "Lieos is an independent mobile game studio. Explore Pipeyard: Pipe Puzzle and our upcoming game, Rush Hour Station.",
};

export type Game = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  color: string;
  status: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export const games: Game[] = [
  {
    id: "pipeyard",
    name: "Pipeyard: Pipe Puzzle",
    category: "RELAXING PUZZLE",
    tagline: "Connect the flow. Find your calm.",
    description:
      "Rotate pipes, guide the water, and find your flow. A calm logic puzzle with handcrafted levels, daily challenges, and no timers. Play at your own pace, online or offline.",
    image: "/games/pipeyard-screenshot.webp",
    imageAlt:
      "Pipeyard gameplay: rotate pipes to connect the water and collect coins",
    icon: "/games/pipeyard-icon.jpg",
    color: "#061b38",
    status: "Available now",
    appStoreUrl:
      "https://apps.apple.com/us/app/pipeyard-pipe-puzzle/id6782280001",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.pipeyardpuzzle.app",
  },
  {
    id: "rush-hour-station",
    name: "Rush Hour Station",
    category: "MOBILE GAME",
    tagline: "Next stop: a little more play.",
    description:
      "Something colorful is pulling into the station. Rush Hour Station is our next mobile game. It’s still in the works — check back here for more details and store links when it’s ready.",
    image: "/games/rush-hour-station-banner.webp",
    imageAlt:
      "Rush Hour Station: colorful buses and cheerful characters waiting at a sunny station",
    icon: "/games/rush-hour-station-icon.webp",
    color: "#c9e6ed",
    status: "Coming soon",
  },
];
