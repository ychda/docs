const pkg = require('../../package.json')

module.exports = {
    base: '/docs/',
    title: 'Hello, World!',
    lang: 'zh-CN',
    description: '回首向来萧瑟处，归去，也无风雨也无晴。',
    lastUpdated: true,
    head: [
        // todo
        ['link', {rel: 'icon', type: 'image/png', href: 'psvm.png'}]
    ],

    themeConfig: {
        repo: pkg.repository,
        docsDir: 'docs',
        docsBranch: 'master',
        logo: '/psvm.png',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后修改于',

        nav: [
            {text: '资料', link: '/docs/'},
            {text: '算法', link: '/algorithm/'},
            {
                text: 'YHZ',
                items: [
                    {text: '书', link: '/yhz/books'},
                    {text: '电影', link: '/yhz/films'},
                    {text: '古诗文', link: '/yhz/gu-shi-wen'},
                    {text: '教育部阅读目录', link: '/yhz/read-list-2020'},
                    {text: '帮助文件', link: '/yhz/help'},
                ]
            },
            {text: '链接', link: '/link'},
            {
                text: '相关链接',
                items: [
                    {text: 'Twitter', link: 'https://twitter.com/ychda'},
                    {text: 'About', link: '/about'},
                ]
            },
        ],

        sidebar: {
            '/docs/': [
                {
                    text: '资料',
                    children: [
                        {text: 'git', link: '/docs/git'},
                    ]
                },
                {
                    text: '其他',
                    children: [
                        {text: '这里还有什么？', link: '/yhz/more',},
                    ]
                },
            ],
            // '/algorithm/': 'auto',
            '/yhz/': [
                {
                    text: '资料',
                    children: [
                        {text: '古诗文', link: '/yhz/gu-shi-wen'},
                        {text: '电影', link: '/yhz/films'},
                        {text: '书', link: '/yhz/books'},
                        {text: '教育部阅读目录', link: '/yhz/read-list-2020'},
                        {text: '帮助文件', link: '/yhz/help'},
                    ]
                },
                {
                    text: '其他',
                    children: [
                        {text: '这里还有什么？', link: '/yhz/more',},
                    ]
                },
            ],
            // catch-all fallback
            '/': [
                {
                    text: '指引',
                    children: [
                        {text: '算法', link: '/algorithm/',},
                        // {text: '这里有什么？', link: '/docs/what',},
                    ]
                },
                {
                    text: '其他',
                    children: [
                        {text: '这里还有什么？', link: '/docs/more',},
                    ]
                },
            ]
        }
    }
}
