/*js file*/
$(function(){

  var timer = false;
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      console.log('リサイズされました');
    }, 600);
  });

})//end function
