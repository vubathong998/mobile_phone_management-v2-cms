import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    css: {
        devSourcemap: true,
        postcss: {
            plugins: [tailwindcss()]
        }
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    }
});
