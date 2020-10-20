module.exports = {
    base: '/vue-press-docs/', // 比如你的仓库是test
    title: '走路人', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Hit的前端笔记', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/egg.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/egg.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'http系列', link: '/pages/http/cookie.md' },
                    { text: 'javaScript系列', link: '/pages/javaScript/Object.freeze()和const.md' },
                    { text: '文章', link: '/pages/folder1/test1.md' },
                    { text: '琐碎', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/Huhui-coder' },
        ],
        sidebar: {
            '/pages/http/':[
                {
                    title: 'cookie',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['cookie.md', 'cookie']
                    ]
                }
            ],
            '/pages/javaScript/':[
                {
                    title: 'Object.freeze()和const',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['Object.freeze()和const.md', 'Object.freeze()和const']
                    ]
                }
            ],
            '/pages/folder1/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
        }
    }
}