import { Show, Suspense, createSignal, onCleanup } from "solid-js";
import { useEpisodes } from "../services/episode";
import EpisodeList from "../components/EpisodeList";

const ITEMS_PER_PAGE = 10;

export default function Episodes() {
    const episodes = useEpisodes();

    const [currentPage, setCurrentPage] = createSignal(1);
    const [searchTerm, setSearchTerm] = createSignal("");

    const filteredEpisodes = () => {
        const term = searchTerm().toLowerCase();
        if (!term) return episodes();

        return episodes().filter(
            (episode) =>
                episode.title.toLowerCase().includes(term) ||
                episode.description.toLowerCase().includes(term),
        );
    };

    const totalPages = () =>
        Math.ceil(filteredEpisodes().length / ITEMS_PER_PAGE);
    const currentEpisodes = () => {
        const start = (currentPage() - 1) * ITEMS_PER_PAGE;
        return filteredEpisodes().slice(start, start + ITEMS_PER_PAGE);
    };

    let searchTimeout: number | undefined;
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

            <Suspense fallback={<div>טוען...</div>}>
                <EpisodeList episodes={currentEpisodes}>
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
                </EpisodeList>
            </Suspense>
        </div>
    );
}
