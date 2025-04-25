import { type Accessor, For, type JSX, Show, createSignal } from "solid-js";
import type { Episode } from "../services/episode";
import EpisodeComponent from "./Episode";

export type EpisodesProps = {
    episodes: Accessor<Episode[]>;
    children?: JSX.Element;
};

export default function EpisodeList({ episodes, children }: EpisodesProps) {
    const [currentPlaying, setCurrentPlaying] = createSignal<string | null>(
        null,
    );

    const isPlaying = (episode: Episode) =>
        currentPlaying() === episode.audioUrl;

    const handleEpisodeClick = (episode: Episode) => {
        setCurrentPlaying(isPlaying(episode) ? null : episode.audioUrl);
    };

    return (
        <Show
            when={episodes().length > 0}
            fallback={
                <div class="text-center text-neutral-600">
                    <p class="text-xl">לא נמצאו פרקים</p>
                    <p class="mt-2">נסה לשנות את מונחי החיפוש</p>
                </div>
            }
        >
            <div class="flex flex-col w-full max-w-4xl">
                <For each={episodes()}>
                    {(episode) => (
                        <EpisodeComponent
                            episode={episode}
                            expanded={() => isPlaying(episode)}
                            onEnded={() => {
                                setCurrentPlaying(null);
                            }}
                            onClick={() => handleEpisodeClick(episode)}
                        />
                    )}
                </For>
            </div>

            {children}
        </Show>
    );
}
