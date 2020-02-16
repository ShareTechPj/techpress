const fs = require("fs");
const path = require("path");

var dirpath = "./docs";

var dirs = fs.readdirSync(dirpath).filter(f => {
  return (
    fs.existsSync(dirpath + "/" + f) &&
    fs.statSync(dirpath + "/" + f).isDirectory() &&
    ".vuepress" != f
  );
});

var sidebarArray = [{path:"/", title:"TechPress"}].concat(
  dirs.map(dir => {
    return {
      title: dir,
      collapsable: true,
      children: fs.readdirSync(dirpath + "/" + dir).map(childDir => {
        return "/" + dir + "/" + childDir;
      })
    };
  })
);

module.exports = {
  title: "TechPress",
  description: "技術共有",
  dest: "pages",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "og:url", content: "https://techpress.netlify.com/" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "TechPress" }],
    ["meta", { name: "og:site_name", content: "TechPress" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "技術的なマインドを共有するサイトです。\nテクニックよりも意識を持つことを第一目的としています。"
      }
    ],
    ["script",{src: "https://identity.netlify.com/v1/netlify-identity-widget.js"}],
    ["meta", { name: "og:image", content: "/img/icons/favicon-16x16.png" }],
    ['meta', { name: 'theme-color', content: '#6898de' }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "icon", type: "image/png", sizes:"32x32", href: "/img/icons/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes:"16x16", href: "/img/icons/favicon-16x16.png" }],
    [
      "link",
      { rel: "apple-touch-icon", sizes:"180x180", href: "/img/icons/apple-touch-icon.png" }
    ],
    [
      "link",
      { rel: "mask-icon", href: "/img/icons/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/img/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#6898de" }]
  ],
  locales: {
    "/": {
      lang: "ja"
    }
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Admin", link: "https://techpress.netlify.com/admin/" }
    ],

    smoothScroll: true,
    sidebar: "auto",
    sidebar: sidebarArray,

    displayAllHeaders: false, // デフォルト値：false
    activeHeaderLinks: true, // フォルト値：true
    lastUpdated: "Last Updated" // string | boolean
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "コンテンツ登録されました",
          buttonText: "更新"
        }
      }
    ]
  ]
};
