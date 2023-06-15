const dom = require('linkedom');
const htmlmin = require('html-minifier-terser');
const isProduction = process.env.ELEVENTY_ENV === 'production';

const minify = (content) => htmlmin.minify(content, {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  decodeEntities: true,
  includeAutoGeneratedTags: false,
  removeComments: true,
});

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('html-minify', async (content, path) => {
    if (path && path.endsWith('.html')) {
      const {document} = dom.parseHTML(content);
      const h1 = document.querySelector('h1');
      if (h1) {
        const u = document.createElement('u');
        u.textContent = h1.textContent;
        h1.innerHTML = '';
        h1.appendChild(u);
      }
      content = document.toString();
      return isProduction ? minify(content) : content;
    }

    return content;
  });
};