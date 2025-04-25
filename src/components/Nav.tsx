import { For, createSignal } from "solid-js";
import logo from "../assets/ptsg_logo.svg";
import IconLink from "../components/IconLink";
import Link from "../components/Link";

function Logo() {
    return (
        <a href="/">
            <img
                src={logo}
                class="desktop:h-60 h-32 laptop:h-52 tablet:h-40 desktop:w-60 laptop:w-52 tablet:w-40 w-32"
                alt="Logo"
            />
        </a>
    );
}

type LinksProps = {
    linkClass?: string;
    onClick?: (event: MouseEvent) => void;
};

function Links({ linkClass, onClick }: LinksProps) {
    const links = [
        { href: "/", label: "בית" },
        { href: "/episodes", label: "פרקים" },
        { href: "/ask", label: "שליחת שאלה" },
        { href: "/about", label: "אודות" },
    ];

    return (
        <For each={links}>
            {(link) => (
                <Link href={link.href} class={linkClass} onClick={onClick}>
                    {link.label}
                </Link>
            )}
        </For>
    );
}

function Social() {
    return (
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
    );
}

function Mobile() {
    const [menuOpen, setMenuOpen] = createSignal(false);

    function IconButton({
        icon,
        onClick,
    }: { icon: string; onClick: () => void }) {
        return (
            <button
                type="button"
                class="h-6 w-6 cursor-pointer text-neutral-400 transition-color duration-200 hover:text-neutral-900"
                onClick={onClick}
            >
                <div class={`${icon} h-full w-full`} />
            </button>
        );
    }

    return (
        <>
            <div class="flex tablet:hidden w-full items-center justify-between gap-20 pe-2">
                <Logo />
                <IconButton
                    icon="i-fa-bars"
                    onClick={() => setMenuOpen(true)}
                />
            </div>
            <div
                class={`fixed top-0 z-10 flex h-full w-full flex-col bg-neutral-0 px-5 py-13 transition-all duration-200 ${
                    menuOpen() ? "left-0" : "left-[-100%]"
                }`}
            >
                <div class="flex w-full justify-end">
                    <IconButton
                        icon="i-fa-close"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
                <div class="flex w-full flex-1 flex-col items-center justify-center gap-10">
                    <div class="flex w-full flex-col gap-3">
                        <Links
                            linkClass="text-2xl"
                            onClick={() => setMenuOpen(false)}
                        />
                    </div>
                    <Social />
                </div>
            </div>
        </>
    );
}

function Desktop() {
    return (
        <div class="tablet:flex hidden w-full items-center justify-center gap-20">
            <div class="flex items-center justify-center gap-8">
                <Logo />
                <Links />
            </div>

            <Social />
        </div>
    );
}

export default function Nav() {
    return (
        <>
            <Mobile />
            <Desktop />
        </>
    );
}
