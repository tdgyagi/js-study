/*js file*/
$(function(){

  var timer = false;
  $(window).resize(function() {
    if (timer != false) {
      clearTimeout(timer);
    }
    timer = setTimeout(resizeEvent, 600);
  });

  function resizeEvent(){
    console.log('リサイズされました');
  }

})//end function
