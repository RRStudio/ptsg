import type { JSX } from "solid-js";
import logo from "../assets/ptsg_logo.svg";
import IconLink from "../components/IconLink";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import { RSS_FEED_URL } from "../services/episode";

type LayoutProps = {
    children?: JSX.Element;
};

function NavBar() {
    return (
        <div class="flex w-full items-center justify-center gap-20">
            <div class="flex items-center justify-center gap-8">
                <a href="/">
                    <img
                        src={logo}
                        class="desktop:h-60 h-32 laptop:h-52 tablet:h-40 desktop:w-60 laptop:w-52 tablet:w-40 w-32"
                        alt="Logo"
                    />
                </a>
                <Link href="/">בית</Link>
                <Link href="/episodes">פרקים</Link>
                <Link href="/ask">שליחת שאלה</Link>
                <Link href="/about">אודות</Link>
            </div>

            <div class="flex gap-3">
                <IconLink
                    icon="i-fa6-brands-telegram"
                    href="https://t.me/ptsgdev"
                />
                <IconLink
                    icon="i-fa6-brands-facebook"
                    href="https://www.facebook.com/groups/ptsgdev"
                />
            </div>
        </div>
    );
}

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
                    <Link variant="inline-link" href={RSS_FEED_URL}>
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
        <div class="flex h-full w-full justify-center px-8 pt-0 pb-8">
            <div class="flex h-full w-full max-w-6xl flex-col items-center">
                <NavBar />
                <div class="desktop:block hidden h-12" />
                <div class="w-full">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
