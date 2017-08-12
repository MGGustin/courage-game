$(function() {

var player = '<div id="player"></div>';
 $("#map").append(player);
 $("#player").css('background', "url(./assets/images/standingGif.gif) no-repeat");


 var leftSteps = ['./assets/images/Left/left1.png', './assets/images/Left/left2.png', './assets/images/Left/left3.png', './assets/images/Left/left4.png', './assets/images/Left/left5.png', './assets/images/Left/left6.png','./assets/images/Left/left7.png','./assets/images/Left/left8.png',];

  var rightSteps = ['./assets/images/Right/Right1.png', './assets/images/Right/Right2.png','./assets/images/Right/Right3.png','./assets/images/Right/Right4.png','./assets/images/Right/Right5.png','./assets/images/Right/Right6.png','./assets/images/Right/Right7.png','./assets/images/Right/Right8.png',];

  var upSteps = ['./assets/images/Back/Back1.png', './assets/images/Back/Back2.png', './assets/images/Back/Back3.png', './assets/images/Back/Back4.png', './assets/images/Back/Back5.png', './assets/images/Back/Back6.png', './assets/images/Back/Back7.png','./assets/images/Back/Back8.png', ]

  var downSteps = ['./assets/images/Front/Front1.png', './assets/images/Front/Front2.png', './assets/images/Front/Front3.png', './assets/images/Front/Front4.png', './assets/images/Front/Front5.png', './assets/images/Front/Front6.png', './assets/images/Front/Front7.png', './assets/images/Front/Front8.png',]

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



$(document).keyup(function(e) {
switch (e.keyCode)
{
case 37: //left
        $("#player").css('background', "url(./assets/images/LeftBlink.gif) no-repeat")
          break;
         



case 39: //right
        $("#player").css('background', "url(./assets/images/RightBlink.gif) no-repeat")
          break;



case 40: //down
        $("#player").css('background', "url(./assets/images/StandingGif.gif) no-repeat")
          break;
}
});


$(document).keydown(function(e) {
    //alert(e.keycode);

var position =$("#player").position();
//alert(position);
switch (e.keyCode)
{
case 37: //left
         $("#player").css('background', "url(./assets/images/Left/left1.png) no-repeat");
        $("#player").css('left', position.left - 10 + 'px');
        walking('left');
        break;

case 38: //up
        $("#player").css('background', "url(./assets/images/Back/Back1.png) no-repeat");
        $("#player").css('top', position.top - 10 + 'px');
        walking('up');
        break;

case 39: //right
        $("#player").css('background', "url(./assets/images/Right/Right1.png) no-repeat");
        $("#player").css('left', position.left + 10 + 'px');
        walking('right');
        break;

case 40: //down
        $("#player").css('background', "url(./assets/images/Front/Front1.png) no-repeat");
        $("#player").css('top', position.top + 10 + 'px');
        walking('down');
        break;
}

});

});
