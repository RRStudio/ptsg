import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link(props: LinkProps) {
	return (
		<a
			{...props}
			class={`text-neutral-400 text-md font-bold hover:text-neutral-900 transition-color duration-200 ${props.class}`}
		/>
	);
}
