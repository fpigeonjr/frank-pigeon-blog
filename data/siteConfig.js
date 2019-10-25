module.exports = {
  siteTitle: "Frank Pigeon's Blog",
  siteDescription: `code, linux, music, life`,
  authorName: 'Frank Pigeon Jr.',
  twitterUsername: 'fpigeonjr',
  authorAvatar: 'avatar.jpg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  Frank is a 👨‍💻web developer, US Army veteran, 🎸bass player, father, husband, and owner of Pigeontec and co-founder of sacodersunited.
  `,
  siteUrl: 'https://frankpigeon.com/',
  disqusSiteUrl: 'https://frankpigeon.com',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'bg-home4.jpg', // file in content/images
  googleAnalyticsId: 'UA-53325305-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'frankpigeon-com',
  headerTitle: 'frankpigeon',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Resume',
      url: '/resume',
    },
    {
      label: 'Uses',
      url: '/uses',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Netlify',
    url: 'https://www.netlify.com/',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },

        {
          label: 'Portfolio',
          url: '/portfolio',
        },
        {
          label: 'Resume',
          url: '/resume',
        },
        {
          label: 'Uses',
          url: '/uses',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/fpigeonjr',
          iconClassName: 'fa fa-github',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/fpigeonjr',
          iconClassName: 'fa fa-twitter',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/fpigeonjr/',
          iconClassName: 'fa fa-linkedin-in',
        },
      ],
    },
  ],
}
