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
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
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
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'Node.js',
    'MySQL',
    'MTML',
    'Git',
  ],
  experiences: [
    {
      company: 'Falixnodes',
      position: 'Moderator/Support Agent',
      from: 'Febuary 2022',
      to: 'Present',
      companyLink: 'https://falixnodes.net',
    },
    {
      company: 'Death Hosting',
      position: 'Owner (Devolved)',
      from: 'June 2022',
      to: 'January 2023',
      companyLink: '',
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
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Falix Desktop Rewrite',
      description:
        'A Rewrite of falixnodes Desktop',
      imageUrl: '',
      link: 'https://falixnodes.net',
    },
    {
      title: 'Falix Mobile',
      description:
        'A Rewrite of the Falix Mobile App',
      imageUrl: '',
      link: 'https://falixnodes.net',
    },
    {
    title: 'Xera 2.0',
    description: 'A Rewrite Of MOFH Client Area Called Xera In Hopes To Fix Issues With It and Keep It Up To Date',
  imageUrl: '',
  link: '',
  },
  {
  title: 'Miracle Bot',
  description: 'An All Purpose Discord Bit That Will be Entering Development',
  imageUrl: '',
  link: '',
  },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'agentdeath253', // to hide blog section, keep it empty
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
    defaultTheme: 'winter',

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
  footer: `Coding Is Awesome `,
};

export default config;
