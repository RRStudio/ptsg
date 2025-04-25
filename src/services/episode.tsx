import {
    type InitializedResource,
    type JSX,
    createContext,
    createResource,
    useContext,
} from "solid-js";
import { formatDate } from "../utils/date";

export const RSS_FEED_URL =
    "https://be.ptsg.dev/.netlify/functions/feed?url=https://feeds.transistor.fm/ptsgdev";

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

type EpisodesContext = InitializedResource<Episode[]>;
const EpisodesContext = createContext<EpisodesContext | null>(null);

export function useEpisodesContext() {
    const context = useContext(EpisodesContext);

    if (!context) {
        throw new Error(
            "useEpisodesContext must be used within a EpisodesProvider",
        );
    }

    return context;
}

export function EpisodesProvider(props: { children: JSX.Element }) {
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

    return (
        <EpisodesContext.Provider value={episodes}>
            {props.children}
        </EpisodesContext.Provider>
    );
}
