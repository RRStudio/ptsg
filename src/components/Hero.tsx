import type { JSX } from "solid-js";

type HeroProps = {
	title: string;
	children?: JSX.Element;
};

export default function Hero({ title, children }: HeroProps) {
	return (
		<div class="flex flex-col items-center text-center gap-12">
			<h1 class="text-8xl font-900 text-center m-0 pt-12">{title}</h1>
			<p class="text-xl text-center">{children}</p>
		</div>
	);
}
