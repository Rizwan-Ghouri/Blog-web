let Postdir_btn = document.getElementById("Postdir_btn");
let mainblog = document.getElementById("mainblog");
let closebtn = document.getElementById("close");


Postdir_btn.addEventListener("click" ,()=>{
    // mainblog.style.display = 'block'
    if (mainblog.style.display = 'none') {
        mainblog.style.display = 'block'

    }else  if (mainblog.style.display = 'block') {
        mainblog.style.display = 'none'
    }
})

closebtn.addEventListener("click",()=>{
    mainblog.style.display = "none";
})