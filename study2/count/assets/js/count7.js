/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");

  function countUp(){
    if( count < maxCount){
      count ++;
      countTxtView();
    }
    if(count > maxCount-1){
      maxTxtView();
    }

  }

  function countDown(){
    if( count > 0){
      count--;
      countTxtView();
    }

    if( count == 0){
      minTxtView();
    }
  }

  function countTxtView(){
    $txt.text(count);
  }

  function maxTxtView(){
    $txt.text("最大に達しました");
  }

  function minTxtView(){
    $txt.text("最小に達しました");
  }

  $inc.click( function(){ countUp();})
  $dec.click( function(){ countDown();})



})//end function
