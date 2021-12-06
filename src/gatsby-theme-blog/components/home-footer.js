import { useStaticQuery, graphql } from 'gatsby'
import { Flex, jsx, css, IconButton } from 'theme-ui'

const Line = () => (
  <div sx={{
    borderLeft: '1px solid',
    height: '100px'
  }} />
)

const Footer = (props) => {
  return (
    <footer
      sx={{
        width: '100%',
        maxWidth: 'container',
        margin: 'auto'
      }}
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Line />
        <Line />
      </Flex>
    </footer>
  )
}

export default Footer
