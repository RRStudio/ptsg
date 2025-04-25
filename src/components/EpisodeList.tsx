import {
    type Accessor,
    For,
    type JSX,
    Show,
    Suspense,
    createSignal,
} from "solid-js";
import type { Episode } from "../services/episode";
import EpisodeComponent from "./Episode";
import Loader from "./Loader";

export type EpisodesProps = {
    episodes: Accessor<Episode[]>;
    children?: JSX.Element;
};

export default function EpisodeList(props: EpisodesProps) {
    const [currentPlaying, setCurrentPlaying] = createSignal<string | null>(
        null,
    );

    const isPlaying = (episode: Episode) =>
        currentPlaying() === episode.audioUrl;

    const handleEpisodeClick = (episode: Episode) => {
        setCurrentPlaying(isPlaying(episode) ? null : episode.audioUrl);
    };

    return (
        <div class="w-full max-w-4xl">
            <Suspense fallback={<Loader />}>
                <Show
                    when={props.episodes().length > 0}
                    fallback={
                        <div class="text-center text-neutral-600">
                            <p class="text-xl">לא נמצאו פרקים</p>
                            <p class="mt-2">נסה לשנות את מונחי החיפוש</p>
                        </div>
                    }
                >
                    <div class="flex w-full flex-col">
                        <For each={props.episodes()}>
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

                    {props.children}
                </Show>
            </Suspense>
        </div>
    );
}
