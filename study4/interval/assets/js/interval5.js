/*js file*/
$(function(){

  var time = 1000;
  var box = $(".box");
  var moveSpd = 300;

  function moving(){
    var xNum = Math.floor(Math.random()*$(window).width()+0;
    var yNum = Math.floor(Math.random()*$(window).height())+0;
    box.animate({
      "top":yNum,
      "left":xNum
    },moveSpd);
  }

  var interval = setInterval(moving,time);


})//end function
