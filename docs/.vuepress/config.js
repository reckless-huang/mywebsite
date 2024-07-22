import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'

module.exports = ({
    bundler: viteBundler(),
    theme: defaultTheme(
        {
            navbar: [
                {
                    text: '首页',
                    link: '/'
                },
                {
                    text: 'k8s',
                    link: '/k8s/'
                },
                {
                    text: 'linux',
                    link: '/linux/'
                }
            ],
            logo: '/k8s.png',
            repo: 'https://github.com/reckless-huang/mywebsite',
            docsBranch: "master",
            docsDir: 'docs',
            sidebar: "heading",
        }
    ),
    lang: 'zh-CN',
    title: '记录每一次成长',  // 站点的标题
    description: 'k8s linux devops 运维开发 云原生 gopher golang ', // SEO
    base: '/mywebsite/',  // 部署站点的基础路径
    themeConfig: {},
})