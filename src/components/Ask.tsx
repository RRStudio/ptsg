export default function Ask() {
	return (
		<div class="w-full h-full flex flex-col items-center gap-8">
			<div class="text-5xl font-900 text-center text-primary">
				רוצה שנענה על השאלה שלך באחד הפרקים?
			</div>
			<div class="text-4xl font-900 text-center">מלא את הטופס שלמטה👇</div>
			<div class="w-full max-w-4xl h-full">
				<iframe
					title="Google Form"
					src="https://docs.google.com/forms/d/e/1FAIpQLSeccLcjzR9548odDiVlOQc9PAGLYgDNdzMzhAhj7Wo5rPAkrQ/viewform?embedded=true"
					width="100%"
					style="border: none; height: 1941px !important;"
					class="rounded-lg shadow-lg"
				>
					טוען...
				</iframe>
			</div>
		</div>
	);
}
