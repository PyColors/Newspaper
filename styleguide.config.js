module.exports = {
  sections: [
    {
      name: 'Introduction',
      content: 'src/documentation/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'src/documentation/installation.md'
        },
        {
          name: 'Configuration',
          content: 'src/documentation/configuration.md'
        }
      ]
    },
    {
      name: 'UI Components',
      content: 'src/documentation/ui.md',
      components: 'src/components/ui/**/*/*.js'
    }
  ]
};
