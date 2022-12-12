let spanwrap = document.querySelector(".spanwrap");
let down = document.querySelector(".down");
let up = document.querySelector(".up");


spanwrap.addEventListener("click",()=>{
    down.classList.toggle("on")
    up.classList.toggle("on")
    document.querySelector(".myinfo").classList.toggle("on");
})
