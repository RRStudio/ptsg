import type { JSX } from "solid-js";
import IconLink from "../IconLink";
import Link from "../Link";
import logo from "../assets/ptsg_logo.svg";

type LayoutProps = {
    children?: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div class="w-full h-full pt-0 px-8 pb-8 flex justify-center">
            <div class="w-full max-w-6xl h-full flex flex-col items-center">
                <div class="w-full flex justify-center items-center gap-20">
                    <div class="flex justify-center items-center gap-8">
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
                        <Link href="/ask">שאל אותנו שאלה</Link>
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

                {children}
            </div>
        </div>
    );
}
