import { resolve } from 'path'

export default {
    // config options
    base: '/landing-page-personal-sarabogdan/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          preus: resolve(__dirname, 'preus/index.html')
        },
      },
    },
}
