import type { JSX } from "solid-js";

type HeroProps = {
    title: string;
    children?: JSX.Element;
};

export default function Hero({ title, children }: HeroProps) {
    return (
        <div class="flex flex-col items-center desktop:gap-12 gap-4 tablet:gap-6 text-center">
            <h1 class="m-0 text-center font-900 desktop:text-8xl laptop:text-7xl tablet:text-6xl text-5xl">
                {title}
            </h1>
            <p class="text-center laptop:text-xl tablet:text-lg text-md">
                {children}
            </p>
        </div>
    );
}
