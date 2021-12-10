/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'
import PostLink from './post-link'

const PostList = ({ posts }) => (
  <ol sx={{
    listStyleType: 'none',
    pl: 0
  }}>
    {posts.map((node) => (
      <li key={node.slug} >
        <Flex>
          <PostLink {...node} />
        </Flex>
      </li>
    ))}
  </ol>
)

export default PostList
