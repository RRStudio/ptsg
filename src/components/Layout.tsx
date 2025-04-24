import type { JSX } from "solid-js";
import logo from "../assets/ptsg_logo.svg";
import IconLink from "../components/IconLink";
import Link from "../components/Link";
import PlatformLink from "../components/PlatformLink";
import { RSS_FEED_URL } from "../services/episode";

type LayoutProps = {
    children?: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div class="flex h-full w-full justify-center px-8 pt-0 pb-8">
            <div class="flex h-full w-full max-w-6xl flex-col items-center">
                <div class="flex w-full items-center justify-center gap-20">
                    <div class="flex items-center justify-center gap-8">
                        <a href="/">
                            <img
                                src={logo}
                                width="240"
                                height="240"
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

                <div>{children}</div>

                <footer class="flex flex-col items-center gap-4 pt-16">
                    <div class="flex items-center gap-2">
                        תאזינו לנו ב
                        <div class="flex items-center gap-2" dir="ltr">
                            <PlatformLink platform="spotify" variant="link" />
                            <PlatformLink platform="apple" variant="link" />
                            <PlatformLink platform="youtube" variant="link" />
                        </div>
                        או ישירות ב
                        <Link variant="inline-link" href={RSS_FEED_URL}>
                            RSS Feed
                        </Link>
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
            </div>
        </div>
    );
}
