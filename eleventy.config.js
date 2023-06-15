const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

const esbuildPlugin = require('./config/plugins/esbuild');
const lightningCSSPlugin = require('./config/plugins/lightning-css');
const htmlTransformPlugin = require('./config/plugins/html-transform');
const imagePlugin = require('./config/plugins/image');

const navigationData = require('./navigation-data');
const { filterPlugin } = require('./config/filters/index');

module.exports = (eleventyConfig) => {
  // custom watch targets
  eleventyConfig.addWatchTarget('./src/assets');

  // plugins
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(esbuildPlugin);
  eleventyConfig.addPlugin(lightningCSSPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(htmlTransformPlugin);
  eleventyConfig.addPlugin(imagePlugin);

  eleventyConfig.addCollection('slides', function (collectionApi) {
    const all = collectionApi.getAll();
    return navigationData
      .map((fileSlug) => all.find((item) => item.fileSlug === fileSlug))
      .filter(Boolean);
  });

  // filters
  eleventyConfig.addPlugin(filterPlugin);

  // short codes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`); // current year, stephanie eckles

  // passthrough copy
  // same path
  ['src/assets/fonts/', 'src/assets/images/'].forEach((path) =>
    eleventyConfig.addPassthroughCopy(path)
  );

  // social icons to root directory
  eleventyConfig.addPassthroughCopy({
    'src/assets/images/favicon/*': '/',
  });

  eleventyConfig.addPassthroughCopy({
    'src/assets/css/global.css': 'src/_includes/global.css',
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
