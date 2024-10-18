/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				yekan: ["IRANYekan", "sans-serif"],
				yekanXB: ['"IRANYekan ExtraBlack"', "sans-serif"],
			},
			colors: {
				darkClr: "#1F2128",
				primaryClr: "#6C5DD3",
				secondaryClr: "#FF754C",
				textClr: "#C6C6C6",
				textMeutedClr: "#808191",
			},
		},
	},
	plugins: [],
};
