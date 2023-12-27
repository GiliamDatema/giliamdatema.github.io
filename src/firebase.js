// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKlcNcFqpf2Wn8fBG2vQy3d3I8G0peCns',
  authDomain: 'giliam.firebaseapp.com',
  databaseURL: 'https://giliam-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'giliam',
  storageBucket: 'giliam.appspot.com',
  messagingSenderId: '101997620398',
  appId: '1:101997620398:web:95daaa44927913f92d913f',
  measurementId: 'G-2SG30381T7'
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp)
