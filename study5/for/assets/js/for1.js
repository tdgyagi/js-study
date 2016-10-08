/*js file*/
$(function(){

   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var items = 100;
   var xLine = 10;
   var yLine = 10;
   var scale = 70;

   for(var i=0; i<xLine; i++){
     for(var n=0; n<yLine; n++){

       $container.append("<div class='box box"+i+"_"+n+"'></div");
       var $box =$(".box"+i+"_"+n)
       $box.css({
         "width": scale,
         "height": scale,
         "top": i * scale,
         "left": n * scale,
         "background-color":"#ccc",
         "position": "absolute",
         "border": "solid 1px #fefefe",
         "text-align": "center",
         "font-size": "12px",
         "line-height": scale+"px"
        });

       $box.text((i+1)+"_"+(n+1));

     }
   }





})//end function
