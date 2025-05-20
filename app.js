let loginbtn = document.getElementById("Login_btn");
let loginbtn1 = document.getElementById("Login_btn1");
let signupbtn = document.getElementById("Signup_btn");
let signupbtn1 = document.getElementById("Signup_btn1");
let npbtn = document.getElementById("np_btn");
let blogbtn = document.getElementById("blog_btn");
let blogbtn1 = document.getElementById("blog_btn1");

loginbtn.addEventListener("click" ,()=>{
    window.location.href = "/page/login.html";
})
loginbtn1.addEventListener("click" ,()=>{
    window.location.href = "/page/login.html";
})

signupbtn.addEventListener("click" ,()=>{
    location.href = "page/Signup.html";
})
signupbtn1.addEventListener("click" ,()=>{
    location.href = "page/Signup.html";
})

npbtn.addEventListener("click" ,()=>{
    location.href = "page/blog.html";
})

blogbtn.addEventListener("click" ,()=>{
    location.href = "page/blog.html";
})
blogbtn1.addEventListener("click" ,()=>{
    location.href = "page/blog.html";
})

let divbtn = document.getElementById("divbtn");
let menu_btn = document.getElementById("menu_btn");
let close_btn = document.getElementById("close_btn");
let divbtn2 = document.getElementById("divbtn2","divbtn");



menu_btn.addEventListener("click",()=>{
    divbtn2.style.display = "block"
    close_btn.style.display = "block"
    menu_btn.style.display = "none"
})

close_btn.addEventListener("click",()=>{
    if (menu_btn.style.display = "none") {
        divbtn2.style.display = "none"
        close_btn.style.display = "none"
        menu_btn.style.display = "block"
    }
})



// Todo : connect firebase

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getFirestore, collection , addDoc  } from "https://www.gstatic.com/firebasejs/11.6.0/firebase/firestore.js";
// // Todo: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDBfllD0_3erohnqzff6scfMENJ_t3tReI",
//   authDomain: "task-project-c94df.firebaseapp.com",
//   projectId: "task-project-c94df",
//   storageBucket: "task-project-c94df.firebasestorage.app",
//   messagingSenderId: "417078899457",
//   appId: "1:417078899457:web:fb2479043950563cb0a100",
//   measurementId: "G-GCZQ560T8E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const db = getFirestore();

// TODO : Blog Page