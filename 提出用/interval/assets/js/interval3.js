/*js file*/
$(function(){

  var countTxt = $(".count-up");
  var count = 0;
  var time = 1000;
  var rand = Math.floor( Math.random() * -10 ) + 10 ;


  function countUP(){
    $(".move").animate({
        'top': Math.round( Math.random()*90 ) + "%",
        'left': Math.round( Math.random()*90 ) + "%"
    },200);
  }

  setInterval(countUP, time);


})//end function
