import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
	type?: "link" | "inline-link" | "button";
};

export default function Link({ type = "link", ...props }: LinkProps) {
	function getClass() {
		const link =
			"text-neutral-400 text-md font-bold hover:text-neutral-900 hover:underline transition-color duration-200";

		switch (type) {
			case "link":
				return link;
			case "inline-link":
				return `${link} text-neutral-900`;
			case "button":
				return "bg-none border-2 border-current rounded-lg text-secondary font-bold text-lg px-5 py-3 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-neutral-0 transition-all duration-200";
		}
	}

	return <a {...props} class={`${getClass()} ${props.class}`} />;
}
