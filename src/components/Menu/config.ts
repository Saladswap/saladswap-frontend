import { MenuEntry } from '@saladswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.saladswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.saladswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://saladswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://saladswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://saladswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://saladswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.saladswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/Saladswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.saladswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://saladswap.medium.com',
      },
    ],
  },
]

export default config
