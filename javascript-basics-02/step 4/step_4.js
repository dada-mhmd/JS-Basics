let b = document.querySelector("button");
let _name = document.querySelector("#name");
let _surName = document.querySelector("#surname");
let _city = document.querySelector("#city");
b.addEventListener("click", () => {
  if (confirm("do you want to reset all fields?")) {
    _name.value = "";
    _surName.value = "";
    _city.value = "";
  }
});