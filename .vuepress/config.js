const fs = require('fs');
const path = require('path');

var dirpath = "./docs"

var dirs = fs.readdirSync(dirpath).filter((f) => {
  return fs.existsSync(dirpath + "/" + f) && fs.statSync(dirpath + "/" + f).isDirectory()
})

var sidebarArray = ["/"].concat(dirs.map((dir) => {
  return {
    title: dir,
    collapsable: true,
    children: fs.readdirSync(dirpath + "/" + dir).map((childDir) => {
      return dirpath + "/" + dir + "/" + childDir
    })
  }
}))

module.exports = {
  title: 'TechPress',
  description: '技術共有',
  dest: 'pages',
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/img/favicon.png" }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/netlify-identity-widget@1.5.2/build/netlify-identity-widget.min.js'}]
  ],
  locales: {
    "/": {
      lang: "ja",
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Admin', link: '/admin' }
    ],

    smoothScroll: true,
    sidebar: 'auto',
    sidebar: sidebarArray,

    displayAllHeaders: true, // デフォルト値：false
    activeHeaderLinks: true, // フォルト値：true
    lastUpdated: 'Last Updated', // string | boolean

    serviceWorker: {
      updatePopup: true // Boolean | Object, フォルト値 undefined.
      // trueに設定されている場合、デフォルトのテキスト設定は:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },

    // GitHubを想定しています。GitLabの完全なURLにすることもできます
    repo: '',
    // カスタムウェアハウスリンクテキスト。 「themeConfig.repo」から次のように自動的に推測されます
    // 「GitHub」/「GitLab」/「Bitbucket」、または「ソース」のいずれか。
    repoLabel: 'Github',

    // 以下オプション
    // docsRepo: 'DemoMacro/VueCMS',
    // docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    //editLinkText: ''
  }
}
