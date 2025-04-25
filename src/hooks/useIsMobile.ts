import { useMediaQuery } from "./useMediaQuery";

export function useIsMobile() {
    return () => {
        const isNotMobile = useMediaQuery("(max-width: 768px)");
        return !isNotMobile();
    };
}
