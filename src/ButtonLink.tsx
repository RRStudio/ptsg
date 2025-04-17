import { JSX } from "solid-js/jsx-runtime";

export type ButtonLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink(props: ButtonLinkProps) {
	return (
		<a
			{...props}
			class={`bg-none border-2 border-current rounded-lg text-secondary font-bold text-lg px-5 py-3 cursor-pointer hover:bg-secondary hover:border-secondary hover:text-neutral-0 transition-all duration-200 ${props.class}`}
		/>
	);
}
