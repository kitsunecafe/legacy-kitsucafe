/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import { Link } from 'theme-ui'

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

export default ProjectList
