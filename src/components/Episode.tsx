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

export default function EpisodeComponent(props: EpisodeProps) {
    const description = () => DOMPurify.sanitize(props.episode.description);

    return (
        <div
            class="flex cursor-pointer gap-3 tablet:gap-6 rounded-lg p-2 tablet:p-6 text-start transition-colors duration-200 hover:bg-neutral-100"
            onKeyPress={(e) => {
                if (e.key === " ") {
                    props.onClick?.();
                }
            }}
            onClick={props.onClick}
        >
            <img
                src={logo}
                alt={props.episode.title}
                class="h-12 tablet:h-32 tablet:w-32 w-12 rounded-lg object-cover"
            />
            <div class="flex flex-1 flex-col gap-1 tablet:gap-2">
                <h2 class="font-900 tablet:text-2xl text-md">
                    {props.episode.title}
                </h2>
                <p
                    class={`prose prose-neutral tablet:text-md text-neutral-600 text-sm ${
                        props.expanded()
                            ? ""
                            : "line-clamp-2 tablet:line-clamp-3"
                    }`}
                    innerHTML={description()}
                />
                <span class="tablet:text-sm text-neutral-400 text-xs">
                    {props.episode.date}
                </span>
                <Show when={props.expanded()}>
                    <audio
                        class="w-full"
                        src={props.episode.audioUrl}
                        controls
                        preload="metadata"
                        onEnded={props.onEnded}
                    >
                        <track kind="captions" />
                    </audio>
                </Show>
            </div>
        </div>
    );
}
