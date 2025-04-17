import { useEpisodes } from "../services/feed";
import { Show } from "solid-js";
import logo from "../assets/ptsg.png";

export default function Episodes() {
  const { episodes, loading, currentPage, setCurrentPage, totalPages } =
    useEpisodes();

  const handleNextPage = () => {
    setCurrentPage((p) => Math.min(totalPages(), p + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div class="w-full h-full flex flex-col items-center gap-8">
      <h1 class="text-4xl font-900 text-center">פרקים</h1>

      <Show when={!loading()} fallback={<div>טוען...</div>}>
        <div class="w-full max-w-4xl grid grid-cols-1 gap-4">
          {episodes().map((episode) => (
            <a
              href={episode.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-6 p-6 rounded-lg hover:bg-neutral-100 transition-colors"
            >
              <img
                src={logo}
                alt={episode.title}
                class="w-32 h-32 object-cover rounded-lg"
              />
              <div class="flex-1">
                <h2 class="text-2xl font-bold mb-2">{episode.title}</h2>
                <div
                  class="text-neutral-600 line-clamp-3 prose prose-neutral"
                  innerHTML={episode.description}
                />
                <p class="text-sm text-neutral-400 mt-2">{episode.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div class="flex gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage() === 1}
            class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
          >
            הקודם
          </button>
          <span class="px-4 py-2">
            עמוד {currentPage()} מתוך {totalPages()}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage() === totalPages()}
            class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
          >
            הבא
          </button>
        </div>
      </Show>
    </div>
  );
}
