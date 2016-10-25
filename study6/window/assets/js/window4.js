/*js file*/
$(function(){

  var timer = false;
  var setTimer;
  $(window).resize(function() {

    if(timer == false){
      setTimer = setTimeout(resizeEvent,600);
      timer = true;
    }
 });

 function resizeEvent(){
   console.log("リサイズされました");
   clearTimeout(setTimer);
   timer = false;
 }

})//end function
