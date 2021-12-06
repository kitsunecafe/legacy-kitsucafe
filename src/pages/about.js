/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx } from 'theme-ui'
import Link from '../components/Link'
import Layout from '../gatsby-theme-blog/components/layout'
import SEO from '../gatsby-theme-blog/components/seo'

const About = ({ data }) => (
	<Layout title={data.site.siteMetadata.title}>
    <SEO title="About" />
		<p>i am a game developer, an artist, a musician, and an author.</p>
		<p>
			feel free to follow me on my socials if you like what i create.
			i am sometimes a reclusive person so i may go long periods of time without posting very often.
		</p>
		<p>this site highlights my work and opinions as a creator. this is not a resume. i am not looking for work.</p>
		<p>if you would like to contact me, you may do so at <Link to="mailto:shibamet@protonmail.com">shibamet@protonmail.com</Link></p>
	</Layout>
)

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default About
