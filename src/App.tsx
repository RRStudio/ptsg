import logo from "./assets/ptsg_logo.svg";
import IconLink from "./IconLink";
import Link from "./Link";
import PlatformLink from "./PlatformLink";

// TODO: navigation menu
// TODO: embedded google form: https://forms.gle/bRmy3ycbKwPto4dT8
// TODO: match google form colors
// TODO: link: spotify
// TODO: link: apple music
// TODO: about us
// TODO: footer
// TODO: copyright w/ current year
// TODO: episodes
// TODO: listen to episode
// TODO: search episodes
// TODO: content
// TODO: desktop
// TODO: laptop
// TODO: mobile
// TODO: deploy somewhere
export default function App() {
	return (
		<div class="w-full h-full p-8 flex justify-center">
			<div class="flex flex-col items-center gap-12">
				<TopNav />
				<Hero />
				<div class="h-10" />
				<AskUs />
			</div>
		</div>
	);
}

function TopNav() {
	return (
		<div class="w-full flex justify-between items-center gap-8">
			<div class="flex justify-center items-center gap-8">
				<a href="/">
					<img src={logo} width="240" height="240" alt="Logo" />
				</a>
				<Link href="/about">אודות</Link>
				<Link href="/episodes">פרקים</Link>
				<Link href="/ask">שאל אותנו שאלה</Link>
				<Link href="/contact">צור קשר</Link>
			</div>

			<div class="flex gap-3">
				<IconLink icon="i-fa6-brands-telegram" href="https://t.me/ptsgdev" />
				<IconLink
					icon="i-fa6-brands-facebook"
					href="https://www.facebook.com/groups/ptsgdev"
				/>
			</div>
		</div>
	);
}

function Hero() {
	return (
		<>
			<h1 class="text-8xl font-900 text-center m-0">כל מה שלא טכני בהייטק</h1>

			<p class="text-xl text-center">
				<span class="text-primary font-bold">פותחים סוגריים</span> הוא פודקאסט
				שבועי על כל מה שלא טכני בהייטק (ואולי גם כן).
				<br />
				<Link variant="inline-link" href="/about">
					אנחנו
				</Link>{" "}
				נענה על השאלות שלכם, וניתן את התשובות הנכונות (והלא נכונות) - כדאי לכם
				להקשיב לנו, כי ככה.
			</p>

			<div class="flex items-center gap-10" dir="ltr">
				<PlatformLink platform="spotify" href="https://spotify.com" />
				<PlatformLink platform="apple" href="https://podcasts.apple.com" />
			</div>
		</>
	);
}

function AskUs() {
	return (
		<div class="flex flex-col items-center gap-3">
			<span class="text-xl font-bold">יש לך שאלה לרון ורועי?</span>
			<Link variant="button" href="/ask">
				שאל אותנו שאלה
			</Link>
		</div>
	);
}
