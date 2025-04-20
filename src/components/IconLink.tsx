export type IconLinkProps = {
    class?: string;
    icon: string;
    href: string;
};

export default function IconLink(props: IconLinkProps) {
    return (
        <a
            href={props.href}
            class={`w-6 h-6 text-neutral-400 cursor-pointer hover:text-neutral-900 transition-color duration-200 ${props.class}`}
        >
            <div class={`${props.icon} w-full h-full`} />
        </a>
    );
}
