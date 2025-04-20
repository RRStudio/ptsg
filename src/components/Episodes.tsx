import { For, Show, onCleanup } from "solid-js";
import { type Episode, useEpisodes } from "../services/feed";
import EpisodeComponent from "./Episode";

export default function Episodes() {
    const {
        episodes,
        loading,
        currentPage,
        setCurrentPage,
        totalPages,
        searchTerm,
        setSearchTerm,
        currentPlaying,
        setCurrentPlaying,
    } = useEpisodes();

    const isPlaying = (episode: Episode) =>
        currentPlaying() === episode.audioUrl;

    let searchTimeout: NodeJS.Timeout | null = null;
    const handleSearchInput = (value: string) => {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        searchTimeout = setTimeout(() => {
            setSearchTerm(value);
            setCurrentPage(1);
        }, 300);
    };

    onCleanup(() => {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
    });

    const handleEpisodeClick = (episode: Episode) => {
        setCurrentPlaying(isPlaying(episode) ? null : episode.audioUrl);
    };

    return (
        <div class="w-full h-full flex flex-col items-center gap-8">
            <form
                class="w-full max-w-4xl flex gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    setCurrentPage(1);
                }}
            >
                <input
                    class="flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="חיפוש פרקים..."
                    value={searchTerm()}
                    onInput={(e) => handleSearchInput(e.currentTarget.value)}
                />
            </form>

            <Show when={!loading()} fallback={<div>טוען...</div>}>
                <Show
                    when={episodes().length > 0}
                    fallback={
                        <div class="text-center text-neutral-600">
                            <p class="text-xl">לא נמצאו פרקים</p>
                            <p class="mt-2">נסה לשנות את מונחי החיפוש</p>
                        </div>
                    }
                >
                    <div class="w-full max-w-4xl grid grid-cols-1 gap-4">
                        <For each={episodes()}>
                            {(episode) => (
                                <EpisodeComponent
                                    episode={episode}
                                    expanded={isPlaying(episode)}
                                    onEnded={() => {
                                        setCurrentPlaying(null);
                                    }}
                                    onClick={() => handleEpisodeClick(episode)}
                                />
                            )}
                        </For>
                    </div>

                    <Show when={totalPages() > 1}>
                        <div class="flex gap-2 mt-8">
                            <button
                                type="button"
                                onClick={() =>
                                    setCurrentPage((p) => Math.max(1, p - 1))
                                }
                                disabled={currentPage() === 1}
                                class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
                            >
                                הקודם
                            </button>
                            <span class="px-4 py-2">
                                עמוד {currentPage()} מתוך {totalPages()}
                            </span>
                            <button
                                type="button"
                                onClick={() => {
                                    setCurrentPage((p) =>
                                        Math.min(totalPages(), p + 1),
                                    );
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                }}
                                disabled={currentPage() === totalPages()}
                                class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
                            >
                                הבא
                            </button>
                        </div>
                    </Show>
                </Show>
            </Show>
        </div>
    );
}
