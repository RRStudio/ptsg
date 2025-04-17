import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
	style?: "link" | "inline-link" | "button";
};

export default function Link({ style = "link", ...props }: LinkProps) {
	function getClass() {
		const link =
			"text-neutral-400 text-md font-bold hover:text-neutral-900 hover:underline transition-color duration-200";

		switch (style) {
			case "link":
				return link;
			case "inline-link":
				return `${link} text-neutral-900`;
			case "button":
				return "bg-none border-2 border-current rounded-lg text-neutral-400 font-bold text-lg px-5 py-3 cursor-pointer hover:bg-neutral-900 hover:border-neutral-900 hover:text-neutral-0 transition-all duration-200";
		}
	}

	return <a {...props} class={`${getClass()} ${props.class}`} />;
}
