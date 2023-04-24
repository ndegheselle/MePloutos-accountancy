import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as path from 'path';

// Proxy : https://stackoverflow.com/questions/72753092/how-to-proxy-on-svelte-kit-in-dev-mode
// Dev : https://dev.to/xjamundx/adding-a-rest-api-to-your-vite-server-in-5-seconds-270g

export default defineConfig({
	plugins: [sveltekit()],
    resolve: {
        alias: {
            // these are the aliases and paths to them
            '@styles': path.resolve('./src/scss'),
            '@lib': path.resolve('./src/lib'),
            '@global': path.resolve('./src/lib/_global'),
            '@components': path.resolve('./src/lib/_components'),
        }
    },
    server: {
        host: "0.0.0.0",
        port: 80,
        watch: {
            usePolling: true
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@styles/colors.scss" as *;`
            }
        }
    }
});