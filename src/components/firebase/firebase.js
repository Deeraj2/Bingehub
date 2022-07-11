import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "bingehub-c49c2.firebaseapp.com",
  projectId: "bingehub-c49c2",
  storageBucket: "bingehub-c49c2.appspot.com",
  messagingSenderId: "145506859454",
  appId: `${process.env.REACT_APP_FIREBASE_APPID}`,
  measurementId: "G-YVKN2B3GC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;