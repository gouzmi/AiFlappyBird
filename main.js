var panSpeed = 1;
var gravity = 0.1;
var player;

function setup(){

  player = new Player(10,canvas.height/2);
  draw();
}

function draw() {
  
  player.update();
  player.show();
  requestAnimationFrame(draw);
}
