import { Suspense } from "solid-js";
import EpisodeList from "../components/EpisodeList";
import Hero from "../components/Hero";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import { useEpisodes } from "../services/episode";

export default function Home() {
    const episodes = useEpisodes();
    const trimmedEpisodes = () => episodes().slice(0, 3);

    return (
        <div class="flex flex-col items-center desktop:gap-12 gap-6 text-center">
            <Hero title="כל מה שלא טכני בהייטק">
                <span class="font-bold text-primary">פותחים סוגריים</span> הוא
                פודקאסט שבועי על כל מה שלא טכני בהייטק (ואולי גם כן).
                <br />
                <Link variant="inline-link" href="/about">
                    אנחנו
                </Link>{" "}
                נענה על השאלות שלכם, וניתן את התשובות הנכונות (והלא נכונות) -
                כדאי לכם להקשיב לנו, כי ככה.
            </Hero>

            <div
                class="flex justify-center items-center gap-3 tablet:gap-6 laptop:gap-10 flex-wrap"
                dir="ltr"
            >
                <PlatformLink platform="spotify" />
                <PlatformLink platform="apple" />
                <PlatformLink platform="youtube" />
            </div>

            <div class="w-full my-4 tablet:my-8 laptop:my-12">
                <div class="flex flex-col items-center gap-3">
                    <span class="font-bold text-xl">
                        יש לכם שאלה לרועי ורון?
                    </span>
                    <Link variant="button" href="/ask">
                        תשאלו אותנו שאלה
                    </Link>
                </div>
            </div>

            <h2 class="font-900 text-4xl tablet:text-5xl text-primary">
                הפרקים האחרונים שלנו...
            </h2>

            <Suspense fallback={<div>טוען...</div>}>
                <EpisodeList episodes={trimmedEpisodes} />
            </Suspense>
        </div>
    );
}
