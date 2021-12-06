/** @jsx jsx */
import { Fragment } from 'react'
import { jsx, Themed } from 'theme-ui'
import { Link } from 'gatsby'
import Tooltip from '../../components/Tooltip'

const PostLink = ({ title, slug, date, excerpt }) => (
	<Fragment>
		<Tooltip text={excerpt}>
			<Themed.a
				as={Link}
				sx={{
					textTransform: 'uppercase',
					textDecoration: 'none',
					mr: 2
				}}
				to={slug}
			>
				{title || slug}
			</Themed.a>
			<small sx={{ textTransform: 'uppercase' }}>{date}</small>
		</Tooltip>
	</Fragment>
)

export default PostLink
