import "bootstrap";
import "./scss/index.scss";

const hiddenBtn = document.querySelector(".hidden-btn")
const hiddenCheck = document.querySelector(".hidden-check")

hiddenBtn.addEventListener("click", ()=>{
    hiddenCheck.checked = true;
})