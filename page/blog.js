let contentPost_btn = document.querySelectorAll(
  "#Contentpost_btn,#Contentpost_btn1"
);
let mainblog = document.getElementById("mainblog");
let confrmclose = document.getElementById("close");
let menu_btn = document.getElementById("menu_btn");
let close_btn = document.getElementById("close_btn");

contentPost_btn.forEach((val) => {
  val.addEventListener("click", () => {
    if ((mainblog.style.display = "none")) {
      mainblog.style.display = "block";
    } else if ((mainblog.style.display = "block")) {
      mainblog.style.display = "none";
    }
  });
});

confrmclose.addEventListener("click", () => {
  mainblog.style.display = "none";
});

menu_btn.addEventListener("click", () => {
  divbtn2.style.display = "block";
  close_btn.style.display = "block";
  menu_btn.style.display = "none";
});

close_btn.addEventListener("click", () => {
  if ((menu_btn.style.display = "none")) {
    divbtn2.style.display = "none";
    close_btn.style.display = "none";
    menu_btn.style.display = "block";
  }
});
