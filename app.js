let login_btn = document.getElementById("Login_btn");
let Signup_btn = document.getElementById("Signup_btn");
let np_btn = document.getElementById("np_btn");
let blog_btn = document.getElementById("blog_btn");

login_btn.addEventListener("click" ,()=>{
    location.href = "page/login.html"
})

Signup_btn.addEventListener("click" ,()=>{
    location.href = "page/Signup.html"
})

np_btn.addEventListener("click" ,()=>{
    location.href = "page/blog.html"
})

blog_btn.addEventListener("click" ,()=>{
    location.href = "page/blog.html"
})

// Todo : connect firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection , addDoc  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase/firestore.js";
// Todo: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDBfllD0_3erohnqzff6scfMENJ_t3tReI",
  authDomain: "task-project-c94df.firebaseapp.com",
  projectId: "task-project-c94df",
  storageBucket: "task-project-c94df.firebasestorage.app",
  messagingSenderId: "417078899457",
  appId: "1:417078899457:web:fb2479043950563cb0a100",
  measurementId: "G-GCZQ560T8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

// TODO : Blog Page