import Hero from "../components/Hero";

export default function Ask() {
    return (
        <div class="w-full h-full flex flex-col items-center gap-8">
            <Hero title="רוצה שנענה על השאלה שלך באחד הפרקים?">
                <span class="text-primary">מלא את הטופס שלמטה 👇</span>
            </Hero>
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
    );
}
