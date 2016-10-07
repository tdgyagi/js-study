/*js file*/
$(function(){

  var time = 800;

  var w = $(window).width();
  var h = $(window).height();

  var ID = setInterval(move, time);

  function move(){
        $(".square").animate({
            'top': Math.floor( Math.random()*w ),
            'left': Math.floor( Math.random()*h )
        },400);
  }


})//end function
