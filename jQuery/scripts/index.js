$(document).keypress(function(e) {
    $("h1").text(e.key);
});

$("button").click(function(e) {
    $("h1").animate({opacity: 0.5});
});
