/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import Layout from '../gatsby-theme-blog/components/layout'
import SEO from '../gatsby-theme-blog/components/seo'
import ProjectList from '../components/ProjectList'

const projectsFromQuery = data => data.allProjectsJson.edges.map(edge => edge.node)

const Home = ({ data }) => (
	<Layout title={data.site.siteMetadata.title}>
    <SEO title="Projects" />
		<main>
			<ProjectList projects={projectsFromQuery(data)} />
		</main>
	</Layout>
)

export const query = graphql`
	query HomeQuery {
		site {
			siteMetadata {
				title
			}
		}
		allProjectsJson(sort: { order: DESC, fields: date }) {
			edges {
				node {
					title
					date
					image
					description
					href
				}
			}
		}
	}
`

export default Home
