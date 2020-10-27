// const { fabric } = require("../library/fabric.min");

// const { fabric } = require("../library/fabric.min");


var canvas = new fabric.Canvas('c');
var canvasCenter = canvas.getCenter();
setInterval(drawClock,1000)

function drawClock(){
  drawDial();
  drawAllHands();
  drawOrigin();
}
drawHours();
function drawHours(){
  for(let i=1; i<13;i++){
    canvas.add(new fabric.Text(i.toString(), { 
        fontFamily: 'Delicious_500', 
        left: 100, 
        top: Math.random(i),
        fontSize:25
      }));
  }
}


function drawOrigin(){
    var circle = new fabric.Circle({
        radius: 20, 
        fill:'black', 
        left:650, 
        top:283,
        stroke:"black",
    });
    canvas.add(circle);
}
function drawDial(){
    var circle = new fabric.Circle({
        radius: 200, 
        fill:'white', 
        left:467, 
        top:97,
        stroke:"black",
        strokeWidth:15,
    });
    canvas.add(circle);
}

function drawAllHands(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHourHand(hour*(180/(Math.PI)));
     //minute
     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
     drawMinuteHand(minute*(180/(Math.PI)));
      // second
    second=(second*Math.PI/30);
    drawSecondsHand(second*(180/(Math.PI)));
}

function drawHourHand(angle){
    var line = new fabric.Line([0,0,0,120],{
        left:canvasCenter.left,
        top:canvasCenter.top,
        stroke:"black",
        strokeWidth:8,
        left:675, 
        top:305,
        originX: 'left',
        originY: 'bottom',
        angle: angle
    });
    canvas.add(line);
}

function drawMinuteHand(angle){
    var line = new fabric.Line([0,0,0,170],{
        left:canvasCenter.left,
        top:canvasCenter.top,
        stroke:"black",
        strokeWidth:5,
        left:675, 
        top:305,
        originX: 'left',
        originY: 'bottom',
        angle: angle
    });
    canvas.add(line);
}

function drawSecondsHand(angle){
    var line = new fabric.Line([0,0,0,180],{
        left:canvasCenter.left,
        top:canvasCenter.top,
        stroke:"black",
        strokeWidth:2,
        left:675, 
        top:305,
        originX: 'left',
        originY: 'bottom',
        angle: angle,
    });
    canvas.add(line);
}

// function draw


        

//         var line2 = new fabric.Line([100,100,220,220],{
//             left:canvasCenter.left,
//             top:canvasCenter.top,
//             stroke:"blue",
//             strokeWidth:2,
//             angle: 270
//         });
//         canvas.add(line2);

// function drawClock(){
//     drawDial();
//     drawHands();
// }
// function drawDial(){
//     var circle = new fabric.Circle({
//         radius: 200, 
//         fill:'black', 
//         left:canvasCenter.left-200, 
//         top:canvasCenter.top-200,
//         stroke:"grey",
//         strokeWidth:15
//     });
//     canvas.add(circle);
// }


// function drawHands(){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     hour=hour%12;
//     hour=(hour*Math.PI/6)+
//     (minute*Math.PI/(6*60))
//     drawHand(100, 100, hour, hour,'white',3);
//     //minute
//     minute=(minute*Math.PI/30)
//     // drawHand(100, 100, minute, minute,'blue',2);
// }

// function drawHand(x1,y1,x2,y2,stroke,strokeWidth){
//     var line = new fabric.Line([x1,y1,x2,y2],{
//         left:canvasCenter.left,
//         top:canvasCenter.top,
//         stroke:stroke,
//         strokeWidth:strokeWidth
//     });
//     canvas.add(line);
// }



// var line2 = new fabric.Line([260,80,80,60],{
//     left:700,
//     top:300,
//     stroke:"blue",
//     strokeWidth:2
// });



// line2.animate({
//     x2: 200,
//     y2: 200,
//     left:700,
//     top:300,
//   }, {
//     onChange: canvas.renderAll.bind(canvas),
//     onComplete: function() {
//       line.setCoords();
//     },
//     duration: 3000
//   });