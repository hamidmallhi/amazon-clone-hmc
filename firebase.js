import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBcg1UtzbX0RLn8cI9-ta6yKZG4ZupjfAU",
  authDomain: "clone-hmc.firebaseapp.com",
  projectId: "clone-hmc",
  storageBucket: "clone-hmc.appspot.com",
  messagingSenderId: "304235032754",
  appId: "1:304235032754:web:b17ce283beec4cc00a99ab"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) 
: firebase.app()

const db = app.firestore()

export default db