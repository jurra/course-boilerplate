const fs = require('fs')
const path = require('path')
const { buildContents, buildSidebar } = require('metacon')

// let contents = require('./contents.data.json')
// contents = contents.contents
// console.log(contents)
// let modules = buildSidebar(contents, '../' + __dirname)
// console.log(modules)

let dirPath = path.join(__dirname, '../')
let dirContents = path.join(process.cwd(), '/src/')
let contents = buildContents(dirPath, dirContents)
console.log(contents)
// let modules = buildSidebar(contents, dirPath)
// console.log(modules)

fs.readdir(dirPath, function (err, files) {
  //handling error
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  } 
  //listing all files using forEach
  files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file); 
  });
});

module.exports = {
  title: 'Hello VuePress',
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'https://github.com/DavidCouronne/vuepress-tailwind',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'https://github.com/DavidCouronne/vuepress-tailwind',
    // if your docs are not at the root of the repo:
    docsDir: 'src',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/content/' },
      { text: 'Blog', link: '/blog/' },
    ],
    // sidebar: modules
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    '@vuepress/pwa',
    'vuepress-plugin-reading-time',
  ],

  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  }
}


