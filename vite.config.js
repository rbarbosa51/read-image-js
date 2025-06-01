import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    server: {
        open: true,
    },
    plugins: [tailwindcss()],
    base: 'https://rbarbosa51.github.io/read-image-js'
})