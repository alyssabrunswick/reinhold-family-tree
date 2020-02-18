// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Reinhold Family",
  plugins: [
    {
      use: "@gridsome/source-contentful",
      options: {
        space: "mj3bwwvsw3xc", // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        host: "cdn.contentful.com",
        environment: "master",
        typeName: "Contentful"
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
