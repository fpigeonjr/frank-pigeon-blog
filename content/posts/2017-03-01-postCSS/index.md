---
title: PostCSS
slug: postcss
date: 2017-03-01
cover: ./postcss.jpg
language: en
imageTw: ./postcss-tw.png
imageFb: ./postcss-fb.png
generate-card: true
tags:
  - css
  - frontend
  - tools
---

## Working with PostCSS

I've been using `SASS` for quite some time now as my go to CSS pre-processor. It felt very familiar coming from vanilla CSS, or **Cascading Style Sheets** but gives you conveniances like:

- variables for colors, fonts, etc
- nesting!
- mixins

I remember on my first project that I was introduced to SASS, I was impressed on how quickly I adopted it and became a fan.

The only negative I could think of is that it requires a task runner to convert the SASS code into regular CSS that the browser could understand. At the time I was introduced to SASS we were using `grunt` as our task runner which later we replaced with `gulp` and now `webpack` is all the rage.

This step was at first a manual process having to run things like `gulp sass` to run the sass transpilation but you could also set watchers to run anytime gulp detected changes in any .sass files.

## What problem does PostCSS solve?

PostCSS has come along and become very popular. PostCSS is an engine for transforming CSS with Javascript. Since it using NodeJS, it claims to be **3-30 times faster** than the competition. SASS for example is built in Ruby and once you start adding gems can run a little bit slower. PostCSS is modular so at its core it is much smaller and you only add what you need.

Another big difference is that it can also do post processing like add prefixes to a finished stylesheet. PostCSS has a large plug-in base so you can choose plug-ins like future CSS support, prefixing to support older browsers, and SASS-like features like nesting and variables.

## Getting Started

PostCSS requires Node so you can install it on a mac with this brew command from terminal.

```terminal
brew update
brew install node
```

If you're unfamiliar with brew, it is a package manager for macOS and you can learn more here.

[Homebrew -the missing package manager for macOS][homebrew]

## Installing PostCSS

Looking at the [github repo][postcss-gh], there are variuos instructions based on your build tool. Since I am using [webpack][webpack-postcss], we'll start off by installing PostCSS with this command from terminal.

```terminal
yarn add postcss-loader -D
```

We'll configure our `webpack.config.js` like so:

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
    ],
  },
}
```

Then create a `postcss.config.js` file which contains your plugins. In the code block below, we have added the **precss** and **autoprefixir** plugins.

```js
module.exports = {
  plugins: [require('precss'), require('autoprefixer')],
}
```

## PostCSS Plugins

If you're curiuos to which plugins exists, you can checkout [PostCSS.parts][postcss-parts] which is a searchable catalog of PostCSS plugins. Currently PostCSS has more than 200 plugins.

Some popular PostCSS plugins are:

- [cssnano][cssnano]: compresses your css
- [autoprefixer][autoprefixer]: parse css and add vendor prefixes
- [cssnext](http://cssnext.io/): use tomorrow's css syntax, today
- [preCSS][precss]: Sass-like markup in your CSS files
- [lostGrid][lostgrid]: powerful grid system

## Closing

I am excited to continue learning PostCSS as it feels like I am in the future. It is fast, modular, and lean. It requires some setup, but once you do, I hope you will be enjoy the experience as much as I do.

### Further Learning

Ray Villalobos at Lynda has a great course on getting started with PostCSS named [PostCSS: First Look][lynda].

[homebrew]: https://brew.sh/
[postcss-gh]: https://github.com/postcss/postcss
[postcss-parts]: http://postcss.parts/
[webpack-postcss]: https://github.com/postcss/postcss-loader
[cssnano]: http://cssnano.co/
[autoprefixer]: https://github.com/postcss/autoprefixer
[precss]: https://github.com/jonathantneal/precss
[lostgrid]: https://github.com/peterramsing/lost
[lynda]: https://www.lynda.com/CSS-tutorials/PostCSS-First-Look/442850-2.html
