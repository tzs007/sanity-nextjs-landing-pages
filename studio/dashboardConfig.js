export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e380cf12dc1113e09ba460a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9exohix3',
                  apiId: '88d2e459-c25b-4252-89ef-cb532a0a780e'
                },
                {
                  buildHookId: '5e380cf149a8d8200101037f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tnm8usjf',
                  apiId: '749ac792-7393-4903-ae39-549c984e4db8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tzs007/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tnm8usjf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
