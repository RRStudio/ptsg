export type IconLinkProps = {
    class?: string;
    icon: string;
    href: string;
};

export default function IconLink(props: IconLinkProps) {
    return (
        <a
            href={props.href}
            class={`h-6 w-6 cursor-pointer text-neutral-50 transition-color duration-200 hover:text-neutral-90 ${props.class}`}
        >
            <div class={`${props.icon} h-full w-full`} />
        </a>
    );
}
