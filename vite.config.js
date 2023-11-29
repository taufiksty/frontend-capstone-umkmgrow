import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		cors: {
			origin: 'http://18.143.65.60:3000',
		},
		proxy: {
			'/api': {
				target: 'http://18.143.65.60:3000/api',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
