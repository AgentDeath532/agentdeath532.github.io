// gitprofile.config.js

const config = {
  github: {
    username: 'AgentDeath253', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 100, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: 'agentdeath2',
    mastodon: '',
    facebook: '',
    instagram: 'grace.is.a.devil',
    dribbble: '',
    behance: '',
    medium: 'AgentDeath',
    dev: 'AgentDeath253',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://agentdeath.net',
    phone: '',
    email: 'me@agentdeath.net',
  },
  resume: {
    fileUrl:
      'https://AgentDeath.net/#', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP (Basic To None)',
    'JavaScript (Basic To None)',
    'Node.js (Minimal)',
    'MySQL (Minimal)',
    'MTML (Minimal)',
    'Git' (Minimal),
    'Json (Fluent)',
    'Python (Minimal)',
    'YML (Fluent)',
    'Astro (Minimal)',
    ],
  experiences: [
    {
      company: 'FluxNodes LLC',
      position: 'Owner/Executive',
      from: 'January 2024',
      to: '',
      companyLink: 'https://fluxnodes.net',
    },
    {
      company: 'Arcanix',
      position: 'Managenent Team',
      from: 'December 2023',
      to: 'January 2023',
      companyLink: 'https://arcanix.net',
    },
    {
      company: 'Myridax Cloud',
      position: 'Managenent Team',
      from: 'November 2023',
      to: 'December 2023',
      companyLink: 'https://myridax.cloud',
    },
    {
    company: 'Death Hosting',
      position: 'Owner',
      from: 'June 2023',
      to: 'November 2023',
      companyLink: 'https://death-hosting.net',
    },
    {
      company: 'PylexNodes',
      position: 'Developer/Support Agent',
      from: 'May 2023',
      to: 'June 2023',
      companyLink: 'https://pylexnodes.net',
    },
    {
      company: 'Falixnodes',
      position: 'Moderator/Support Agent',
      from: 'Febuary 2022',
      to: 'April 2023',
      companyLink: 'https://falixnodes.net',
    },
    {
      company: 'Death Hosting',
      position: 'Owner (Devolved)',
      from: 'June 2022',
      to: 'January 2023',
      companyLink: 'https://death-hosting.net',
    },
  ],
  /* certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: ''
    },
  ], */
  education: [
    {
      institution: 'Mann Middel School',
      degree: 'General Education',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Lakes High School',
      degree: 'General Education',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Open Doors',
      degree: 'General Education',
      from: '2024',
      to: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
  {
  title: 'Miracle Bot',
  description: 'An All Purpose Discord Bot',
  imageUrl: '',
  link: '',
  },
  {
   title: 'FluxNodes',
   description: 'A Server Hosting Company',
   imageurl: '',
   link: '',
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'black',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

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
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `I Am Death`,
};

export default config;
