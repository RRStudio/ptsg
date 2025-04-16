import { defineConfig, presetMini, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetMini({
			theme: {
				colors: {
					primary: "#fc5185",
					blue: "#1f4168",
					cyan: "#3fc1c9",
					white: "#fffcf6",
					black: "#000000",
				},
			},
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				heading: "FB Katalogue",
				sans: "Noto Sans Hebrew",
			},
		}),
	],
});
