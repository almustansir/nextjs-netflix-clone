// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB07SpYmLU8k0OxmzaVM1aE9X6OonEXAZQ",
    authDomain: "nextjs-netflix-clone-12823.firebaseapp.com",
    projectId: "nextjs-netflix-clone-12823",
    storageBucket: "nextjs-netflix-clone-12823.appspot.com",
    messagingSenderId: "940466493957",
    appId: "1:940466493957:web:ae8b007639837a67489a6c"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }