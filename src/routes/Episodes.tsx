import { Show, createSignal, onCleanup } from "solid-js";
import EpisodeList from "../components/EpisodeList";
import { useEpisodesContext } from "../services/episode";

const ITEMS_PER_PAGE = 10;

export default function Episodes() {
    const episodes = useEpisodesContext();

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
        <div class="flex h-full w-full flex-col items-center gap-8">
            <form
                class="flex w-full max-w-4xl gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    setCurrentPage(1);
                }}
            >
                <input
                    class="flex-1 rounded-lg border border-neutral-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="חיפוש פרקים..."
                    value={searchTerm()}
                    onInput={(e) => handleSearchInput(e.currentTarget.value)}
                />
            </form>

            <EpisodeList episodes={currentEpisodes}>
                <Show when={totalPages() > 1}>
                    <div class="mt-8 flex gap-2">
                        <button
                            type="button"
                            onClick={() =>
                                setCurrentPage((p) => Math.max(1, p - 1))
                            }
                            disabled={currentPage() === 1}
                            class="rounded-lg bg-neutral-100 px-4 py-2 hover:bg-neutral-200 disabled:opacity-50"
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
                            class="rounded-lg bg-neutral-100 px-4 py-2 hover:bg-neutral-200 disabled:opacity-50"
                        >
                            הבא
                        </button>
                    </div>
                </Show>
            </EpisodeList>
        </div>
    );
}
