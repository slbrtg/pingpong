//function to generate the ping pong results

function pingPong (num){
  for (var x = 1 ; x <= num ; x++){
    if (x % 3 === 0 && x % 5 === 0){
      $("#output").append("<p class='pingpong-output'>ping pong</p>")
    } else if (x % 3 === 0){
      $("#output").append("<p class='pingpong-output'>ping</p>")
    } else if (x % 5 === 0){
      $("#output").append("<p class='pingpong-output'>pong</p>")
    } else {
      $("#output").append("<p class='pingpong-output'>"+x+"</p>")
    }
  }
}

//Document ready function to play pong sounds
$(document).ready(function(){
  var audio = new Audio('audio/pong.mp3');
  audio.play();
})

//function to run on submit which calls pingPong()

$(document).on("submit", "form#pingpong-input", function(){
  event.preventDefault();
  var num = $("#pingpong-num").val();
  //console.log(num);
  pingPong(num);
})
