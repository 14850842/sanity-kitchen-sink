export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeb71e79e2234e5b75e7915',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q8eg7qkc',
                  apiId: 'b231150b-f0fe-46c1-a8b3-c76d5f4e7135'
                },
                {
                  buildHookId: '5eeb71e711a0a913d97ca228',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mnx1t9tv',
                  apiId: '5ecc2060-602f-4e8d-97ae-c8d0c87c289f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/14850842/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mnx1t9tv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
