import { getAnalytics } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmB95HyeSWknmlyl6SN1PEEjvey1iAhKI",
    authDomain: "ptsg-cb647.firebaseapp.com",
    projectId: "ptsg-cb647",
    messagingSenderId: "696681905120",
    appId: "1:696681905120:web:b5ae021d07d8652916c985",
    measurementId: "G-2CX17FRVGC",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export { app, analytics };
