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
    ["link", { rel: "icon", type: "image/png", href: "/img/favicon.png" }],
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
    ["meta", { name: "og:image", content: "/img/favicon.png" }],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/netlify-identity-widget@1.5.2/build/netlify-identity-widget.min.js"
      }
    ],
    ['meta', { name: 'theme-color', content: '#3aabd2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#3aabd2' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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
