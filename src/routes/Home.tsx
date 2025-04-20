import Link from "../Link";
import PlatformLink from "../PlatformLink";
import Hero from "../components/Hero";

function AskUs() {
    return (
        <div class="flex flex-col items-center gap-3">
            <span class="text-xl font-bold">יש לך שאלה לרון ורועי?</span>
            <Link href="/ask">שאל אותנו שאלה</Link>
        </div>
    );
}

export default function Home() {
    return (
        <div class="flex flex-col items-center gap-12">
            <Hero title="כל מה שלא טכני בהייטק">
                <span class="text-primary font-bold">פותחים סוגריים</span> הוא
                פודקאסט שבועי על כל מה שלא טכני בהייטק (ואולי גם כן).
                <br />
                <Link variant="inline-link" href="/about">
                    אנחנו
                </Link>{" "}
                נענה על השאלות שלכם, וניתן את התשובות הנכונות (והלא נכונות) -
                כדאי לכם להקשיב לנו, כי ככה.
            </Hero>

            <div class="flex items-center gap-10" dir="ltr">
                <PlatformLink platform="spotify" />
                <PlatformLink platform="apple" />
                <PlatformLink platform="youtube" />
            </div>

            <div class="h-10" />

            <AskUs />
        </div>
    );
}
