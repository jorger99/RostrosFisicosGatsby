// gatsby-node.js
const path = require(`path`);
const fs = require('fs');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const pageData = JSON.parse(fs.readFileSync('./src/people/data.json', { encoding: 'utf-8' }));
  const personTemplate = path.resolve('./src/components/person_template.js');

  pageData.pages.forEach(page => {
    createPage({
      path: page.slug,
      component: personTemplate,
      context: {
        ...page,
      },
    });
  });
};
