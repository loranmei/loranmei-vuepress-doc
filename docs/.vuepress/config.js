const ReadFile = require('./siderbar')

module.exports = {
  "title": "Loran Mei",
  "description": "梅柳春的个人博客",
  "dest": "public",
  // "base": "/",
  // "base": "/doc/",
  "base": "/loranmei-vuepress-doc/",
  "head": [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ['meta', {name: 'keywords', content: 'Loran,Mei,梅柳春,个人,博客'}],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxx"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
  ],
  "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    sidebarDepth: 3,
    "valineConfig": {
      "appId": 'vo7kuRNVRq97YAIlYafvTHAz-gzGzoHsz',
      "appKey": 'Bv72KAVyCzvNq8TAKcd95eGJ',
    },
    "nav": [
      {text: '主页', link: '/', icon: 'reco-home'},
      {
        text: '文档',
        items: [
          {"text": "文档", "link": "/sidebar/"},
          {"text": "文档组", "link": "/sidebargroup/"}
        ]
      },
      {text: "时间线", link: "/timeline/", "icon": "reco-date"},
      {text: '留言板', link: '/views/messageBoard.html', "icon": 'reco-suggestion'},
      {text: '关于', link: '/about.html', icon: 'reco-account'},
      {
        text: "Contact", icon: "reco-message",
        items: [
          {"text": "GitHub", "link": "https://github.com/loranmei/loranmei-vuepress-doc", "icon": "reco-github"}
        ]
      }
    ],
    sidebar: {
      // '/sidebar/': [
      //   '',
      //   'bar1',
      //   'bar2'
      // ],
      // '/sidebargroup/': [
      //   {
      //     title: '基础',
      //     collapsable: true,
      //     children: [
      //       '',
      //       'bar11'
      //     ]
      //   },
      //   {
      //     title: '进阶',
      //     collapsable: true,
      //     children: [
      //       'bar22'
      //     ]
      //   },
      // ],
      '/sidebar/': ReadFile('/docs/sidebar'),
      '/sidebargroup/': ReadFile('/docs/sidebargroup')
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      socialLinks: [
        {icon: 'reco-github', link: 'https://github.com/loranmei/loranmei-vuepress-doc'}
      ]
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "logo": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      },
      {
        "title": "loranmei",
        "desc": "A springcloud & springboot & nacos Blog.",
        "logo": "/logo.png",
        "link": "http://blog.loranmei.cn"
      }
    ],
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
    noFoundPageByTencent: false,
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "梅柳春",
    "authorAvatar": "/avatar.jpg",
    "record": "首页",
    "startYear": "2020",
    "record": "豫ICP备19047220号-2"
  },
  "markdown": {
    "lineNumbers": true
  }
}
