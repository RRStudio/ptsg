import { defineConfig, presetMini, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetMini({
			theme: {
				colors: {
					// TODO: define brand colors
				},
			},
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				// TODO: header font should be like logo
				// TODO: define brand font for the rest of the text
				sans: "Inter",
			},
		}),
	],
});
