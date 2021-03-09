import { Nft } from './types'

const Nfts: Nft[] = [
  {
    name: 'Bullish',
    description: 'Happy Niu Year! This bunny’s excited for the year of the bull (market!)',
    images: {
      lg: 'bullish-lg.png',
      md: 'bullish-md.png',
      sm: 'bullish-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.png',
    },
    video: {
      webm: 'https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.webm',
      mp4: 'https://gateway.pinata.cloud/ipfs/QmNS1A5HsRW1JvFWtGkm4o9TgZVe2P7kA8TB4yxvS6A7ms/bullish.mp4',
    },
    sortOrder: 999,
    bunnyId: 11,
  },
  {
    name: 'Hiccup',
    description: "Oopsie daisy! Hiccup's had a bit of an accident. Poor little fella.",
    images: {
      lg: 'hiccup-lg.png',
      md: 'hiccup-md.png',
      sm: 'hiccup-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmQ6EE6gkVzAQUdQLLM7CyrnME6LZHCoy92ZERW8HXmyjw/hiccup.png',
    },
    sortOrder: 999,
    bunnyId: 10,
  },
  {
    name: 'Sleepy',
    description: 'Aww, looks like eating salads all day is tough work. Sweet dreams!',
    images: {
      lg: 'sleepy-lg.png',
      md: 'sleepy-md.png',
      sm: 'sleepy-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sleepy.png',
      blur: 'sleepy-blur.png',
    },
    sortOrder: 999,
    bunnyId: 5,
  },
  {
    name: 'Sunny',
    description: 'Sunny is always cheerful when there are salads around. Smile!',
    images: {
      lg: 'sunny-lg.png',
      md: 'sunny-md.png',
      sm: 'sunny-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/sunny.png',
      blur: 'sunny-blur.png',
    },
    sortOrder: 999,
    bunnyId: 9,
  },
  {
    name: 'Churro',
    description: "Don't let that dopey smile deceive you... Churro's a master SALAD chef!",
    images: {
      lg: 'churro-lg.png',
      md: 'churro-md.png',
      sm: 'churro-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/churro.png',
      blur: 'churro-blur.png',
    },
    sortOrder: 999,
    bunnyId: 8,
  },
  {
    name: 'Dollop',
    description: "Nommm... Oh hi, I'm just meditating on the meaning of SALAD.",
    images: {
      lg: 'dollop-lg.png',
      md: 'dollop-md.png',
      sm: 'dollop-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/dollop.png',
      blur: 'dollop-blur.png',
    },
    sortOrder: 999,
    bunnyId: 6,
  },
  {
    name: 'Twinkle',
    description: "Three guesses what's put that twinkle in those eyes! (Hint: it's SALAD)",
    images: {
      lg: 'twinkle-lg.png',
      md: 'twinkle-md.png',
      sm: 'twinkle-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmYD9AtzyQPjSa9jfZcZq88gSaRssdhGmKqQifUDjGFfXm/twinkle.png',
      blur: 'twinkle-blur.png',
    },
    sortOrder: 999,
    bunnyId: 7,
  },
  {
    name: 'Swapsies',
    description: 'These bunnies love nothing more than swapping salads. Especially on BSC.',
    images: {
      lg: 'swapsies-lg.png',
      md: 'swapsies-md.png',
      sm: 'swapsies-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/swapsies.png',
      blur: 'swapsies-blur.png',
    },
    sortOrder: 999,
    bunnyId: 0,
  },
  {
    name: 'Drizzle',
    description: "It's raining sauce on this bunny, but he doesn't seem to mind. Can you blame him?",
    images: {
      lg: 'drizzle-lg.png',
      md: 'drizzle-md.png',
      sm: 'drizzle-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/drizzle.png',
      blur: 'drizzle-blur.png',
    },
    sortOrder: 999,
    bunnyId: 1,
  },
  {
    name: 'Blueberries',
    description: "These bunnies like their salads with blueberries. What's your favorite topping?",
    images: {
      lg: 'blueberries-lg.png',
      md: 'blueberries-md.png',
      sm: 'blueberries-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/blueberries.png',
      blur: 'blueberries-blur.png',
    },
    sortOrder: 999,
    bunnyId: 2,
  },
  {
    name: 'Circular',
    description: "Love makes the world go 'round... but so do salads. And these bunnies know it.",
    images: {
      lg: 'circular-lg.png',
      md: 'circular-md.png',
      sm: 'circular-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/circular.png',
      blur: 'circular-blur.png',
    },
    sortOrder: 999,
    bunnyId: 3,
  },
  {
    name: 'Sparkle',
    description: 'It’s sparkling sauce, salads, and even lottery tickets! This bunny really loves it.',
    images: {
      lg: 'sparkle-lg.png',
      md: 'sparkle-md.png',
      sm: 'sparkle-sm.png',
      ipfs: 'https://gateway.pinata.cloud/ipfs/QmXdHqg3nywpNJWDevJQPtkz93vpfoHcZWQovFz2nmtPf5/sparkle.png',
      blur: 'sparkle-blur.png',
    },
    sortOrder: 999,
    bunnyId: 4,
  },
]

export default Nfts
