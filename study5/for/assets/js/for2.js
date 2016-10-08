/*js file*/
$(function(){

  var $container;
  var items;
  var xLine;
  var yLine;
  var scale;
  var spd;
  var onMouse;
  var offMouse;

  function init(){
    $("body").append("<div class='container'></div>");
    $container = $(".container");
    xLine = 10;
    yLine = 8;
    scale = 70;
    viewSpd = 8;
    createElements();
  }

  function createElements(){
   for(var i=0; i<yLine; i++){
     for(var n=0; n<xLine; n++){
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
       $box.hide();
       $box.delay(n*i*scale/viewSpd).fadeIn();
       btnStart($box);
     }
   }
 }

function btnStart(target){
  target.mouseover(onMouse);
  target.mouseout(offMouse);
}

 function onMouse(){
   $(this).stop(true,true).fadeTo(300,0.7);
 }

 function offMouse(){
   $(this).stop(true,true).fadeTo(600,1);
 }



init();

})//end function
