// var header = document.lastElementChild.lastElementChild.firstElementChild;
// header.innerHTML = "Not Hello";
// header.style.color = "red";

var arr = document.querySelector("ul");

var list = arr.querySelectorAll("li");

list[0].style.color = "yellow";
list[0].querySelector("a").style.color = "yellow";

list[1].style.color = "blue";

list[2].style.color = "red";

var btn = document.getElementById("btn1");
btn.style.backgroundColor = "red";

// document.querySelector("#btn1").classList.add("invisible");

// document.querySelector("#btn1").classList.remove("invisible");

// document.querySelector("#btn1").classList.toggle("invisible");

document.querySelector("h1").classList.toggle("huge");
