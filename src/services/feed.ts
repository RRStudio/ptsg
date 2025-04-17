import { createSignal } from "solid-js";

export type Episode = {
  title: string;
  description: string;
  date: string;
  link: string;
};

const ITEMS_PER_PAGE = 10;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("he-IL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function useEpisodes() {
  const [episodes, setEpisodes] = createSignal<Episode[]>([]);
  const [currentPage, setCurrentPage] = createSignal(1);
  const [loading, setLoading] = createSignal(true);

  async function fetchEpisodes() {
    try {
      const response = await fetch("https://softskills.audio/feed.xml");
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/xml");

      const items = Array.from(doc.querySelectorAll("item")).map((item) => ({
        title: item.querySelector("title")?.textContent || "",
        description: item.querySelector("description")?.textContent || "",
        date: formatDate(item.querySelector("pubDate")?.textContent || ""),
        link: item.querySelector("link")?.textContent || "",
      }));

      setEpisodes(items);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchEpisodes();

  const totalPages = () => Math.ceil(episodes().length / ITEMS_PER_PAGE);
  const currentEpisodes = () => {
    const start = (currentPage() - 1) * ITEMS_PER_PAGE;
    return episodes().slice(start, start + ITEMS_PER_PAGE);
  };

  return {
    episodes: currentEpisodes,
    loading,
    currentPage,
    setCurrentPage,
    totalPages,
  };
}
