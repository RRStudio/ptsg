import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import DOMPurify from "dompurify";
import PlatformLink, { PlatformLinkProps } from "../components/PlatformLink";
import Link from "../components/Link";
import { useEpisodesContext } from "../services/episode";

export default function EpisodeDetail() {
    const params = useParams<{ episode: string }>();
    const episodes = useEpisodesContext();

    const currentEpisode = () => {
        const episodeNumber = Number.parseInt(params.episode);
        return episodes().find((ep) => ep.episode === episodeNumber);
    };

    const description = () => {
        const episode = currentEpisode();
        return episode ? DOMPurify.sanitize(episode.description) : "";
    };

    const youtubePlatform = (): PlatformLinkProps["platform"] => {
        const minNewPlaylistEpisode = 24;
        const episode = currentEpisode()?.episode ?? minNewPlaylistEpisode;
        return episode >= minNewPlaylistEpisode ? "youtube" : "youtube-old";
    };

    return (
        <div class="flex h-full w-full flex-col items-center gap-8">
            <Show
                when={currentEpisode()}
                fallback={
                    <div class="text-center text-neutral-600">
                        <div
                            role="status"
                            class="pb-10 items-center justify-center flex"
                        >
                            <svg
                                aria-hidden="true"
                                class="w-8 h-8 text-gray-300 animate-spin dark:text-gray-600 fill-primary"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>

                        <Link variant="button" href="/episodes" class="mt-4">
                            חזרה לרשימת הפרקים
                        </Link>
                    </div>
                }
            >
                <div class="w-full max-w-4xl">
                    {/* Episode Header */}
                    <div class="mb-8">
                        <h1 class="font-900 text-3xl tablet:text-4xl mb-4">
                            {currentEpisode()?.title}
                        </h1>

                        {/* Episode Metadata */}
                        <div class="flex flex-wrap items-center gap-4 text-neutral-60 mb-6">
                            <span class="text-sm tablet:text-base">
                                פרק #{currentEpisode()?.episode}
                            </span>
                            <span class="text-sm tablet:text-base">
                                {currentEpisode()?.date}
                            </span>
                            <Show when={currentEpisode()?.duration}>
                                <span class="text-sm tablet:text-base">
                                    {currentEpisode()?.duration}
                                </span>
                            </Show>
                        </div>

                        {/* Episode Description */}
                        <div class="prose prose-neutral max-w-none mb-4">
                            <h2 class="font-900 text-xl tablet:text-2xl mb-4">
                                תיאור הפרק
                            </h2>
                            <div
                                class="text-neutral-80 leading-relaxed"
                                innerHTML={description()}
                            />
                        </div>

                        {/* Platform Links */}
                        <div
                            class="flex flex-wrap items-center justify-center gap-3 laptop:gap-10 tablet:gap-6"
                            dir="ltr"
                        >
                            <PlatformLink platform="spotify" />
                            <PlatformLink platform="apple" />
                            <PlatformLink platform={youtubePlatform()} />
                        </div>
                    </div>
                </div>
            </Show>
        </div>
    );
}
