module.exports = {
    base: '/vue-press-docs/', // 比如你的仓库是test
    title: '菜鸡前端的自我拯救', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'Hit的前端笔记', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/菜鸡前端的自我拯救.JPG' }], //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    plugins: ['demo-container'],
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
                    { text: 'TypeScript', link: '/pages/typeScript/base.md' },
                    { text: 'http系列', link: '/pages/http/http.md' },
                    { text: '前端工程化系列', link: '/pages/project/guide.md' },
                    { text: 'node系列', link: '/pages/node/node.md' },
                    { text: '浏览器系列', link: '/pages/browser/browser.md' },
                    { text: '框架使用系列', link: '/pages/framework/nextTick.md' },
                    { text: '框架源码系列', link: '/pages/framework-source/vue-source.md' },
                    { text: '性能优化系列', link: '/pages/optimization/vue-code.md' },
                    { text: '前端做直播', link: '/pages/live/live.md' },
                    { text: '学习计划', link: '/pages/study/todo.md' },

                    // { text: '199管理类联考', link: '/pages/management/math.md' },
                ]
            },
            { text: 'Github', link: 'https://github.com/Huhui-coder' },
        ],
        sidebar: {
            '/pages/html/': [{
                title: 'html', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['html.md', 'html']
                ]
            }],
            '/pages/css/': [{
                    title: 'css', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['css.md', 'css']
                    ]
                },
                {
                    title: '盒子模型', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['盒子模型.md', '盒子模型']
                    ]
                },
                
                {
                    title: 'flex', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['flex.md', 'flex']
                    ]
                },
                {
                    title: 'grid', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['grid.md', 'grid']
                    ]
                },
                {
                    title: 'css预处理器', // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['less.md', 'less']
                    ]
                }
            ],
            '/pages/http/': [{
                    title: 'http', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['http.md', 'http协议'],
                        ['http缓存.md', 'http缓存']
                    ]
                },
                {
                    title: 'cookie', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['cookie.md', 'cookie']
                    ]
                }
            ],
            '/pages/project/': [{
                title: '前端工程化', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['guide.md', '代码规范'],
                    ['specification.md', '项目配置'],
                    ['webpack.md', 'webpack']
                ]
            }],
            '/pages/javaScript/': [
                {
                    title: '核心知识详解', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['1_数据类型.md', '数据类型'],
                        ['2_类型判断.md', '类型判断'],
                        ['3_类型转换.md', '类型转换'],
                        ['4_this.md', 'this'],
                        ['5_闭包.md', '闭包'],
                        ['6_作用域.md', '作用域'],
                        ['7_变量提升.md', '变量提升'],
                        ['8_new.md', 'new'],
                        ['9_call,apply,bind.md', 'call'],
                        ['10_原型.md', '原型'],
                        ['11_Class.md', 'Class'],
                        ['12_继承.md', '继承'],
                        ['13_模块化.md', '模块化'],
                        ['14_Promise.md', 'Promise'],
                        ['15_迭代器与生成器.md', '迭代器与生成器'],
                        ['16_async await.md', 'async'],
                        ['17_事件循环.md', '事件循环'],
                        ['18_节流与防抖.md', '节流与防抖'],
                        ['19_柯里化.md', '柯里化'],
                        ['20_垃圾回收.md', '垃圾回收'],
                        ['21_其他零散但重要的知识.md', '其他零散但重要的知识'],
                    ]
                },{
                    title: 'Object.freeze()和const', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['Object.freeze()和const.md', 'Object.freeze()&const']
                    ]
                },
                {
                    title: 'ES6', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['let.md', 'let 与 const'],
                        ['defineProperty.md', 'defineProperty 与 proxy'],
                        ['Generator.md', 'Generator']
                    ]
                },
                {
                    title: '手写系列', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['source-write-call.md', 'call,apply,bind'],
                        ['source-write-promise.md', 'promise']
                    ]
                },
                {
                    title: '实现继承', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['inherit.md', '实现继承']
                    ]
                }
            ],
            '/pages/node/': [{
                title: 'node', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['node.md', 'node']
                ]
            }],
            '/pages/browser/': [{
                title: '浏览器', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['browser.md', '前端攻击技术'],
                    ['storage.md', '前端存储技术']
                ]
            }],
            '/pages/framework/': [{
                    title: 'vue框架使用', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['nextTick.md', 'nextTick']
                    ]
                },
                {
                    title: 'react框架使用', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
                    children: [
                        ['hook.md', 'hook']
                    ]
                }
            ],
            '/pages/framework-source/': [{
                title: '框架源码', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['vue-source.md', 'vue'],
                    ['react-source.md', 'react']
                ]
            }],
            '/pages/optimization/': [{
                title: '性能优化', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['性能优化关键要素.md', '性能优化关键要素'],
                    ['vue-code.md', 'vue代码层面'],
                    ['webpack.md', 'webpack配置层面']
                ]
            }],
            '/pages/folder1/': [{
                    title: '测试菜单1', // 必要的
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 10, // 可选的, 默认值是 1
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
            '/pages/live/': [{
                title: 'live', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['live.md', 'live']
                ]
            }],
            '/pages/study/': [{
                title: 'todo', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['todo.md', 'todo'],
                    ['cq.md', 'ChongQing']
                ]
            }],
            '/pages/ts/': [{
                title: 'base', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['base.md', 'base']
                ]
            }],
            '/pages/management/': [{
                title: '199管理类联考', // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 10, // 可选的, 默认值是 1
                children: [
                    ['math.md', '数学'],
                    ['logic.md', '逻辑判断'],
                    ['write.md', '写作']
                ]
            }],
        }
    }
}