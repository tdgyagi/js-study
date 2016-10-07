/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var stopBtn = $(".count-stop");
  var playBtn = $(".count-play");
  var repBtn = $(".count-re");

  var count = 0;
  var time = 300;

  function countUP(){
    countTxt.text(count++);
  }

  var ID = setInterval(countUP, time);







})//end function
