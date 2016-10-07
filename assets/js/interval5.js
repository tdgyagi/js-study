/*js file*/
$(function(){

  var $box = $(".box");
  var time = 300;

  function move(){
    var x = Math.floor(　Math.random()*$(window).width()　);
    var y = Math.floor(　Math.random()*$(window).height()　);
    $box.animate({
      "top":x,
      "left":y
    });
}
    var ID = setInterval(move,time);

})//end function
