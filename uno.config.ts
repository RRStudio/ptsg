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
            primary: "#e65c3d",
            neutral: {
                0: "#fef9f0",
                10: "#e5e1d9",
                20: "#cdc9c2",
                30: "#b4b1ab",
                40: "#9c9994",
                50: "#84817d",
                60: "#6b6966",
                70: "#53514f",
                80: "#3a3938",
                90: "#222121",
                100: "#0a0a0a",
            },
        },
        breakpoint: {
            mobile: "0rem",
            tablet: "56rem",
            laptop: "80rem",
            desktop: "96rem",
        },
    },
});
