module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {}
    }
  ],
  siteMetadata: {
    title: 'AntV',
    description: 'Gatsby starter of antv theme',
    siteUrl: 'https://gatsby-starter-theme-antv.antv.vision',
    githubUrl: 'https://github.com/antvis/antvis.github.io',
    navs: [
      {
        slug: 'docs/specification/getting-started',
        title: {
          zh: '设计语言',
          en: 'Specification'
        }
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples'
        }
      },
      {
        slug: 'independent',
        title: {
          zh: '独立',
          en: 'MyApp'
        }
        // target: '_blank',
      }
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1'
        },
        order: 4
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level'
        },
        order: 2
      }
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category'
        }
      }
    ],
    playground: {
      container: '<div id="container" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");'
    },
    redirects: []
  }
};
