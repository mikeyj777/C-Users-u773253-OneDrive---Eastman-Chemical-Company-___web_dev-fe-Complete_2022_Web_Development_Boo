var drum_keys = document.querySelectorAll(".drum");
var orig_color = -1;
var keys = ["a", "w", "s", "d", "j", "k", "l"];

for (var i = 0; i < drum_keys.length; i++) {
    drum_keys[i].addEventListener("mousedown", handleClick);
    drum_keys[i].addEventListener("mouseup", resetColor);
}

function handleClick() {
    var id = this.id;
    var key = id.slice(-1);
    var audio = new Audio('assets/sounds/' + key + '.mp3');
    audio.play();

    orig_color = this.style.color;
    this.style.color = "white";
    this.classList.toggle("pressed");


}

function resetColor() {
    this.style.color = orig_color;
    this.classList.toggle("pressed");
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function onKeyDown(event) {
    
    var key = event.key.toLowerCase();
    if (keys.includes(key)) {
        var audio = new Audio('assets/sounds/' + key + '.mp3');
        audio.play();
        var key_elem = document.getElementById("btn_" + key);
        orig_color = key_elem.style.color;
        key_elem.style.color = "white";
        key_elem.classList.toggle("pressed");
    }

}

function onKeyUp(event) {

    var key = event.key.toLowerCase();
    if (keys.includes(key)) {
        var key_elem = document.getElementById("btn_" + key);
        key_elem.style.color = orig_color;
        key_elem.classList.toggle("pressed");
    }

}


