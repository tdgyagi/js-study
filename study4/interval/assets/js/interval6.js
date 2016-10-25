/*js file*/
$(function(){

  var time = 1000;
  var box = $(".box");
  var scale = box.width();
  var moveSpd = 300;

  function moving(){
    var xNum = Math.floor( Math.random() * $(window).width() ) + 0;
    var yNum = Math.floor( Math.random() * $(window).height() ) + 0;
    var xScale = Math.floor( Math.random() * scale ) + 0;
    var yScale = xScale ;

    box.animate({
      "top": yNum,
      "left": xNum,
      "width": xScale,
      "height": yScale,
      "opacity": xScale * 0.01
    },moveSpd);

    box.rotate({
      angle: 0,
      animateTo:90,
      duration:moveSpd});
    }

  var interval = setInterval(moving,time);


})//end function
