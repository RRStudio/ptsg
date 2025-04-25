import type { JSX } from "solid-js";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import { RSS_FEED_URL } from "../services/episode";
import Nav from "./Nav";

type LayoutProps = {
    children?: JSX.Element;
};

function Footer() {
    return (
        <footer class="flex w-full flex-col items-center gap-8 tablet:gap-4 laptop:pt-16 pt-12">
            <div class="flex flex-wrap items-center justify-center gap-2 laptop:text-md text-sm">
                תאזינו לנו ב
                <div
                    class="flex flex-wrap items-center justify-center gap-2"
                    dir="ltr"
                >
                    <PlatformLink platform="spotify" variant="link" />
                    <PlatformLink platform="apple" variant="link" />
                    <PlatformLink platform="youtube" variant="link" />
                </div>
                <div>
                    או ישירות ב-
                    <Link
                        variant="inline-link"
                        href="https://feeds.transistor.fm/ptsgdev"
                    >
                        RSS Feed
                    </Link>
                </div>
            </div>
            <span class="text-neutral-400 text-sm">
                הקוד המזעזע שלנו נמצא ב-
                <Link
                    variant="inline-link"
                    href="https://github.com/r0nsha/ptsg"
                >
                    GitHub
                </Link>
                .
            </span>
        </footer>
    );
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div class="flex h-full w-full justify-center px-3 tablet:px-8 pt-0 pb-3 tablet:pb-8">
            <div class="flex h-full w-full max-w-6xl flex-col items-center">
                <Nav />
                <div class="desktop:block hidden h-12" />
                <div class="w-full">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
