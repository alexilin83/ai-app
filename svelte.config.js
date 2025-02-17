import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		paths: {
			assets: process.argv.includes('dev') ? '' : 'https://alexilin.ru/docs',
			base: process.argv.includes('dev') ? '' : '/docs'
		}
	},
};

export default config;
