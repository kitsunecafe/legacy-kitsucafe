import solarized from './solarized'

const theme = {
	...solarized,
	fonts: {
		body: '"Inconsolata", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
	},
	sizes: {
		container: '856px'
	},
	styles: {
		root: {
			overflowY: 'scroll',
			overflowX: 'hidden'
		},
		h2: {
			a: {
				color: 'heading'
			}
		},
		blockquote: {
			backgroundColor: 'muted',
			paddingLeft: '8px'
		}
	}
}

export default theme
