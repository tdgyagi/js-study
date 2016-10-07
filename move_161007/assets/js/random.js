/*js file*/
$(function(){

  var $box = $(".box");
  var time = 1000;

  function moving(){
    var x = Math.floor( Math.random()*$(window).width()+0);
    var y = Math.floor( Math.random()*$(window).height()+0);
    $box.animate({
      "top":x,
      "left":y
    });
}
  setInterval(moving,time);

})//end function
