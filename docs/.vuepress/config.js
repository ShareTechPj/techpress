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
    ]
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
  }
};
