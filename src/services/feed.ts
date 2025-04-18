import { createSignal } from "solid-js";
import testRss from "../assets/test_rss.xml?raw";

export type Episode = {
  title: string;
  description: string;
  date: string;
  link: string;
  audioUrl: string;
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
  const [searchTerm, setSearchTerm] = createSignal("");
  const [currentPlaying, setCurrentPlaying] = createSignal<string | null>(null);

  async function fetchEpisodes() {
    try {
      const isDev = import.meta.env.DEV;
      const text = isDev
        ? testRss
        : await (await fetch("https://feeds.transistor.fm/ptsgdev")).text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/xml");

      const items = Array.from(doc.querySelectorAll("item")).map((item) => ({
        title: item.querySelector("title")?.textContent || "",
        description: item.querySelector("description")?.textContent || "",
        date: formatDate(item.querySelector("pubDate")?.textContent || ""),
        link: item.querySelector("link")?.textContent || "",
        audioUrl: item.querySelector("enclosure")?.getAttribute("url") || "",
      }));

      setEpisodes(items);
    } catch (error) {
      console.error("Error fetching episodes:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchEpisodes();

  const filteredEpisodes = () => {
    const term = searchTerm().toLowerCase();
    if (!term) return episodes();

    return episodes().filter(
      (episode) =>
        episode.title.toLowerCase().includes(term) ||
        episode.description.toLowerCase().includes(term)
    );
  };

  const totalPages = () =>
    Math.ceil(filteredEpisodes().length / ITEMS_PER_PAGE);
  const currentEpisodes = () => {
    const start = (currentPage() - 1) * ITEMS_PER_PAGE;
    return filteredEpisodes().slice(start, start + ITEMS_PER_PAGE);
  };

  return {
    episodes: currentEpisodes,
    loading,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    currentPlaying,
    setCurrentPlaying,
  };
}
