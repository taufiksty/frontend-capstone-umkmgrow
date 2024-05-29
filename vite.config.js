import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './index.html',
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		cors: {
			origin: 'https://backend-capstone-umkmgrow.vercel.app',
		},
		proxy: {
			'/api': {
				target: 'https://backend-capstone-umkmgrow.vercel.app/api',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
