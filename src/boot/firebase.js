import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCeHUOzWe2BniMY1F4_y30mPo1YQa8T6tU',
  authDomain: 'fizzdevtask.firebaseapp.com',
  projectId: 'fizzdevtask',
  storageBucket: 'fizzdevtask.appspot.com',
  messagingSenderId: '406733579106',
  appId: '1:406733579106:web:28fad27a04fd4383df423b'
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

// Use these for db & auth
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
