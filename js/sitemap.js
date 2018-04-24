/**
 * https://github.com/lgraubner/sitemap-generator
 */

const SitemapGenerator = require("sitemap-generator");

const siteURL = "https://alttiri.github.io";



console.log("-- sitemap-generator --");

// create generator
const generator = SitemapGenerator(siteURL, {
    stripQuerystring: false
});

// register event listeners
generator.on("done", () => {
    console.log("sitemap.xml created");
});

// start the crawler
generator.start();
