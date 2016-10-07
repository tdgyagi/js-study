/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var stopBtn = $(".count-stop");
  var playBtn = $(".count-play");  
  var startBtn = $(".count-start")
  var rondomBox = $(".rondom-box")

  var count = 0;
  var time = 300;

setInterval(function(){
   BoxRondomX = Math.random() *$(window).width()+0;
   BoxRondomY = Math.random() *$(window).height()+0;
    rondomBox.animate({
        "left": BoxRondomX,
        "top":BoxRondomY,
    },1000);
},1000);


})//end function
