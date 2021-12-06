/** @jsx jsx */
import { Divider, Flex, jsx } from 'theme-ui'
import SocialLink from '../components/SocialLink'

const SocialLinkList = ({ socials }) => (
	<Flex sx={{ alignItems: 'center' }}>
		<Divider sx={{ flexGrow: 1 }} />
		{socials.map(social => SocialLink({ key: social.name, ...social }))}
		<Divider sx={{ flexGrow: 1 }} />
	</Flex>
)

export default SocialLinkList
