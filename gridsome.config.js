// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Here is the site description configured inside the gridsome.config.js file.',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },

  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'content/posts/**/*.md',
      typeName: 'Post',
      route: 'posts/:slug',
      remark: {
        plugins: [
          // ...local plugins
        ]
      },
      refs: {
        // Reference to existing authors by id.
        // author: 'Author',
        // Create a Tag content type and its nodes automatically.
        tags: {
          typeName: 'Tag',
          route: '/tags/:id',
          create: true
        }
      }
    }
  },
  {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      publicPath: `/admin`
    }
  },
  {
    use: `gridsome-plugin-netlify-cms-paths`,
    options: {
      contentTypes: ['Post'],
      coverField: 'cover_image'
    }
  },
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: true,
      shouldImport: true,
      shouldTimeTravel: true,
    }
  },
  ]
}