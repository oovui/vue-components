module.exports = {
  title: '@oovui/vueui', // 设置网站标题
  logo:'http://itshizhan.com/static/media/logo.effcf88b.png',
  base: '/',
  description: 'a UI components library based on vue', //描述
  dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    repo: 'oovui/vueui',
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件', link: '/components/guides/get-start.html' },
      { text: '更新日志', link: 'https://github.com/oovui/vueui/changelog.md' },
      {
        text: '生态',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'oovui-cli', link: 'https://github.com/oovui/vueui' },
          { text: 'oovui/admin', link: 'https://github.com/oovui/admin' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:[
      {
        title: '使用指南',
        collapsable: false,
        children: [
          '/components/guides/get-start',
          '/components/guides/use-vue-cli',
          '/components/guides/use-typescript',
          '/components/guides/colors',
          '/components/guides/fonts',
          '/components/guides/icons',
          '/components/guides/utilities'
        ]
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [ 
          '/components/basic/buttons',
        ]
      },
      {
        title: '业务组件',
        collapsable: false,
        children: [ /* ... */ ]
      }
    ]
    /*
    sidebar:{
      '/guides/':[
        'md/logs',
        'md/colors',
        'md/fonts',
        'md/icons',
        'md/utilities'
      ],
      '/baseComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/test1',
            'base/test2',
            'base/test3',
            'base/test4',
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'CSS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'JS知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'node知识库',
          collapsable: false,
          children: [
          ]
        },
        {
          title: 'vue知识库',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
    */
  }
}