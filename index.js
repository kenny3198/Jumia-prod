const dropMenu = document.querySelector(".drop-down");
const bar = document.querySelector("#menu");
bar.addEventListener("click", (e) => {
    e.preventDefault();
    dropMenu.classList.toggle("active")
    
});
const input = document.getElementById("input");
var buttonEl = document.getElementById("btn"); 
buttonEl.addEventListener("click", () => {
    if(input.value.length > 0) {
     input.value = "";   
    }

   
})