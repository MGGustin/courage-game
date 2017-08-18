$(function() {

var player = '<div id="player"></div>';
 $("#map").append(player);
 $("#player").css('background', "url(./images/standingGif.gif) no-repeat");


 var leftSteps = ['./images/Left/left1.png', './images/Left/left2.png', './images/Left/left3.png', './images/Left/left4.png', './images/Left/left5.png', './images/Left/left6.png','./images/Left/left7.png','./images/Left/left8.png',];

  var rightSteps = ['./images/Right/Right1.png', './images/Right/Right2.png','./images/Right/Right3.png','./images/Right/Right4.png','./images/Right/Right5.png','./images/Right/Right6.png','./images/Right/Right7.png','./images/Right/Right8.png',];

  var upSteps = ['./images/Back/Back1.png', './images/Back/Back2.png', './images/Back/Back3.png', './images/Back/Back4.png', './images/Back/Back5.png', './images/Back/Back6.png', './images/Back/Back7.png','./images/Back/Back8.png', ]

  var downSteps = ['./images/Front/Front1.png', './images/Front/Front2.png', './images/Front/Front3.png', './images/Front/Front4.png', './images/Front/Front5.png', './images/Front/Front6.png', './images/Front/Front7.png', './images/Front/Front8.png',]

 var currentStep = 0;
 function walking(dir){
        if (currentStep == 7){
                currentStep = 0;
        }
        currentStep++;
        if (dir == "left"){
                $("#player").css('background', "url("+ leftSteps[currentStep] +") no-repeat");
        } else if (dir == "right"){
                $("#player").css('background', "url("+ rightSteps[currentStep] +") no-repeat"); 
        
        }else if (dir == "up"){
                $("#player").css('background', "url("+ upSteps[currentStep] +") no-repeat"); 
        
        }else if (dir == "down"){
                $("#player").css('background', "url("+ downSteps[currentStep] +") no-repeat"); 
        
        }
}

// $(document).keyup(function(e) {
//         setTimeout(function(){$("#player").css('background', "url(./images/standingGif.gif) no-repeat")}, 2000);
// });
 

$(document).keydown(function(e) {

    //alert(e.keycode);

var position =$("#player").position();
//alert(position);
switch (e.keyCode)
{
case 37: //left
         $("#player").css('background', "url(./images/Left/left1.png) no-repeat");
        $("#player").css('left', position.left - 10 + 'px');
        walking('left');
        break;

case 38: //up
        $("#player").css('background', "url(./images/Back/Back1.png) no-repeat");
        $("#player").css('top', position.top - 10 + 'px');
        walking('up');
        break;

case 39: //right
        $("#player").css('background', "url(./images/Right/Right1.png) no-repeat");
        $("#player").css('left', position.left + 10 + 'px');
        walking('right');
        break;

case 40: //down
        $("#player").css('background', "url(./images/Front/Front1.png) no-repeat");
        $("#player").css('top', position.top + 10 + 'px');
        walking('down');
        break;
}})})
