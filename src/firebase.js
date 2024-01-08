// Import the functions needed from the respective SDKs (using modular API)
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add required SDKs for Firebase services used by the app
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase using SDK auto-configuration
// The config can be found in Firebase console project settings
async function initFirebase () {
  /* eslint-disable no-undef */
  if (FIREBASE_CONFIG) { // For GH Pages, config stored in GitHub repo secrets
    return initializeApp(FIREBASE_CONFIG)
  }
  // Firebase SDK auto-configuration
  const response = await fetch('/__/firebase/init.json')
  return initializeApp(await response.json())
}
export const firebaseApp = initFirebase()
// export const analytics = getAnalytics(firebaseApp)
