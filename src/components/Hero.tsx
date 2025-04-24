import type { JSX } from "solid-js";

type HeroProps = {
    title: string;
    children?: JSX.Element;
};

export default function Hero({ title, children }: HeroProps) {
    return (
        <div class="flex flex-col items-center desktop:gap-12 gap-6 text-center">
            <h1 class="m-0 text-center font-900 desktop:text-8xl text-7xl">
                {title}
            </h1>
            <p class="text-center desktop:text-xl text-lg">{children}</p>
        </div>
    );
}
