import Hero from "../components/Hero";

export default function Ask() {
    return (
        <div class="flex h-full w-full flex-col items-center gap-8">
            <Hero title="רוצים שנענה על השאלה שלכם באחד הפרקים?">
                <span class="text-primary text-2xl desktop:text-3xl font-bold">מלאו את הטופס שלמטה 👇</span>
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
