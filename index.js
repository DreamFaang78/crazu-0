$("h1").addClass("big-title margin-50");
$("h1").text("Bye Bye");
$("button").html("<em>Let's Click Me</em>");
console.log($("img").attr("src",));
$("a").attr("href", "https://www.yahoo.com");
//Adding Event Listener
$("h1").click(function(){
    $("h1").css("color", "purple");
});
// 
$("button").click(function(){
    $("h1").css("color", "purple");
});
$("input").keypress(function(event){
    console.log(event.key);
});
$("h1").on("mouseover", function(){ 
    $("h1").css("color", "purple");
});
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("input").click(function(){
    $("h1").text($("input").val());
});
