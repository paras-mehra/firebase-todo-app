import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFdit0biiRw4TtLPm_LWK4-Z73O-vqa_0",
    authDomain: "todo-app-6f752.firebaseapp.com",
    projectId: "todo-app-6f752",
    storageBucket: "todo-app-6f752.appspot.com",
    messagingSenderId: "564623976491",
    appId: "1:564623976491:web:e690a7c4da7f66fb01a26e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);