import { createResource } from "solid-js";
import { formatDate } from "../utils/date";

export const RSS_FEED_URL =
    "https://taupe-chebakia-f7b671.netlify.app/.netlify/functions/feed?url=https://feeds.transistor.fm/ptsgdev";

type FeedItem = {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
    enclosure: {
        url: string;
    };
    itunes: {
        episode: string;
        duration: string;
        summary: string;
    };
};

export type Episode = {
    episode: number;
    title: string;
    description: string;
    date: string;
    link: string;
    audioUrl: string;
    duration: string;
    summary: string;
};

export function useEpisodes() {
    const [episodes] = createResource<Episode[]>(
        async () => {
            try {
                const response = await fetch(RSS_FEED_URL);
                const data = await response.json();

                const items: Episode[] = data.items.map((item: FeedItem) => ({
                    episode: Number.parseInt(item.itunes.episode),
                    title: item.title,
                    description: item.contentSnippet,
                    date: formatDate(item.pubDate),
                    link: item.link,
                    audioUrl: item.enclosure.url,
                    duration: item.itunes.duration,
                    summary: item.itunes.summary,
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
