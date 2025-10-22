
let gamePattern = [];
let userClickedPattern = [];
let buttonColors =["red","blue","green","yellow"];
var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSeq();
      started = true;
    }
  });
$(".btn").click(function(){
   let userChosenColour = $(this).attr("id");
   playSound(userChosenColour);
   animatePress(userChosenColour)
   userClickedPattern.push(userChosenColour)
   checkAnswer(userClickedPattern.length-1);
})
function checkAnswer(currentLevel){
   if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
       console.log("Success");
       if(userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
            nextSeq();
          }, 1000);
       }
   }else{
  
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      started = false;
      level = 0;
      gamePattern = [];
      userClickedPattern = [];
   }
}
function nextSeq(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    const randomNumber = Math.floor(Math.random()*4);
   let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
  
}
function playSound(name){
    var audio = new Audio('sounds/'+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}
