import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAOyQ_5zFPAZd1RmQw0ZoWWrWlgq2gKCOY",
  authDomain: "bingehub-c49c2.firebaseapp.com",
  projectId: "bingehub-c49c2",
  storageBucket: "bingehub-c49c2.appspot.com",
  messagingSenderId: "145506859454",
  appId: "1:145506859454:web:a3a93f595cc4e35cb921ef",
  measurementId: "G-YVKN2B3GC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;