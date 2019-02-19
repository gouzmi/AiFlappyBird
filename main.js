var panSpeed = 1;
var gravity = 0.3;
var player;
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;
var mousedownID = -1;  //Global ID of mouse down interval


function setup(){
  
  player = new Player(60,canvas.height/2);
  pipe = new Pipe();
  canvas.addEventListener("mousedown", mousedown);
  canvas.addEventListener("mouseup", mouseup);
  startAnimating(60);
}

document.addEventListener('keypress', (event) => {
  player.moveUp();
});


function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {


  requestAnimationFrame(animate);

  // calc elapsed time since last loop
  now = Date.now();
  elapsed = now - then;
  // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {

      then = now - (elapsed % fpsInterval);
      
      pipe.show();
      player.update();
      player.show();
      var ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.font = "20px Verdana";
      ctx.fillText("Score : "+score,-50+canvas.width/2,50);
      ctx.fillText("Best Score : "+bestScore,-75+canvas.width/2,canvas.height-25);
  }
}


function mousedown(event) {
  if(mousedownID==-1)  //Prevent multimple loops!
    mousedownID = setInterval(whilemousedown, 50 );


}
function mouseup(event) {
   if(mousedownID!=-1) {  //Only stop if exists
     clearInterval(mousedownID);
     mousedownID=-1;
   }

}
function whilemousedown() {
   player.moveUp();
}
