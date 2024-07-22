import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),
    lang: 'zh-CN',
    title: '记录每一次成长',  // 站点的标题
    description: 'k8s linux devops 运维开发 云原生 gopher golang ', // SEO
    base: '/mywebsite/',  // 部署站点的基础路径
})