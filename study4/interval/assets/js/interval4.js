/*js file*/
$(function(){

  var time = 1000;
  var box = $(".box");

  function moving(){
    var xNum = Math.floor(Math.random()*$(window).width())+0;
    var yNum = Math.floor(Math.random()*$(window).height())+0;
    box.css({"top":yNum,"left":xNum});
  }

  var interval = setInterval(moving,time);


})//end function
