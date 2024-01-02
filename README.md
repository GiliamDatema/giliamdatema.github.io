# Giliam's Recipes

This single-page web application is built with:
- [Vite](https://vitejs.dev)
- [Vue 3](https://vuejs.org)
- [VueFire](https://vuefire.vuejs.org)
- [Pinia](https://pinia.vuejs.org)
- [PrimeVue](https://primevue.org)
- [PrimeFlex](https://primeflex.org)

## Domains

The app is hosted on:

- [GitHub Pages](https://pages.github.com): [giliamdatema.github.io/recipes](https://giliamdatema.github.io/recipes)
- [Firebase](https://firebase.google.com): [giliam.web.app](https://giliam.web.app) and [giliam.firebaseapp.com](https://giliam.firebaseapp.com)

## Deploy & Preview

The app is automatically deployed to GitHub Pages and Firebase on push/merge to the `main` branch. A Firebase preview is deployed automatically when creating a PR (see link in PR comments).

See GitHub Actions:
- [gh-pages-deploy](.github/workflows/gh-pages-deploy.yml)
- [firebase-preview](.github/workflows/firebase-preview.yml)
- [firebase-deploy](.github/workflows/firebase-deploy.yml)

## Recommended IDE setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project setup

Install dependencies (development):
```sh
npm i
```

Clean install dependencies (production):
```sh
npm ci
```

### Compile and Hot-Reload for Development (Vite)

```sh
npm run dev
```

### Compile and minify for Production + preview locally (Vite)

```sh
npm run build
npm run preview
```

### Lint with [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io)

```sh
npm run lint
npm run lint:fix
npm run lint:style
npm run lint:style:fix
```

### Firebase

Run emulators for local testing:
```sh
firebase emulators:start
```

Run specific emulator only:
```sh
firebase emulators:start --only hosting
```

Alternatively, use _emulated_ backend for one resource, but _real_ backend for other project resources [__NOT recommended__]:
```sh
firebase serve --only hosting
```
