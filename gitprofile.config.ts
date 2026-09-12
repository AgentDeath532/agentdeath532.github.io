// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AgentDeath532', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 64, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
  {
    title: 'Scale Hosting',
    description: 'Minecraft and Discord bot hosting platform. Pterodactyl-based with Paymenter billing, Hetzner dedicated nodes behind Cloudflare. Free-forever tier with idle-server hibernation, one-click modpacks, Geyser crossplay and a subdomain feature. Launched Sept 2026.',
    tech: ['PHP', 'Laravel', 'Pterodactyl', 'Docker', 'Cloudflare', 'Stripe'],
    link: 'https://scalehosting.net',
  },
  {
    title: 'Warden',
    description: 'Anti-abuse system for Scale Hosting. Paymenter extension owning enforcement, strikes and appeals; hardened distroless container images; forked Wings daemon with per-container telemetry, an observe→suspend enforcement ladder and cgroup-based hibernation. ScaleShield handles alt/VPN detection via device fingerprinting.',
    tech: ['Go', 'PHP', 'Laravel', 'Docker', 'nftables'],
  },
  {
    title: 'Node uptime API',
    description: 'Lightweight uptime monitoring API for tracking distributed hosting nodes.',
    tech: ['PHP', 'SQLite'],
  },
],
    },
  },
  seo: { title: 'Portfolio of Maddie', description: '', imageURL: 'https://scalehosting.net/storage/logo-dark.webp' },
  social: {
    linkedin: 'madison-dean-1b349b436',
    x: 'maddiedean253',
    mastodon: 'MaddieDean@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'grace.is.a.devil',
    reddit: 'u/Optimasprime11',
    threads: 'grace.is.a.devil',
    youtube: 'MadisonDean253', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '1315893969686630445',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '+1 (253) 882-6154',
    email: 'MadisonDean@Scalehosting.net',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'PHP',
  'Go',
  'Laravel',
  'JavaScript',
  'Node.js',
  'discord.js',
  'Express',
  'MySQL / MariaDB',
  'SQLite',
  'REST API design',
  'Stripe',
  'Docker',
  'Linux',
  'Git',
  'Pterodactyl / Wings',
  'Paymenter extensions',
  'Cloudflare (DNS / WAF)',
  'HTML / CSS',
  'Anti-abuse & fraud detection',
],
  experiences: [
  {
    company: 'Scale Hosting Limited',
    position: 'Founder & Director',
    from: 'January 2026',
    to: 'Present',
    companyLink: 'https://scalehosting.net',
  },
  {
    company: 'Amazon',
    position: 'Warehouse Associate',
    from: 'April 2026',
    to: 'Present',
    companyLink: 'https://www.amazon.com',
  },
  {
    company: "McDonald's",
    position: 'Crew Member → Crew Trainer → Overnight Manager',
    from: 'October 2023',
    to: 'April 2026',
    companyLink: 'https://www.mcdonalds.com',
  },
  {
    company: 'Myridax Cloud',
    position: 'Manager',
    from: 'August 2025',
    to: 'February 2026',
    companyLink: '',
  },
  {
    company: 'Flux Hosting',
    position: 'President',
    from: 'August 2025',
    to: 'November 2025',
    companyLink: '',
  },
  {
    company: 'FalixNodes',
    position: 'Support',
    from: '2021',
    to: '2022',
    companyLink: 'https://falixnodes.net',
  },
],
  certifications: [
  {
    name: 'ServSafe Food Protection Manager',
    body: 'National Restaurant Association',
    year: 'Month 2024',
    link: 'https://www.servsafe.com',
  },
  {
    name: 'Washington State Food Worker Card',
    body: 'Washington State Department of Health',
    year: 'October 2023',
    link: 'https://www.foodworkercard.wa.gov',
  },
  {
    name: 'Powered Industrial Truck (Forklift) Operator',
    body: 'Amazon — includes VNA (very narrow aisle) certification',
    year: 'April 2026',
    link: '',
  },
],
  educations: [
  {
    institution: 'Tacoma Community College',
    degree: 'Enrolled — no active classes',
    from: 'Year',
    to: 'Present',
  },
  {
    institution: 'Clover Park Technical College',
    degree: 'Enrolled — no active classes',
    from: 'Year',
    to: 'Present',
  },
  {
    institution: 'Gravelly Lake K-12 Academy (Open Doors)',
    degree: 'GED (in progress)',
    from: '2022',
    to: 'Present',
  },
  {
    institution: 'Lakes High School',
    degree: 'Grades 9–11',
    from: '2019',
    to: '2022',
  },
  {
    institution: 'Mann Middle School',
    degree: 'Grades 6–8',
    from: '2016',
    to: '2019',
  },
  {
    institution: 'Lake Louise Elementary',
    degree: 'Grades K–5',
    from: '2010',
    to: '2016',
  },
],
publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
