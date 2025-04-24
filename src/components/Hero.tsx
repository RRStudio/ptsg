import type { JSX } from "solid-js";

type HeroProps = {
    title: string;
    children?: JSX.Element;
};

export default function Hero({ title, children }: HeroProps) {
    return (
        <div class="flex flex-col items-center gap-12 text-center">
            <h1 class="m-0 pt-12 text-center font-900 text-8xl">{title}</h1>
            <p class="text-center text-xl">{children}</p>
        </div>
    );
}
