/*js file*/
$(function(){

  var maxItem = 70;
  var time = 3000;
  var scale = 100;
  var moveSpd = 1800;
  var clrArr = ["#cf3b3b","#cd3bcf","#7a3bcf","#3b54cf","#3bcacf","#3bcf4d","#bccf3b"];

  function moveItems(){
    for (var i = 0; i <= maxItem; i++){
      var xNum = Math.floor( Math.random() * $(window).width() ) + 0;
      var yNum = Math.floor( Math.random() * $(window).height() ) + 0;
      var xScale = Math.floor( Math.random() * scale ) + 0;
      var yScale = xScale ;
      var clr = clrArr[ Math.floor( Math.random() * clrArr.length ) ];
      var $box = $(".box" + i);
      $box.css("background-color",clr);

      $box.animate({
        "top": yNum,
        "left": xNum,
        "width": xScale,
        "height": yScale,
        "opacity": xScale * 0.01
      },moveSpd);

      $box.rotate({
        angle: 0,
        animateTo:90,
        duration:moveSpd
      });

      $box.mouseover(function(){
        $(this).animate({
          "width": 100,
          "height": 100,
          "opacity": 0
        },moveSpd/4);
      })
    }
  }

  function createItems(){
    for (var i = 0; i <= maxItem; i++){
      var boxItem = $(".container").append(
        "<p class ='box box"+i+"'></p>"
      );
    }
  }

  createItems();
  moveItems();
  var interval = setInterval(moveItems,time);


})//end function
