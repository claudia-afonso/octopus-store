const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["static.octopuscdn.com","i.ibb.co"],
    deviceSizes: [320, 740, 980, 1300]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: "@import \"main.scss\";"
  },
  distDir: ".next",
};
