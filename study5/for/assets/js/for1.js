/*js file*/
$(function(){


   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var items = 100;
   var xLine = 10;
   var yLine = 10;

   for(var i=0; i<=xLine; i++){
     $container.append("<div class='box box"+i+"'></div");
   }

   $(".box").css({
     "width":"50px",
     "height":"50px",
     "background-color":"#ccc"
   });



})//end function
