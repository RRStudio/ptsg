import { A } from "@solidjs/router";
import { type JSX, splitProps } from "solid-js";

export type LinkProps = {
    variant?: "link" | "inline-link" | "button";
    href: string;
    class?: string;
    children?: JSX.Element;
    onClick?: (event: MouseEvent) => void;
};

export default function Link(props: LinkProps) {
    const [{ variant = "link", children }, other] = splitProps(props, [
        "variant",
        "children",
    ]);

    function getClass() {
        const link =
            "text-neutral-50 text-md font-bold hover:text-neutral-90 hover:underline transition-color duration-200";

        switch (variant) {
            case "link":
                return link;
            case "inline-link":
                return `${link} text-neutral-90`;
            case "button":
                return "w-full tablet:w-max max-w-100 bg-primary/10 rounded-lg text-primary font-bold text-lg px-4 py-2 laptop:px-5 laptop:py-3 cursor-pointer hover:bg-primary/20 transition-all duration-200";
        }
    }

    return (
        <A
            {...other}
            class={`${getClass()} flex-grow-0 text-center ${other.class || ""}`}
        >
            {children}
        </A>
    );
}
