import { For } from "solid-js";
import logo from "../assets/ptsg_logo.svg";
import IconLink from "../components/IconLink";
import Link from "../components/Link";

type LinkData = {
    href: string;
    label: string;
};

const links: LinkData[] = [
    { href: "/", label: "בית" },
    { href: "/episodes", label: "פרקים" },
    { href: "/ask", label: "שליחת שאלה" },
    { href: "/about", label: "אודות" },
];

export default function Nav() {
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
                <For each={links}>
                    {(link) => <Link href={link.href}>{link.label}</Link>}
                </For>
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
