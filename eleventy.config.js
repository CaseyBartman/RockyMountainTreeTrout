module.exports = function (eleventyConfig) {
  // Copy assets to _site
  eleventyConfig.addPassthroughCopy("assets");

  // Date formatting filter for posts
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  const pathPrefix = process.env.PATH_PREFIX || "";

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "md", "html"],
    // Use PATH_PREFIX for GitHub Pages project sites; empty for local/dev or custom domain root
    pathPrefix,
  };
};
