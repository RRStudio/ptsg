export type ButtonProps = {
	children: string;
	onClick?: (event: MouseEvent) => void;
};

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button
			type="button"
			class="bg-secondary text-white font-bold text-lg p-4 border-none rounded-lg cursor-pointer hover:brightness-80 transition-brightness duration-100"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
