/** @jsx jsx */
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { css, jsx } from 'theme-ui'
import { SkipNavContent } from '@reach/skip-nav'
import Header from './header'
import useBlogThemeConfig from 'gatsby-theme-blog/src/hooks/configOptions'
import SocialLinkList from '../../components/SocialLinkList'

const Layout = ({ children, title: _, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig
  const data = useStaticQuery(socialQuery)
  const {
    site: {
      siteMetadata: {
        displayTitle: title,
        social
      },
    }
  } = data

  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header title={title} {...props} />
      <SkipNavContent />
      <div>
        <div
          sx={{
            maxWidth: 'container',
            width: '100%',
          }}
          css={css({
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <SocialLinkList socials={social} />
          {children}
        </div>
      </div>
    </Fragment>
  )
}

export const socialQuery = graphql`
	query SocialQuery {
		site {
			siteMetadata {
        displayTitle
				social {
					name
					icon
					url
				}
			}
		}
	}
`

export default Layout
