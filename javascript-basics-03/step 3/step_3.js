
var green = document.querySelector(".green");
var Red = document.querySelector('.red');
var Blue = document.querySelector('.blue');
var text = document.getElementById("text");

green.addEventListener("click",function(){
    text.style.color = "green";
})

Red.addEventListener("click",function(){
    text.style.color = "red";
})

Blue.addEventListener("click",function(){
    text.style.color = "blue";
})