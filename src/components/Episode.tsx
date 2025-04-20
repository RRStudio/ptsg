import DOMPurify from "dompurify";
import { Show } from "solid-js";
import logo from "../assets/ptsg.png";
import type { Episode } from "../services/episode";

export type EpisodeProps = {
    episode: Episode;
    expanded: boolean;
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
            class="flex gap-6 p-6 rounded-lg cursor-pointer hover:bg-neutral-100 transition-colors duration-200"
            onKeyPress={(e) => {
                if (e.key === " ") {
                    onClick?.();
                }
            }}
            onClick={onClick}
        >
            {/*TODO: show logo from rss feed*/}
            <img
                src={logo}
                alt={episode.title}
                class="w-32 h-32 object-cover rounded-lg"
            />
            <div class="flex-1">
                <h2 class="text-2xl font-900 mb-2">{episode.title}</h2>
                <div
                    class={`text-neutral-600 prose prose-neutral ${
                        expanded ? "" : "line-clamp-3"
                    }`}
                    innerHTML={description()}
                />
                <p class="text-sm text-neutral-400 mt-2">{episode.date}</p>
                <Show when={expanded}>
                    <audio
                        class="w-full mt-4"
                        src={episode.audioUrl}
                        controls
                        onEnded={onEnded}
                    >
                        <track kind="captions" />
                    </audio>
                </Show>
            </div>
        </div>
    );
}
