import { defineConfig, presetMini, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetMini(),
		presetWebFonts({
			provider: "google",
			fonts: {
				heading: "Secular One",
				sans: "Noto Sans Hebrew",
			},
		}),
	],
	theme: {
		colors: {
			primary: "#fc5185",
			secondary: "#3fc1c9",
			dim: "#1f4168",
			fg: "#fffcf6",
			bg: "#000000",
		},
	},
});
