/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Themed } from 'theme-ui'
// import { Link } from 'gatsby'
import Link from '../../components/Link'
import Tooltip from '../../components/Tooltip'

const PostLink = ({ title, slug, date, excerpt }) => (
	<Fragment>
		<Tooltip text={excerpt}>
			<Link
				// as={Link}
				sx={{
					textTransform: 'uppercase',
					textDecoration: 'none',
					mr: 2
				}}
				to={slug}
			>
				{title || slug}
			</Link>
			<small sx={{ textTransform: 'uppercase' }}>{date}</small>
		</Tooltip>
	</Fragment>
)

export default PostLink
