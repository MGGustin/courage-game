$(function() {

        var player = '<div id="player"></div>';
        $("#map").append(player);
        $("#player").css('background', "url(./assets/images/standingGif.gif) no-repeat");

        var Katz = '<div id="katz"><img id="katzImg" src="./assets/images/KatzFront/Front1.png"></div>';
        $("#map").append(Katz);

        var direction = "down";
        setInterval(function(){
                var curPos = $("#katz").position();
                if(direction == "down") {
                        curPos.top += 10;
                }

                if(direction == "up") {
                        curPos.top -= 10;
                }

                if(direction = "left") {
                        curPos.left -= 10;
                }

                if(direction = "right") {
                        curPos.left += 10;
                }
                
                if(curPos.top > 400) {
                        direction = "up"
                }
                if(curPos.top < 200) {
                        direction = "down";
                }

                
                
                $("#katz").css({top: curPos.top, left: curPos.left});

        }, 25);

        var currentStep = 0;
        var currentStepKat = 0;

 function walking(dir, characterPosition, character){

        var collision = false;
        
        var leftSteps = ['./assets/images/Left/left1.png', './assets/images/Left/left2.png', './assets/images/Left/left3.png', './assets/images/Left/left4.png', './assets/images/Left/left5.png', './assets/images/Left/left6.png','./assets/images/Left/left7.png','./assets/images/Left/left8.png',];

        var rightSteps = ['./assets/images/Right/Right1.png', './assets/images/Right/Right2.png','./assets/images/Right/Right3.png','./assets/images/Right/Right4.png','./assets/images/Right/Right5.png','./assets/images/Right/Right6.png','./assets/images/Right/Right7.png','./assets/images/Right/Right8.png',];

        var upSteps = ['./assets/images/Back/Back1.png', './assets/images/Back/Back2.png', './assets/images/Back/Back3.png', './assets/images/Back/Back4.png', './assets/images/Back/Back5.png', './assets/images/Back/Back6.png', './assets/images/Back/Back7.png','./assets/images/Back/Back8.png', ]

        var downSteps = ['./assets/images/Front/Front1.png', './assets/images/Front/Front2.png', './assets/images/Front/Front3.png', './assets/images/Front/Front4.png', './assets/images/Front/Front5.png', './assets/images/Front/Front6.png', './assets/images/Front/Front7.png', './assets/images/Front/Front8.png',]

        var leftStepsKat = ['./assets/images/KatzLeft/left1.png', './assets/images/KatzLeft/left2.png', './assets/images/KatzLeft/left3.png', './assets/images/KatzLeft/left4.png',];

        var rightStepsKat = ['./assets/images/KatzRight/Right1.png', './assets/images/KatzRight/Right2.png', './assets/images/KatzRight/Right3.png', './assets/images/KatzRight/Right4.png',];

        var upStepsKat = ['./assets/images/KatzBack/Back1.png', './assets/images/KatzBack/Back2.png', './assets/images/KatzBack/Back3.png', './assets/images/KatzBack/Back4.png',]

        var downStepsKat = ['./assets/images/KatzFront/Front1.png', './assets/images/KatzFront/Front2.png', './assets/images/KatzFront/Front3.png', './assets/images/KatzFront/Front4.png',]

        var walls = [
             //   x=top y=left
             //shelf
                {x: 10, y: 100, width: 400, height: 130},
             //basket   
                {x: 520, y: 170, width: 190, height: 70},
             //table    
                {x: 450, y: 510 , width: 170, height: 130},
             //box-1
                {x: 290, y:160, width: 60, height: 15},
             //box-2   
                {x: 300, y:280, width: 100, height: 5},
             //box-3
                {x: 267, y:510, width: 100, height: 0},
             //box-4
                {x: 215, y:690, width: 20, height: 90},
             //box-5
                {x:260, y:820, width: 100, height: 5},
             //box-6
                {x:328, y:1135, width: 90, height: 1},
             //box-7
                {x:404, y:200, width: 100, height: 0},
             //box-8
                {x:360, y:470, width: 30, height: 15},
             //box-9
                {x:400, y:780, width: 110, height: 1},
             //box-10
                {x:370, y:1020, width: 10, height: 100},
             //box-11
                {x:525, y:825, width: 50, height: 1},
             //top-wall
                {x:60, y:0, width: 10000, height: 50},
             //left-wall
                {x:0, y:0, width: 10, height: 10000},
             //right-wall
                {x:0, y:1275, width: 10, height: 10000},
            //bottom-wall
                {x:595, y:0, width: 1000, height: 20}
        ];
        //}
        console.log(collision);
        if (character == 'player'){
                var playerMap = {x: characterPosition.top, y: characterPosition.left, width: 60, height: 60};
                for (var i = 0; i < walls.length; i++) {
                        //console.log(walls);
                        var collisionDetection = colCheck(playerMap, walls[i]);
                        //console.log(collisionDetection);
                        if (collisionDetection != null){
                                collision = true;
                                i = walls.length;
                        } else {
                                collision = false;
                        }
                        
                }
                if (collision == false){ //no collision delected

                
                        if (currentStep == 7){
                                currentStep = 0;
                        }
                        currentStep++;
                        if (dir == "left"){
                                $("#player").css('left', characterPosition.left - 10 + 'px');
                                $("#player").css('background', "url("+ leftSteps[currentStep] +") no-repeat");
                        } else if (dir == "right"){
                                $("#player").css('left', characterPosition.left + 10 + 'px');
                                $("#player").css('background', "url("+ rightSteps[currentStep] +") no-repeat"); 
                        }else if (dir == "up"){
                                $("#player").css('top', characterPosition.top - 10 + 'px');
                                $("#player").css('background', "url("+ upSteps[currentStep] +") no-repeat"); 
                        }else if (dir == "down"){
                                $("#player").css('top', characterPosition.top + 10 + 'px');
                                $("#player").css('background', "url("+ downSteps[currentStep] +") no-repeat");
                        }
                } else {
                        //collision detected
                        // $("#map").append("<p style='color: red;'>ERROR</p>");
                        var bouncePlayer = $("#player").position();
                        console.log(collisionDetection);
                        if (collisionDetection == 't'){
                                $("#player").css('top', bouncePlayer.top + 10 + 'px');
                        } else if (collisionDetection == 'b'){
                                $("#player").css('top', bouncePlayer.top - 10 + 'px');
                        } else if (collisionDetection == 'l'){
                                $("#player").css('left', bouncePlayer.left + 10 + 'px');
                        } else if (collisionDetection == 'r'){
                                $("#player").css('left', bouncePlayer.left - 10 + 'px');
                        }
                        
                }
        } else if (character == 'kat'){
                //var katColPos = $("#katzCollision").position();
                //console.log(katColPos);
                var playerMap = {x: characterPosition.top, y: characterPosition.left, width: 60, height: 60};
                for (var i = 0; i < walls.length; i++) {
                        //console.log(walls);
                        var collisionDetection = colCheck(playerMap, walls[i]);
                        //console.log(collisionDetection);
                        if (collisionDetection != null){
                                collision = true;
                                i = walls.length;
                        } else {
                                collision = false;
                        }
                
                }
                if (collision == false){ //no collision delected
                        if (currentStepKat == 3){
                                currentStepKat = 0;
                        }
                        currentStepKat++;
                        if (dir == "left"){
                                $("#katz").css('left', characterPosition.left - 10 + 'px');
                                $("#katz").html("<img id='katzImg' src='"+ leftStepsKat[currentStepKat] +"'>");
                        } else if (dir == "right"){
                                $("#katz").css('left', characterPosition.left + 10 + 'px');
                                $("#katz").html("<img id='katzImg' src='"+ rightStepsKat[currentStepKat] +"'>");
                        }else if (dir == "up"){
                                $("#katz").css('top', characterPosition.top - 10 + 'px');
                                $("#katz").html("<img id='katzImg' src='"+ upStepsKat[currentStepKat] +"'>");
                        }else if (dir == "down"){
                                $("#katz").css('top', characterPosition.top + 10 + 'px');
                                $("#katz").html("<img id='katzImg' src='"+ downStepsKat[currentStepKat] +"'>");
                        };
                } else {
                        //collision detected
                        // $("#map").append("<p style='color: red;'>ERROR</p>");
                        var bouncePlayer = $("#katz").position();
                        console.log(collisionDetection);
                        if (collisionDetection == 't'){
                                $("#katz").css('top', bouncePlayer.top + 10 + 'px');
                        } else if (collisionDetection == 'b'){
                                $("#katz").css('top', bouncePlayer.top - 10 + 'px');
                        } else if (collisionDetection == 'l'){
                                $("#katz").css('left', bouncePlayer.left + 10 + 'px');
                        } else if (collisionDetection == 'r'){
                                $("#katz").css('left', bouncePlayer.left - 10 + 'px');
                        }
                        
                }
        }
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.height / 2)) - (shapeB.x + (shapeB.height / 2)),
        vY = (shapeA.y + (shapeA.width / 2)) - (shapeB.y + (shapeB.width / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.height / 2) + (shapeB.height / 2),
        hHeights = (shapeA.width / 2) + (shapeB.width / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "l";
                // shapeA.y += oY;
            } else {
                colDir = "r";
                // shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "t";
                // shapeA.x += oX;
            } else {
                colDir = "b";
                // shapeA.x -= oX;
            }
        }
    }
    return colDir;
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
                walking('left', position, 'player');
                break;

        case 38: //up
                walking('up', position, 'player');
                break;

        case 39: //right
                walking('right', position, 'player');
                break;

        case 40: //down
                walking('down', position, 'player');
                break;
        }



       

});

});


