import DOMPurify from "dompurify";
import logo from "../assets/ptsg.png";
import type { Episode } from "../services/episode";

export type EpisodeProps = {
  episode: Episode;
  onClick?: () => void;
};

export default function EpisodeComponent(props: EpisodeProps) {
  const description = () => DOMPurify.sanitize(props.episode.description);

  return (
    <div
      class="flex min-w-0 cursor-pointer gap-3 tablet:gap-6 rounded-lg p-2 tablet:p-6 text-start transition-colors duration-200 hover:bg-neutral-10"
      onKeyPress={(e) => {
        if (e.key === " ") {
          props.onClick?.();
        }
      }}
      onClick={props.onClick}
    >
      <img
        src={props.episode.imageUrl || logo}
        alt={props.episode.title}
        class="h-12 tablet:h-32 tablet:w-32 w-12 flex-shrink-0 rounded-lg border-2 border-neutral-100 object-cover"
      />
      <div class="flex min-w-0 flex-1 flex-col gap-1 tablet:gap-2 overflow-hidden">
        <h2 class="break-words font-900 tablet:text-2xl text-md">
          {props.episode.title}
        </h2>
        <p
          class={`prose prose-neutral break-words tablet:text-md text-neutral-60 text-sm ${"line-clamp-2 tablet:line-clamp-3"}`}
          innerHTML={description()}
        />
        <span class="break-words tablet:text-sm text-neutral-40 text-xs">
          {props.episode.date}
        </span>
      </div>
    </div>
  );
}
