import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Themed, css, Flex } from "theme-ui"
import BioContent from "./bio-content"

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: {
        displayAuthor: author,
        kofiId
      }
    }
  } = data

  return (
    <Flex css={css({ mb: 4, alignItems: `center` })}>
      <Themed.div>
        <BioContent author={author} kofiId={kofiId} />
      </Themed.div>
    </Flex>
  )
}

const bioQuery = graphql`
  query AuthorQuery {
    site {
      siteMetadata {
        displayAuthor
        kofiId
      }
    }
  }
`

export default Bio
