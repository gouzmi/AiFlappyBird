var panSpeed = 1;
var gravity = 0.2;
var player;
var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

function setup(){
  player = new Player(30,canvas.height/2);
  pipe = new Pipe();
  startAnimating(60);
}

function draw() {
  
  pipe.update();
  pipe.show();
  player.update();
  player.show();
  
  requestAnimationFrame(draw);
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
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % fpsInterval);

      pipe.update();
      pipe.show();
      player.update();
      player.show();

  }
}



