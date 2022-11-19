const firebaseConfig = {
    apiKey: "AIzaSyBgA8pY4qgEGp8ZWHb7pAHorfjWnxWr5A8",
    authDomain: "cloud-processing-map.firebaseapp.com",
    projectId: "cloud-processing-map",
    storageBucket: "cloud-processing-map.appspot.com",
    messagingSenderId: "1004802621915",
    appId: "1:1004802621915:web:01a8f92e041a16d23127fe",
    measurementId: "G-T7Z0K1V0N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth()

function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In")

}