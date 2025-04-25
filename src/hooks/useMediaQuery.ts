import { type Accessor, createSignal, onCleanup } from "solid-js";

type MediaStore = {
    count: number;
    state: Accessor<boolean>;
    onCleanup: () => void;
};

const map: Record<string, MediaStore> = {};

export function useMediaQuery(query: string): Accessor<boolean> {
    let media = map[query];

    if (!media) {
        const matcher = window.matchMedia(query);
        const [state, setState] = createSignal(matcher.matches);

        const callback = () => setState(matcher.matches);

        matcher.addEventListener("change", callback);

        media = map[query] = {
            count: 0,
            state,
            onCleanup: () => {
                if (--media.count < 1) {
                    delete map[query];
                    matcher.removeEventListener("change", callback);
                }
            },
        };
    }

    media.count++;
    onCleanup(media.onCleanup);

    return media.state;
}
