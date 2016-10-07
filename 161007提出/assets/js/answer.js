$(function(){

  var $box  =  $(".box");
  var time  =  100;


  function randomMove(){

    // $(window).width()+0;

    randX = Math.random()*$(window).width()+0;
    randY = Math.random()*$(window).height()+0;
    x = Math.floor(randX);
    y = Math.floor(randY);

    $box.animate({
      "top": x,
      "left": y});
  }

  setInterval(randomMove, time);


});//$function
