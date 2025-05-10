import { useLocation } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show } from "solid-js";
import ronPhoto from "../assets/ron.jpg";
import royPhoto from "../assets/roy.jpg";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import Nav from "./Nav";

type LayoutProps = {
    children?: JSX.Element;
};

function Footer() {
    const location = useLocation();
    const isAboutPage = () => location.pathname === "/about";

    return (
        <footer class="flex w-full flex-col items-center gap-8 tablet:gap-4 laptop:pt-16 pt-12">
            <Show when={!isAboutPage()}>
                <Credits />
            </Show>
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
            <span class="text-neutral-100 text-sm">
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

function Credits() {
    return (
        <div class="flex flex-col items-center gap-2">
            <div class="flex flex-wrap items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 py-2 laptop:text-md text-sm">
                <span class="font-bold">פותחים סוגריים</span>
                מוגש על ידי
                <img
                    src={royPhoto}
                    alt="רועי"
                    class="h-10 w-10 rounded-full object-cover"
                />
                <span class="font-bold">רועי שביט</span>
                <span class="mx-0.5">&</span>
                <img
                    src={ronPhoto}
                    alt="רון"
                    class="h-10 w-10 rounded-full object-cover"
                />
                <span class="font-bold">רון שביט</span>
                <span>שחושבים שאתם אחלה.</span>
            </div>
        </div>
    );
}

export default function Layout(props: LayoutProps) {
    return (
        <div class="flex h-full w-full justify-center px-3 tablet:px-8 pt-0 pb-3 tablet:pb-8">
            <div class="flex h-full w-full max-w-6xl flex-col items-center">
                <Nav />
                <div class="desktop:block hidden h-12" />
                <div class="w-full">{props.children}</div>
                <Footer />
            </div>
        </div>
    );
}
