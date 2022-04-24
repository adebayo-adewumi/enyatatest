export default {
    components: true,
    ssr: false,
    css: [
        '@/assets/css/style.css',
    ],
    buildModules: [
        '@nuxt/postcss8'
    ],
    build: {
        postcss: {
            plugins: {
            tailwindcss: {},
            autoprefixer: {},
            },
        },
    },
    modules: ['@nuxtjs/axios']
}