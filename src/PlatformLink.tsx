import type { JSX } from "solid-js";

export type PlatformLinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
    platform: "spotify" | "apple" | "youtube";
};

export default function PlatformLink({
    platform,
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

    return (
        <a
            {...props}
            href={href}
            class={`bg-none border-2 border-neutral-400 rounded-lg text-neutral-400 font-bold text-lg px-6 py-3 cursor-pointer hover:bg-neutral-900 hover:border-neutral-900 hover:text-neutral-0 transition-all duration-200 ${props.class}`}
        >
            <div class="flex items-center gap-3" dir="ltr">
                <div
                    class={`${icon} w-12 h-12 text-transparent`}
                    style={{ background: iconColor, color: "transparent" }}
                />
                <div class="flex flex-col" dir="ltr">
                    <span class="text-sm">Listen on</span>
                    <span class="text-2xl line-height-snug">
                        {label} <span class="font-normal">Podcasts</span>
                    </span>
                </div>
            </div>
        </a>
    );
}
