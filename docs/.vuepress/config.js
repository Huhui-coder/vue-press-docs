module.exports = {
    base: '/vue-press-docs/', // 比如你的仓库是test
    title: '菜鸡前端的自我拯救', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Hit的前端笔记', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/hit.JPG' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/hit.JPG',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: 'html系列', link: '/pages/html/html.md' },
                    { text: 'css系列', link: '/pages/css/css.md' },
                    { text: 'javaScript系列', link: '/pages/javaScript/Object.freeze()和const.md' },
                    { text: 'http系列', link: '/pages/http/cookie.md' },
                    { text: '前端工程化系列', link: '/pages/project/project.md' },
                    { text: 'node系列', link: '/pages/node/node.md' },
                    { text: '浏览器系列', link: '/pages/browser/browser.md' },
                    { text: '框架使用系列', link: '/pages/framework/framework.md' },
                    { text: '框架源码系列', link: '/pages/framework-source/framework-source.md' },
                    { text: '性能优化系列', link: '/pages/optimization/vue-code.md' },
                ]
            },
            { text: 'Github', link: 'https://github.com/Huhui-coder' },
        ],
        sidebar: {
            '/pages/html/':[
                {
                    title: 'html',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['html.md', 'html']
                    ]
                }
            ],
            '/pages/css/':[
                {
                    title: 'css',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10,    // 可选的, 默认值是 1
                    children: [
                        ['css.md', 'css']
                    ]
                },
                {
                    title: 'grid',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10,    // 可选的, 默认值是 1
                    children: [
                        ['grid.md', 'grid']
                    ]
                },
                {
                    title: 'flex',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10,    // 可选的, 默认值是 1
                    children: [
                        ['flex.md', 'flex']
                    ]
                }
            ],
            '/pages/http/':[
                {
                    title: 'cookie',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['cookie.md', 'cookie']
                    ]
                }
            ],
            '/pages/project/':[
                {
                    title: '前端工程化',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['project.md', 'webpack']
                    ]
                }
            ],
            '/pages/javaScript/':[
                {
                    title: 'Object.freeze()和const',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['Object.freeze()和const.md', 'Object.freeze()和const']
                    ]
                }
            ],
            '/pages/node/':[
                {
                    title: 'node',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['node.md', 'node']
                    ]
                }
            ],
            '/pages/browser/':[
                {
                    title: '浏览器',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['browser.md', '前端攻击技术']
                    ]
                }
            ],
            '/pages/framework/':[
                {
                    title: '框架使用',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['framework.md', 'vue']
                    ]
                }
            ],
            '/pages/framework-source/':[
                {
                    title: '框架源码',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['framework-source.md', 'vue']
                    ]
                }
            ],
            '/pages/optimization/':[
                {
                    title: '性能优化',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['vue-code.md', 'vue代码层面'],
                        ['webpack.md', 'webpack配置层面']
                    ]
                }
            ],
            '/pages/folder1/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
        }
    }
}