import logo from "./assets/ptsg_logo.svg";
import Button from "./Button";
import IconLink from "./IconLink";
import Link from "./Link";

// TODO: navigation menu
// TODO: embedded google form
// TODO: match google form colors
// TODO: icon: telegram
// TODO: icon: facebook
// TODO: link: spotify
// TODO: link: apple music
// TODO: about us
// TODO: footer
// TODO: copyright w/ current year
// TODO: rss feed
// TODO: content
// TODO: test light mode
// TODO: test dark mode
// TODO: deploy somewhere
// TODO: desktop
// TODO: laptop
// TODO: mobile
export default function App() {
	return (
		<div class="flex flex-col items-center p-8">
			<div class="flex items-center gap-4">
				<a href="/">
					<img src={logo} width="200" height="200" alt="Logo" />
				</a>
				<Link href="/about">אודות</Link>
				<Link href="/episodes">פרקים</Link>
				<Link href="/episodes">צור קשר</Link>
				<div />
				<IconLink icon="i-fa6-brands-telegram" href="https://t.me/ptsgdev" />
				<IconLink
					icon="i-fa6-brands-facebook"
					href="https://www.facebook.com/groups/ptsgdev"
				/>
			</div>
			<Button
				onClick={() =>
					window.open("https://forms.gle/bRmy3ycbKwPto4dT8", "_blank")
				}
			>
				שלח לנו שאלה!
			</Button>
		</div>
	);
}
