/*js file*/
$(function(){

  var animateBox = $(".box_animate");
//ボックスを自由に動かせるようにする
//ボックスが動く場所を決める
//ボックスを動かせる範囲を指定する

  function move(){
    animateBox.animate({
      top: Math.ceil( Math.random() * $(window).width() ),
      left: Math.ceil( Math.random() * $(window).height() )
    });
  };

  var ID = setInterval(move, 100);

})//end function
