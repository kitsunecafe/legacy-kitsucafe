/** @jsx jsx */
import { jsx, Link as ThemeLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, ...props }) => (
	<ThemeLink as={GatsbyLink} {...props}>{children}</ThemeLink>
)

export default Link
