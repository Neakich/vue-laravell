import { initializeApp } from "firebase";

const app = initializeApp({
    apiKey: "AIzaSyCLG75WIBXsRvQyyd32awdJ1KFdLz2UskE",
    authDomain: "vue-firebase-testing.firebaseapp.com",
    databaseURL: "https://vue-firebase-testing.firebaseio.com",
    projectId: "vue-firebase-testing",
    storageBucket: "vue-firebase-testing.appspot.com",
    messagingSenderId: "599339014626"
})

export const db = app.database();
export const usersRef = db.ref('users') 
