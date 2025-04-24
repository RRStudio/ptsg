import type { JSX } from "solid-js";

export type PlatformLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
    platform: "spotify" | "apple" | "youtube";
    variant?: "button" | "link";
};

export default function PlatformLink({
    platform,
    variant = "button",
    ...props
}: PlatformLinkProps) {
    const { icon, iconColor, label, href } = (() => {
        switch (platform) {
            case "spotify":
                return {
                    icon: "i-fa6-brands-spotify",
                    iconColor: "#1ed760",
                    label: "Spotify",
                    href: "https://open.spotify.com/show/6JNfRPkgqjJNk731PGsOAW",
                };
            case "apple":
                return {
                    icon: "i-cib-apple-podcasts",
                    iconColor:
                        "linear-gradient(to bottom, #d56dfb, #b150e2, #872ec4)",
                    label: "Apple",
                    href: "https://podcasts.apple.com/podcast/ptsgdev/id1809322756",
                };
            case "youtube":
                return {
                    icon: "i-cib-youtube",
                    iconColor: "#ff0000",
                    label: "YouTube",
                    href: "https://youtube.com/playlist?list=PL1pyHXW5SWc00hyTNO_lUvmEB0NhDwHZI&si=ULOgluh1fX4NsvZU",
                };
        }
    })();

    switch (variant) {
        case "button":
            return (
                <a
                    {...props}
                    href={href}
                    class={`cursor-pointer rounded-lg border-2 border-neutral-400 bg-none desktop:px-6 px-4 desktop:py-3 py-2 font-bold text-neutral-400 transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-0 ${props.class}`}
                >
                    <div class="flex items-center gap-3" dir="ltr">
                        <div
                            class={`${icon} desktop:h-12 h-8 desktop:w-12 w-8 text-transparent`}
                            style={{
                                background: iconColor,
                                color: "transparent",
                            }}
                        />
                        <div class="flex flex-col" dir="ltr">
                            <span class="desktop:block hidden desktop:text-sm text-xs">
                                Listen on
                            </span>
                            <span class="line-height-snug desktop:text-2xl text-lg">
                                {label}{" "}
                                <span class="font-normal">Podcasts</span>
                            </span>
                        </div>
                    </div>
                </a>
            );
        case "link":
            return (
                <a
                    {...props}
                    href={href}
                    class={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 font-bold laptop:text-md text-neutral-400 text-sm transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900 ${props.class}`}
                >
                    <div
                        class={`${icon} h-4 laptop:h-6 laptop:w-6 w-4 text-transparent`}
                        style={{
                            background: iconColor,
                            color: "transparent",
                        }}
                    />
                    <span>{label}</span>
                </a>
            );
    }
}
