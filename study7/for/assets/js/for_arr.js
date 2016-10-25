/*js file*/
$(function(){

   $("body").append("<div class='container'></div>");
   var $container = $(".container");

   var xLine = "10";
   var yLine = 8;
   var potisionArr = [];
   var random_positionArr = [];
   var scale = 70;

   function init(){
     for(var i=0; i<yLine; i++){
       for(var n=0; n<xLine; n++){
         $container.append("<div class='box box"+i+"_"+n+"'></div");
         var $box =$(".box"+i+"_"+n);
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
          //配列へtop、leftを入れる
          var _arr = { "top": i * scale , "left": n * scale };
          potisionArr.push(_arr);
          $box.text((i+1)+"_"+(n+1));
       }
     }
     var rndomArr = randomCreate(potisionArr);
     reLeyout(rndomArr);
   }

   function randomCreate(arr){
     var _arr = new Array;
     for(var i = 0; i < arr.length; i++){
       var randomNum = Math.floor(Math.random() * arr.length);
       var arrSlice = arr.shift(randomNum-1,randomNum)
       console.log(i+" : "+arr.length)
       _arr.push(arrSlice);
     }
     return _arr;
   }

   function reLeyout(arr){
     count = 0;
     for(var i = 0; i < yLine; i++){
       for(var n = 0; n < xLine; n++){
         var $box =$(".box"+i+"_"+n);
         count++;

        // console.log("count"+count+": "+arr[count][0]["left"])
        //  $box.css({
        //    "top": arr[count][0]["top"],
        //    "left": arr[count][0]["left"]
        //   });
       }
     }
   }

init();


})//end function
