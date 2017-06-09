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

$(document).on("submit", "form#pingpong-input", function(){
  event.preventDefault();
  var num = $("#pingpong-num").val();
  //console.log(num);
  pingPong(num);
})
