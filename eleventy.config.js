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

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "md", "html"],
    // For GitHub Pages project sites: https://<user>.github.io/<repo>/
    // This ensures {{ '...' | url }} outputs the correct base path
    pathPrefix: "/RockyMountainTreeTrout",
  };
};
