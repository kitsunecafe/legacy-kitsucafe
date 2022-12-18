/** @jsx jsx */
import { jsx } from 'theme-ui'
import DiscordIcon from '../icons/discord.svg'
import LinkIcon from '../icons/external-link.svg'
import GithubIcon from '../icons/github.svg'
import ItchIOIcon from '../icons/itchdotio.svg'
import MastodonIcon from '../icons/mastodon.svg'
import SteamIcon from '../icons/steam.svg'
import TwitterIcon from '../icons/twitter.svg'

// Ugly hack to make up for Gatsby not having dynamic imports
const Icons = {
	twitter: TwitterIcon,
	github: GithubIcon,
	steam: SteamIcon,
	itchio: ItchIOIcon,
	mastodon: MastodonIcon,
	discord: DiscordIcon,
	noMatch: LinkIcon
}


const getIcon = name => Icons.hasOwnProperty(name.toLowerCase()) ? Icons[name.toLowerCase()] : Icons.noMatch

const Icon = ({ name, ...props }) => {
	const Selected = getIcon(name)
	return <Selected {...props} />
}

const SocialLink = ({ name, url, icon, ...props }) => {
	return (
		<a href={url} sx={{ mx: 2 }} {...props}>
			<Icon height="24" width="24" name={name} sx={{ fill: 'primary' }} />
		</a>
	)
}

export default SocialLink
