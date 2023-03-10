/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black': '#0A0D12',
				'info-400': '#1DADDB'
			}
		},
	},
	plugins: [],
}
