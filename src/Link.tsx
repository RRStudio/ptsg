import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
	variant?: "link" | "inline-link" | "button";
};

export default function Link({ variant = "link", ...props }: LinkProps) {
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
		<a
			{...props}
			class={`${getClass()} text-center w-max flex-grow-0 ${props.class}`}
		/>
	);
}
