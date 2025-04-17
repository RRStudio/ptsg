export type ButtonProps = {
	children: string;
	onClick?: (event: MouseEvent) => void;
};

export default function Button({ children, onClick }: ButtonProps) {
	const className =
		"bg-none border-2 border-current rounded-lg text-secondary font-bold text-lg px-5 py-3 cursor-pointer hover:brightness-80 transition-brightness duration-100";

	return (
		<>
			<button type="button" class={className} onClick={onClick}>
				{children}
			</button>
		</>
	);
}
