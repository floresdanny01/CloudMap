import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBgA8pY4qgEGp8ZWHb7pAHorfjWnxWr5A8",
    authDomain: "cloud-processing-map.firebaseapp.com",
    projectId: "cloud-processing-map",
    storageBucket: "cloud-processing-map.appspot.com",
    messagingSenderId: "1004802621915",
    appId: "1:1004802621915:web:bb9d12afaf9ac53c3127fe",
    measurementId: "G-PL8H8RBN0J"
});

// Initialize Firebase
const firestore = getFirestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth()
const db = getFirestore(app);

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In")

}