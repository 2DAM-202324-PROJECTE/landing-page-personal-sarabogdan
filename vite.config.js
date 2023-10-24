import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                preus: resolve(__dirname, 'preus/index.html'),
                about: resolve(__dirname, 'preus/about.html'),
            },
        },
    },
})