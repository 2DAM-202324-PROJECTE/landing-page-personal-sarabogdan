import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
    base: '/landing-page-personal-sarabogdan/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                preus: resolve(__dirname, 'jocs/catkin.html'),
                about: resolve(__dirname, 'jocs/novelium.html'),
                comprar: resolve(__dirname, 'comprar.html'),
            },
        },
    },
})