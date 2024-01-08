// Import the functions needed from the respective SDKs (using modular API)
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add required SDKs for Firebase services used by the app
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase using SDK auto-configuration
// The config can be found in Firebase console project settings
async function initFirebase () {
  /* eslint-disable no-undef */
  const response = await fetch(FIREBASE_CONFIG_URL) // defined in vite.config.js
  return initializeApp(await response.json())
}
export const firebaseApp = initFirebase()
// export const analytics = getAnalytics(firebaseApp)
