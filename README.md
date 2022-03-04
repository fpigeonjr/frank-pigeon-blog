[![Netlify Status](https://api.netlify.com/api/v1/badges/704c3fe0-64de-4c17-ba42-57fb75518716/deploy-status)](https://app.netlify.com/sites/mystifying-edison-d53910/deploys)

# Netlify Deployment Server

:rocket: Master Branch: [https://mystifying-edison-d53910.netlify.com/](https://mystifying-edison-d53910.netlify.com/)

# gatsby-starter-morning-dew

:rocket: A gatsby-starter-morning-dew is a Gatsby starter to build lightning-fast websites!
:dizzy: You can also use gatsby-starter-morning-dew as a Gatsby Theme

[Demo website.](https://maxpou.github.io/gatsby-starter-morning-dew/)

![screenshot](https://i.imgur.com/Tv4SFqT.png)

## Features

- [:purple_heart: Gatsby v2](https://www.gatsbyjs.org/) / React 16
- :mag: SEO optimized
- :love_letter: Write posts/pages in Markdown or [MDX](https://mdxjs.com/)
  - :art: Code syntax highlight
  - :books: Multilang support (blog post)
- :iphone: Mobile Friendly (Responsive design)
- :sparkles: PWA ready
  - :airplane: Offline support
  - :page_with_curl: Manifest support
- [:wrench: Fully configurable (see data/siteConfig.js)](./data/siteConfig.js)
- :speech_balloon: Disqus support
- :nail_care: css-in-js (with [styled-components v4](https://www.styled-components.com))
- :bookmark: Groups post with tags
- :bar_chart: Google Analytics support
- :bird: post preview image generation (Twitter, Facebook)
- :gem: Developer tools:
  - eslint
  - prettier
- :construction_worker: Travis CI support

![Lighthouse scores (locally :bowtie:)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

## Installation (starter)

- with Gatsby-cli:

```bash
npm install --global gatsby-cli
gatsby new gatsby-blog https://github.com/maxpou/gatsby-starter-morning-dew
```

- without Gatsby-cli

```bash
git clone my-site git@github.com:maxpou/gatsby-starter-morning-dew.git
cd my-site
npm install
```

Then run `npm run develop` to try it locally.

## Installation (theme)

You can also use `gatsby-starter-morning-dew` as a [Gatsby theme](https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/)!

1. Add the theme

```bash
npm install gatsby-starter-morning-dew
```

2. In your `gatsby-config.js`, add:

```js
const config = require('./data/siteConfig')
// ...
plugins: [
    {
      resolve: "gatsby-starter-morning-dew",
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: 'content/images/company-icon.png', // path to your image
      },
    },
],
```

3. Add an image called `baymax.png` in `content/images/baymax.png`.
   🐞This is due to a bug.
   😬 Don't worry, this picture will not appear on your website!

Need more details? Checkout:

- [maxpou.fr source](https://github.com/maxpou/maxpou.fr): Maxence Poutord's personnal blog;
- [gatsby-groot source](https://github.com/maxpou/gatsby-groot/): a minimalist blog that use this template!

## Commands

```sh
# working locally
npm run dev

# generate build
npm run build

# format code
npm run format

# lint code
npm run lint

# Generate generate post preview images (npm run dev need to run before)
npm run generatePostPreviewImages
```

**:warning: Add `--prefix-paths` if you are using path prefix!**

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxpou/gatsby-starter-morning-dew)
