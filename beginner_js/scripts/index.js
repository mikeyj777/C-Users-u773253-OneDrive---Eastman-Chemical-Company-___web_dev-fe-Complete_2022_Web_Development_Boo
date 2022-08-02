// var header = document.lastElementChild.lastElementChild.firstElementChild;
// header.innerHTML = "Not Hello";
// header.style.color = "red";

var arr = document.querySelector("ul");

var list = arr.querySelectorAll("li");

list[0].style.color = "yellow";
list[0].querySelector("a").style.color = "yellow";

list[1].style.color = "blue";

list[2].style.color = "red";
