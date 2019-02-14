var panSpeed = 1;
var gravity = 0.1;
var player;

function setup(){

  player = new Player(10,canvas.height/2);
  pipe = new Pipe();
  draw();
}

function draw() {
  
  pipe.update();
  pipe.show();
  player.update();
  player.show();
  
  requestAnimationFrame(draw);
}

function moveUp(){
  player.moveUp();
}
