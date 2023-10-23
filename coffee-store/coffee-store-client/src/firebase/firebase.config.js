// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxcjxLoN0BeST9RiS9LdEi2xhczRvxihM",
  authDomain: "dimble-firebase-test.firebaseapp.com",
  projectId: "dimble-firebase-test",
  storageBucket: "dimble-firebase-test.appspot.com",
  messagingSenderId: "637542931250",
  appId: "1:637542931250:web:c158a2e12bc997a0e2d52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;