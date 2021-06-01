import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDA2Xy4_7FhtF8GHgKwNcqAf8-XMEjDUxI",
  authDomain: "vue-chat-791c7.firebaseapp.com",
  projectId: "vue-chat-791c7",
  storageBucket: "vue-chat-791c7.appspot.com",
  messagingSenderId: "261398675484",
  appId: "1:261398675484:web:12d1ea20ed60eb5c8d5fd9",
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore();
  
  const { Timestamp, } = firebase.firestore
  export { Timestamp }