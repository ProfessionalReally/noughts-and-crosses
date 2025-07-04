import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@src': resolve(__dirname, './src'),
		},
	},
});
