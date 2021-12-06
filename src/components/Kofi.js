/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from './Link'

export default function Kofi({ id }) {
	return (
		<Link to={`https://ko-fi.com/${id}`} target='_blank'>
			<img
				height='36'
				sx= {{
					border: 0,
					height: '36px'
				}}
				src='https://cdn.ko-fi.com/cdn/kofi2.png?v=3'
				border='0'
				alt='Buy Me a Coffee at ko-fi.com' />
		</Link>
	)
}