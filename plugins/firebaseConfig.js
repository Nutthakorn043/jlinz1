import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDvcnQ5447o0Xx9sc3EGWf7M7VY4pBMyz4",
        authDomain: "jlin17-39e1a.firebaseapp.com",
        projectId: "jlin17-39e1a",
        storageBucket: "jlin17-39e1a.appspot.com",
        messagingSenderId: "784182280969",
        appId: "1:784182280969:web:f54e6fe446a3c734d289d8",
        measurementId: "G-TXH0CETLZ2"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()
