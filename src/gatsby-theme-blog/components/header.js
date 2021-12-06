/** @jsx jsx */
import { jsx } from 'theme-ui'
import Nav from '../../components/Nav'

const Header = ({ children, title, ...props }) => (
  <header>
    <Nav title={title} />
  </header>
)

export default Header
