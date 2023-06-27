
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAvTqmLK1UONA9escBY8bdyqKgNOKvq6yY",
    authDomain: "eduspace-af41d.firebaseapp.com",
    projectId: "eduspace-af41d",
    storageBucket: "eduspace-af41d.appspot.com",
    messagingSenderId: "148850866237",
    appId: "1:148850866237:web:7278eeae75e52465fa5254",
    measurementId: "G-MTVHBZDBZL"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider,storage  };
export default db;