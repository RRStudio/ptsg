import { A } from "@solidjs/router";
import type { JSX } from "solid-js";

export type LinkProps = {
	variant?: "link" | "inline-link" | "button";
	href: string;
	class?: string;
	children?: JSX.Element;
};

export default function Link({
	variant = "link",
	children,
	...props
}: LinkProps) {
	function getClass() {
		const link =
			"text-neutral-400 text-md font-bold hover:text-neutral-900 hover:underline transition-color duration-200";

		switch (variant) {
			case "link":
				return link;
			case "inline-link":
				return `${link} text-neutral-900`;
			case "button":
				return "bg-secondary rounded-lg text-neutral-0 font-bold text-lg px-5 py-3 cursor-pointer hover:brightness-80 transition-brightness duration-200";
		}
	}

	return (
		<A
			{...props}
			class={`${getClass()} text-center w-max flex-grow-0 ${props.class || ""}`}
		>
			{children}
		</A>
	);
}
