/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var stopBtn = $(".count-stop");
  var playBtn = $(".count-play");
  var restartBtn =$(".count-restart");

  var count = 0;
  var time = 10;

  function countUP(){
    countTxt.text(count++);
  }

  var ID = setInterval(countUP, time);

  stopBtn.click(function(){
    clearInterval(ID);
  })

  playBtn.click(function(){
    clearInterval(ID);
    ID = setInterval(countUP, time);
  })

  restartBtn.click(function(){
    count = 0;
    clearInterval(ID);
    ID = setInterval(countUP, time);
  })

  stopBtn.mouseover(function(){
    $(this).fadeTo(300,0.5);
  })

  stopBtn.mouseout(function(){
    $(this).fadeTo(300,1);
  })











})//end function
