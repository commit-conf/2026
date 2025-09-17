module.exports = function (eleventyConfig) {
  // Copy `static` folder into `_site`
  eleventyConfig.addPassthroughCopy({ "static/*": "." });
  eleventyConfig.addPassthroughCopy({ "static/img": "img" });
  eleventyConfig.addPassthroughCopy({ "static/svg": "svg" });
  eleventyConfig.addPassthroughCopy({ "build/css": "css" });
  eleventyConfig.addPassthroughCopy({ "build/js": "js" });

  // Watch CSS and JS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/js/**/*.js",
  });

  // custom filters and shortcuts
  // IMPORTANT: updates here requires to restart the local server
  eleventyConfig.addShortcode("pageTitle", function (title) {
    const mainTitle = "Commit Conf 2026";
    return title ? `${mainTitle} - ${title}` : mainTitle;
  });
  eleventyConfig.addFilter("typeof", function (variable) {
    if (Array.isArray(variable)) {
      return "array";
    }
    return typeof variable;
  });
  // Return your Object options:
  return {
    dir: {
      input: "src",
    },
  };
};
