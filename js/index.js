$("h1").addClass("big-title margin-50");
$("button").text("Don't click me");
$("button").html("<em>Hey</em>");
$("a").attr("href", "https://www.yahoo.com");

$(document).keypress(function(event) {
    $("h1").text(event.key);    
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
});

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});