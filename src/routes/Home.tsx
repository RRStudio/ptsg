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
        <div class="flex flex-col items-center gap-12">
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

            <div class="flex items-center gap-10" dir="ltr">
                <PlatformLink platform="spotify" />
                <PlatformLink platform="apple" />
                <PlatformLink platform="youtube" />
            </div>

            <div class="my-8">
                <div class="flex flex-col items-center gap-3">
                    <span class="font-bold text-xl">
                        יש לכם שאלה לרועי ורון?
                    </span>
                    <Link variant="button" href="/ask">
                        תשאלו אותנו שאלה
                    </Link>
                </div>
            </div>

            <h2 class="font-900 text-5xl text-primary">
                הפרקים האחרונים שלנו...
            </h2>

            <Suspense fallback={<div>טוען...</div>}>
                <EpisodeList episodes={trimmedEpisodes} />
            </Suspense>
        </div>
    );
}
