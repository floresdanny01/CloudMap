import { initializeapp } from "firebase/app";
import { getanalytics } from "firebase/analytics";
import { getfirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// initialize firebase
const firebaseApp = initializeapp({
    apikey: "aizasybga8py4qgegp8zwhb7pahorfjwnxwr5a8",
    authdomain: "cloud-processing-map.firebaseapp.com",
    projectid: "cloud-processing-map",
    storagebucket: "cloud-processing-map.appspot.com",
    messagingsenderid: "1004802621915",
    appid: "1:1004802621915:web:bb9d12afaf9ac53c3127fe",
    measurementid: "g-pl8h8rbn0j"
});


const auth = getAuth.auth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:5000");

const loginEmailPassword = async () => {
    const loginEmail = email.value;
    const loginPassword = password.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    }

    catch (error) {
        console.log(error);
        showLoginError(error);
    }

}

btnLogin.addEventListener("click", loginEmailPassword);

const createUserWithEmailAndPassword = async () => {
    const loginEmail = email.value;
    const loginPassword = password.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user);
    }

    catch (error) {
        console.log(error);
        showLoginError(error);
    }

}

btnLogin.addEventListener("click", createUserWithEmailAndPassword);
