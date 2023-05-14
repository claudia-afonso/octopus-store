const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["static.octopuscdn.com","i.ibb.co"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: "@import \"main.scss\";"
  }
};
