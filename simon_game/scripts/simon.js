var btns = $(".game_btn");
var btn_sequence = [];
var index = -1;
var orig_color;
var game_on = false;

function game_over() {

    game_on = false;
    btn_sequence = [];
    index = -1;
    $("#level-title").text("Game Over, Press Any Key to Restart");

}

function add_button() {

    $("#level-title").text("Level " + (index+2) );
    
    var btn_to_add = btns[Math.floor(Math.random()*btns.length)];

    btn_sequence.push(btn_to_add);

    button_flash(btn_to_add);

    play_sound(btn_to_add.id);

    setTimeout(function() {
        button_reset(btn_to_add);
      }, 100);

    index = -1;

}

function play_sound(sound_nm) {
    var audio = new Audio('assets/sounds/' + sound_nm + '.mp3');
    audio.play();
}

function button_flash(btn) {
    $(btn).addClass("pressed");
}

function button_reset(btn) {
    $(btn).removeClass("pressed");
}

$(document).keypress(function(e) {
    
    game_on = true;
    
    setTimeout(function() {
        add_button();
    });

});

$(".game_btn").mousedown(function(e) {

    if (game_on) {
        index += 1;
        button_flash(e.target);
    }
    
})

$(".game_btn").mouseup(function(e) {

    if (game_on) {
        button_reset(e.target);

        if (e.target != btn_sequence[index]) {
            game_over();
        } else {
            play_sound(e.target.id);
            add_button();
        }

    }

})
