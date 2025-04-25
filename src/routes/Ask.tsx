import Hero from "../components/Hero";
import Loader from "../components/Loader";
import { useIsMobile } from "../hooks/useMobile";

export default function Ask() {
    const isMobile = useIsMobile();

    const title = () =>
        isMobile()
            ? "רוצים שנענה על שאלה שלכם באחד הפרקים?"
            : "מה תשאלו אותנו? 🤔";

    return (
        <div class="flex h-full w-full flex-col items-center gap-4 tablet:gap-8">
            <Hero title={title()}>
                <span class="tablet:block hidden tablet:text-2xl text-primary text-xl">
                    מלאו את הטופס שלמטה 👇
                </span>
            </Hero>
            <div class="h-[2320px] w-full">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeccLcjzR9548odDiVlOQc9PAGLYgDNdzMzhAhj7Wo5rPAkrQ/viewform?embedded=true"
                    title="Google Form"
                    class="h-full w-full rounded-lg border-none"
                >
                    <Loader />
                </iframe>
            </div>
        </div>
    );
}
