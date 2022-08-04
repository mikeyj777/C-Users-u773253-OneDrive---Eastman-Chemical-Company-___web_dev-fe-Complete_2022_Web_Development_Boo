var drum_keys = document.querySelectorAll(".drum");

for (var i = 0; i < drum_keys.length; i++) {
    drum_keys[i].addEventListener("click", handleClick);
}

function handleClick(event) {
    var id = event.target.id;
    var key = id.slice(-1);
    console.log(key);
}

