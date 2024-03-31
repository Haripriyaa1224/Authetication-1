// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEf2qe85K8gbwbGGfGuTQCoXpQSPPLdGc",
    authDomain: "login-f0d11.firebaseapp.com",
    projectId: "login-f0d11",
    storageBucket: "login-f0d11.appspot.com",
    messagingSenderId: "615234036909",
    appId: "1:615234036909:web:dfea8e34fae050b4c0d224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) //variabble to use in another components
// export default app;