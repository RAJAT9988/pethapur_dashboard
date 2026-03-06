import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/stream': {
				target: 'http://localhost:3001',
				changeOrigin: true
			}
		},
		fs: {
			// Allow serving files from project root during dev.
			// This fixes 404 for assets like /cctv_camera.glb when they are placed in the repo root.
			allow: [fileURLToPath(new URL('.', import.meta.url))]
		}
	}
});
