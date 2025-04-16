import { JSX } from "solid-js/jsx-runtime";

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link(props: LinkProps) {
	return <a {...props} />;
}
