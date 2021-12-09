/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Flex, Link } from 'theme-ui'
import Layout from '../gatsby-theme-blog/components/layout'
import SEO from '../gatsby-theme-blog/components/seo'

const ProjectCard = ({ title, description, image, href }) => (
	<Link
		href={href}
		sx={{
			backgroundColor: 'muted',
			textDecoration: 'none',
			flex: '0 0 21%',
			flexGrow: [1, 0],
			minWidth: '200px',
			px: 2,
			py: 1
		}}
	>
		<img
			width="100%"
			src={image}
			alt={`${title}'s preview`}
			sx={{
				display: 'block',
				mx: 'auto'
			}}
		/>
		<h2>{title}</h2>
		<p sx={{ color: 'text' }}>{description}</p>
	</Link>
)

const ProjectList = ({ projects }) => (
	<Flex sx={{
		flexWrap: 'wrap',
		gap: 2,
		justifyContent: ['center', 'normal']
	}}>
		{projects.map(project => (
			<ProjectCard {...project} />
		))}
	</Flex>
)

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
