import { createResource } from "solid-js";
import testRss from "../assets/test_rss.xml?raw";
import { formatDate } from "../utils/date";

export const RSS_FEED_URL = "https://feeds.transistor.fm/ptsgdev";

export type Episode = {
    episode: number;
    title: string;
    description: string;
    date: string;
    link: string;
    audioUrl: string;
};

export function useEpisodes() {
    const [episodes] = createResource<Episode[]>(
        async () => {
            try {
                const isDev = import.meta.env.DEV;
                const text = isDev
                    ? testRss
                    : await (await fetch(RSS_FEED_URL)).text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/xml");

                const items: Episode[] = Array.from(
                    doc.querySelectorAll("item"),
                ).map((item) => ({
                    episode: Number.parseInt(
                        item.querySelector("episode")?.textContent ?? "0",
                    ),
                    title: item.querySelector("title")?.textContent || "",
                    description:
                        item.querySelector("description")?.textContent || "",
                    date: formatDate(
                        item.querySelector("pubDate")?.textContent || "",
                    ),
                    link: item.querySelector("link")?.textContent || "",
                    audioUrl:
                        item.querySelector("enclosure")?.getAttribute("url") ||
                        "",
                }));

                return items;
            } catch (error) {
                console.error("Error fetching episodes:", error);
                return [];
            }
        },
        { initialValue: [] },
    );

    return episodes;
}
