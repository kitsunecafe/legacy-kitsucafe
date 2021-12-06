/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import Link from './Link'

const Nav = ({ title, ...props }) => (
	<nav
		sx={{
			display: 'flex',
			backgroundColor: 'accent',
			textTransform: 'uppercase',
			justifyContent: 'center',
			alignItems: 'center',
			height: '50px',
			width: '100%',
			borderBottom: 1
		}}
		{...props}
	>
		<Flex sx={{
			width: ['95%', '95%', '95%', '100%'],
			maxWidth: 'container',
			justifyContent: 'space-between'
		}}>
			<Link to="/" sx={{
				textDecoration: 'none'
			}}>
				{title}
			</Link>
			<Flex sx={{
				justifyContent: 'end',
				gap: [2, 4],
				'& > *': {
					textDecoration: 'none'
				}
			}}>
				<Link to="/"><span>01</span> Projects</Link>
				<Link to="/blog/"><span>02</span> Blog</Link>
				<Link to="/about/"><span>03</span> About</Link>
			</Flex>
		</Flex>
	</nav>
)

export default Nav
