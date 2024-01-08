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
  const NODE_ENV = process.env.NODE_ENV
  console.log(`NODE_ENV = ${JSON.stringify(NODE_ENV)}`)
  console.log(`.env ${JSON.stringify(env, null, 2)}`)
  return {
    // vite config
    define: {
      APP_ENV: JSON.stringify(env.VITE_APP_ENV),
      APP_TITLE: JSON.stringify(env.VITE_APP_TITLE),
      APP_VERSION: JSON.stringify(env.VITE_APP_VERSION),
      // Firebase config for GitHub Pages, stored in repo secrets
      FIREBASE_CONFIG: JSON.stringify(process.env.FIREBASE_CONFIG)
    },
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
