/** @jsx jsx */
import { jsx } from 'theme-ui'

const List = ({ horizontal = false, children, ...props }) => (
	<ul
		{...props}
		sx={{
			...(horizontal && {
				'& > li': {
					display: 'inline-block',
					zoom: 1,
					'*display': 'inline'
				},
				'& > li:not(:first-of-type)': {
					marginLeft: '2rem'
				}
			})
		}}
	>
		{children}
	</ul>
)

export default List
