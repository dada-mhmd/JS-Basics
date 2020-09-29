var div1 = document.querySelector("div");
var input1 = document.querySelector("input");

input1.addEventListener('change', function() {
    div1.textContent = input1.value;
})