const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/space/hwdev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/space/hwdev/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/space/hwdev/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/space/hwdev/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/space/hwdev/src/pages/index.js")))
}

