export type IconLinkProps = {
	icon: string;
	href: string;
};

export default function IconLink({ icon, href }: IconLinkProps) {
	return (
		<i
			class={`${icon} text-white w-6 h-6 cursor-pointer hover:brightness-80 transition-brightness duration-100`}
			onClick={() => window.open(href, "_blank")}
		></i>
	);
}
