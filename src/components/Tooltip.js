/** @jsx jsx */
import { jsx } from 'theme-ui'

const Tooltip = ({ text, children }) => (
	<aside sx={{
		position: 'relative',
		display: 'inline-block',
		'&:hover span': {
			opacity: [0, 1],
			visibility: ['hidden', 'visible'],
		}
	}}>
		{children}
		<span sx={{
			visibility: 'hidden',
			opacity: 0,
			transition: 'opacity 1s',
			width: '200px',
			position: 'absolute',
			zIndex: 1,
			top: '150%',
			left: '50%',
			backgroundColor: 'accent',
			color: 'text',
			paddingX: 2,
			borderRadius: '8px',
			'&::after': {
				content: '""',
				position: 'absolute',
				bottom: '100%',
				left: '50%',
				marginLeft: '-5px',
				borderWidth: '5px',
				borderStyle: 'solid',
				borderColor: 'transparent transparent black transparent'
			}
		}}>
			{text}
		</span>
	</aside >
)

export default Tooltip
