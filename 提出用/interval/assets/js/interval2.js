/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var stopBtn = $(".count-stop");
  var playBtn = $(".count-play");  
  var startBtn = $(".count-start")
  var rondomBox = $(".rondom-box")

  var count = 0;
  var time = 300;

  function countUP(){
    countTxt.text(count++);
  }

  var ID = setInterval(countUP, time);

setInterval(function(){
   BoxRondom = Math.floor( Math.random() *90 ) + "%";
    rondomBox.animate({
        "left": BoxRondom,
        "top":BoxRondom,
    },1000);
},1000);


  playBtn.click(function(){
    ID = setInterval(countUP, time);
  })
  
  startBtn.click(function(){
    clearInterval(ID);
    ID = setInterval(countUP, time);
  });

  stopBtn.mouseover(function(){
    $(this).fadeTo(300,0.5);
  })

  stopBtn.mouseout(function(){
    $(this).fadeTo(300,1);
  })









})//end function
