import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link(props: LinkProps) {
	return (
		<a
			{...props}
			class={`text-white text-md font-bold hover:brightness-80 transition-brightness duration-100 ${props.class}`}
		/>
	);
}
