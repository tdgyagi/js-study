$(function(){
      var move = $("div")

      setInterval(function(){
         moveX = Math.random() *$(window).width()-0;
         moveY = Math.random() *$(window).height()-0;
         move.animate({
            "left": moveX,
            "top" : moveY,
          },1000);
      },1000);

})// endfunction
