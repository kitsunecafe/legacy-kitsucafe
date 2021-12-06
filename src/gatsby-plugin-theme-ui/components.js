/** @jsx jsx */
import Prism from "@theme-ui/prism"
import { jsx } from "theme-ui"
import shadowedComponents from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/components'
import PrismCore from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-csharp'

const components = {
	...shadowedComponents,
  code: props => <Prism {...props} Prism={PrismCore} />
}

export default components
