var player_rolls = [0, 0];

function toggleReloadTracker() {
    if (sessionStorage.getItem("is_reloaded") === "true") {
        sessionStorage.setItem("is_reloaded", "false");
    } else {
        sessionStorage.setItem("is_reloaded", "true");
    }
}

function diceRoll() {
    return Math.floor(6 * Math.random()) + 1;
}

function rollDiceForAllPlayers() {
    for (var i = 0; i < player_rolls.length; i++) {
        player_rolls[i] = diceRoll();
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
    var tie_game = true;
    for (var i = 0; i < player_rolls.length; i++) {
        if ((player_rolls[i] != max_val) && (max_val > 0)) {
            tie_game = false;
        }
        if (player_rolls[i] > max_val) {
            max_val = player_rolls[i];
            max_player = i;
        }
    }

    max_player += 1;
    
    var h1 = document.querySelector("h1");
    var out_text = "Player " + max_player + " Wins!";
    if (tie_game) {
        out_text = "It's a Tie!!!!!";
    }
    h1.textContent = out_text;

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