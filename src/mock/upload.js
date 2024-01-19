import MOCK_DATA from './data.json' assert {type: 'json'}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBADsh66FJpSEcptMu7_8XMpCA92jvnrT0",
    authDomain: "your-style-sock.firebaseapp.com",
    projectId: "your-style-sock",
    storageBucket: "your-style-sock.appspot.com",
    messagingSenderId: "932501257065",
    appId: "1:932501257065:web:cd5aafe5297088d2585bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const productosRef = collection(db,'productos')

MOCK_DATA.forEach(item => {
    delete item.id
    addDoc(productosRef, item )
})



