import * as Palette from './palette'
import solarizedDark from './solarized-dark'
import solarizedLight from './solarized-light'

const theme = {
	colors: {
    text: Palette.base0,
    primary: Palette.orange,
    secondary: Palette.yellow,
    heading: Palette.red,
    link: Palette.yellow,
		...solarizedDark,
		modes: {
			dark: {
				...solarizedDark
			},
			light: {
				...solarizedLight
			}
		}
	}
}

export default theme
