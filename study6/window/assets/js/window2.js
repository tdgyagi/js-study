/*js file*/
$(function(){

  var count = 1;
  $(window).resize(function() {
      $(".box").css({"left":$(window).width()/2-($(".box").width()/2),"position":"absolute"})
      console.log(count++);
  });

})//end function
