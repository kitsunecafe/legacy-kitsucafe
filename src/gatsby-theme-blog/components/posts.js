import * as React from 'react'
import Layout from './layout'
import SEO from './seo'
import PostList from './post-list'

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Blog" />
    <main>
      <PostList posts={posts} />
    </main>
  </Layout>
)

export default Posts
