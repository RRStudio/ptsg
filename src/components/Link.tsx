import { A } from "@solidjs/router";
import type { JSX } from "solid-js";

export type LinkProps = {
    variant?: "link" | "inline-link" | "button";
    href: string;
    class?: string;
    children?: JSX.Element;
    onClick?: (event: MouseEvent) => void;
};

export default function Link({
    variant = "link",
    children,
    ...props
}: LinkProps) {
    function getClass() {
        const link =
            "text-neutral-400 text-md font-bold hover:text-neutral-900 hover:underline transition-color duration-200";

        switch (variant) {
            case "link":
                return link;
            case "inline-link":
                return `${link} text-neutral-900`;
            case "button":
                return "w-full tablet:w-max max-w-100 bg-secondary rounded-lg text-neutral-0 font-bold text-lg px-4 py-2 laptop:px-5 laptop:py-3 cursor-pointer hover:brightness-80 transition-brightness duration-200";
        }
    }

    return (
        <A
            {...props}
            class={`${getClass()} flex-grow-0 text-center ${props.class || ""}`}
        >
            {children}
        </A>
    );
}
