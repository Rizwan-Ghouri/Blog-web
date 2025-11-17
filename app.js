let loginbtn = document.getElementById("Login_btn");
let loginbtn1 = document.getElementById("Login_btn1");
let signupbtn = document.getElementById("Signup_btn");
let signupbtn1 = document.getElementById("Signup_btn1");
let npbtn = document.getElementById("np_btn");
let blogbtn = document.getElementById("blog_btn");
let blogbtn1 = document.getElementById("blog_btn1");

loginbtn.addEventListener("click", () => {
  location.href = "page/login.html";
});
loginbtn1.addEventListener("click", () => {
  location.href = "page/login.html";
});

signupbtn.addEventListener("click", () => {
  location.href = "page/Signup.html";
});
signupbtn1.addEventListener("click", () => {
  location.href = "page/Signup.html";
});

npbtn.addEventListener("click", () => {
  location.href = "page/blog.html";
});

blogbtn.addEventListener("click", () => {
  location.href = "page/blog.html";
});
blogbtn1.addEventListener("click", () => {
  location.href = "page/blog.html";
});

let divbtn = document.getElementById("divbtn");
let menu_btn = document.getElementById("menu_btn");
let close_btn = document.getElementById("close_btn");
let divbtn2 = document.getElementById("divbtn2", "divbtn");

menu_btn.addEventListener("click", () => {
  divbtn2.style.display = "block";
  close_btn.style.display = "block";
  menu_btn.style.display = "none";
});

close_btn.addEventListener("click", () => {
  if (menu_btn.style.display === "none") {
    divbtn2.style.display = "none";
    close_btn.style.display = "none";
    menu_btn.style.display = "block";
  }
});
