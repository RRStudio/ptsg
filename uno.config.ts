import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from "unocss";

export default defineConfig({
    presets: [
        presetWind4(),
        presetWebFonts({
            provider: "google",
            fonts: {
                sans: {
                    name: "Noto Sans Hebrew",
                    weights: [400, 700, 900],
                },
            },
        }),
        presetIcons({}),
    ],
    theme: {
        colors: {
            primary: "#fc5185",
            secondary: "#3fc1c9",
            dim: "#1f4168",
            neutral: {
                0: "#0a0a0a",
                50: "#1e1e1e",
                100: "#323232",
                150: "#464646",
                200: "#5a5a5a",
                250: "#6e6e6e",
                300: "#828282",
                350: "#969696",
                400: "#aaaaaa",
                450: "#bebebe",
                500: "#d2d2d2",
                550: "#e6e6e6",
                600: "#fafafa",
                650: "#fbfbfb",
                700: "#fcfcfc",
                750: "#fdfdfd",
                800: "#fefefe",
                850: "#fefeff",
                900: "#fffcf6",
            },
        },
    },
});
