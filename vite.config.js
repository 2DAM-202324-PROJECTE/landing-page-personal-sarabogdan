import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/landing-page-personal-sarabogdan/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'preus/index.html'),
                preus: resolve(__dirname, 'preus/projectes.html'),
                about: resolve(__dirname, 'preus/contacte.html'),
            },
        },
    },
})