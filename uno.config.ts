import { defineConfig, presetMini, presetWebFonts } from "unocss";

export default defineConfig({
	presets: [
		presetMini({
			theme: {
				colors: {
					primary: {
						DEFAULT: "#fc5185",
						dark: "#fc5185",
					},
					secondary: {
						DEFAULT: "#3fc1c9",
						dark: "#3fc1c9",
					},
					dim: {
						DEFAULT: "#1f4168",
						dark: "#1f4168",
					},
					fg: {
						DEFAULT: "#fffcf6",
						dark: "#fffcf6",
					},
					bg: {
						DEFAULT: "#000000",
						dark: "#000000",
					},
				},
			},
		}),
		presetWebFonts({
			provider: "google",
			fonts: {
				serif: "Alef",
				sans: "Noto Sans Hebrew",
			},
		}),
	],
});
