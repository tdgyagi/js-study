/*js file*/
$(function(){

 var $btn = $(".modal-start");
 var $closeBtn = $(".container--close-btn");
 var $modal = $(".modal-window");

 $btn.click(function(){
   $modal.fadeIn();
 })

 $closeBtn.click(function(){
   $modal.fadeOut();
 })







})//end function
