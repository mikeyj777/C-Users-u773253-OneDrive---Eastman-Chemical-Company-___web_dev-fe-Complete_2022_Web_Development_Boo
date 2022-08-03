function diceRoll() {
    return Math.floor(6 * Math.random()) + 1;
}

var player_rolls = [0, 0]

function rollDiceForAllPlayers() {
    for (var i = 0; i < player_rolls.length; i++) {
        player_rolls.push(diceRoll());
    }
}

function toggleReloadTracker() {
    if (sessionStorage.getItem("is_reloaded") === "true") {
        sessionStorage.getItem("is_reloaded") = "false"
    } else {
        sessionStorage.getItem("is_reloaded") = "true"
    }
}

function set_images() {
    for (var i = 0; i < player_rolls.length; i++) {
        var img_class = ".img" + (i+1);
        var img_name = 'images/dice' + player_rolls[i] + '.png';
        document.querySelector(img_class).setAttribute("src", img_name);
    }
}

function declare_winner() {
    max_val = -1;
    max_player = -1;
    for (var i = 0; i < player_rolls.length; i++) {
        if (player_rolls[i] > max_val) {
            max_val = player_rolls[i];
            max_player = i;
        }
    }
    
}

rollDiceForAllPlayers();
set_images();

if (sessionStorage.getItem("is_reloaded") === null) {
    sessionStorage.setItem("is_reloaded", "false");

}

if (sessionStorage.getItem("is_reloaded") === "true") {
    declare_winner();

}

toggleReloadTracker();