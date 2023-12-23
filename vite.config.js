import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint2'
import stylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // process.cwd() = current working directory = project root where index.html is located
  const env = loadEnv(mode, process.cwd())
  console.log(`NODE_ENV = ${JSON.stringify(process.env.NODE_ENV)}`)
  console.log(`.env ${JSON.stringify(env, null, 2)}`)
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
      __APP_TITLE__: JSON.stringify(env.VITE_APP_TITLE),
      __APP_VERSION__: JSON.stringify(env.VITE_APP_VERSION)
    },
    base: process.env.NODE_ENV === 'production' ? '/recipes/' : '/',
    plugins: [
      vue(),
      eslint({
        fix: true // enable auto fix
      }),
      stylelint({
        fix: true
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
