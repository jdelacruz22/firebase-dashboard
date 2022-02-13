// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCYtcmOaLVKeL3po9RoCBAlJ_JiCGiAJs",
    authDomain: "storefront-e78fe.firebaseapp.com",
    databaseURL: "https://storefront-e78fe-default-rtdb.firebaseio.com",
    projectId: "storefront-e78fe",
    storageBucket: "storefront-e78fe.appspot.com",
    messagingSenderId: "776716075332",
    appId: "1:776716075332:web:8258f4ae5c50ce8a911711"
  };

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
const storage = getStorage(app)

// export the service objects
export {db, storage}
