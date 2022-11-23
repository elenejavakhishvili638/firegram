// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxxv6ru-BsPKzfO9Ayz0Bk_CNrhEaNo80",
  authDomain: "firegram-fb6c9.firebaseapp.com",
  projectId: "firegram-fb6c9",
  storageBucket: "firegram-fb6c9.appspot.com",
  messagingSenderId: "744301580939",
  appId: "1:744301580939:web:95edeca0d850c2d8e23a8e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
