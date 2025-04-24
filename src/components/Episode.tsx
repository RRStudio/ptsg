import DOMPurify from "dompurify";
import { type Accessor, Show } from "solid-js";
import logo from "../assets/ptsg.png";
import type { Episode } from "../services/episode";

export type EpisodeProps = {
    episode: Episode;
    expanded: Accessor<boolean>;
    onEnded?: () => void;
    onClick?: () => void;
};

export default function EpisodeComponent({
    episode,
    expanded,
    onEnded,
    onClick,
}: EpisodeProps) {
    const description = () => DOMPurify.sanitize(episode.description);

    return (
        <div
            class="flex cursor-pointer gap-6 rounded-lg p-6 transition-colors duration-200 hover:bg-neutral-100"
            onKeyPress={(e) => {
                if (e.key === " ") {
                    onClick?.();
                }
            }}
            onClick={onClick}
        >
            <img
                src={logo}
                alt={episode.title}
                class="h-32 w-32 rounded-lg object-cover"
            />
            <div class="flex-1">
                <h2 class="mb-2 font-900 text-2xl">{episode.title}</h2>
                <div
                    class={`prose prose-neutral text-neutral-600 ${
                        expanded() ? "" : "line-clamp-3"
                    }`}
                    innerHTML={description()}
                />
                <p class="mt-2 text-neutral-400 text-sm">{episode.date}</p>
                <Show when={expanded()}>
                    <audio
                        class="mt-4 w-full"
                        src={episode.audioUrl}
                        controls
                        preload="metadata"
                        onEnded={onEnded}
                    >
                        <track kind="captions" />
                    </audio>
                </Show>
            </div>
        </div>
    );
}
