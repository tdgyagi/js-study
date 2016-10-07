/*js file*/
$(function(){

  var boxMove = $(".box")

  setInterval(function(){
     moveX = Math.random() *$(window).width()+0;
     moveY = Math.random() *$(window).height()+0;

    boxMove.animate({
        "left": moveX,
        "top": moveY,
      },1000);
  },1000);



})//end function
