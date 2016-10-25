/*js file*/
$(function(){

  var timer = false;
  $(window).resize(function() {
    if(timer == false){
      setTimeout(resizeEvent,1000);
      timer = true;
    }
  });

 function resizeEvent(){
   console.log("リサイズされました");
   timer = false;
 }

})//end function
