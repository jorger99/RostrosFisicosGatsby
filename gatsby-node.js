
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const peopleTemplate = path.resolve(`src/components/templates/people.jsx`)

  return graphql(
    `
      query AllPeople {
        allPeopleCsv(sort: {fields: ID, order: DESC}) {
          nodes {
            ID
            FirstName
            LastName
            DateOfBirth
            Tags
            Biography
            Biography__2
          }
        }
      }
    `


  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create people pages.
    result.data.allPeopleCsv.nodes.forEach(person => {
      const slug = `people/` + person.FirstName + `-` + person.LastName

      createPage({
        path: slug,
        component: peopleTemplate,
        context: {
          ...person,
        },
      })
    })
  })
}
