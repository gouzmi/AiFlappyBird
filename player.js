
bird = new Image();
bird.src = "bird.png"
pipeS = new Image();
pipeS.src = "pipeSouth.png"
pipeN = new Image();
pipeN.src = "pipeNorth.png"
bg = new Image();
bg.src = "bg.png"
var gap = 40;

class Player {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.velX= panSpeed;
    this.size = 10;

  }

  show(){
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    //ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //ctx.fill();
    ctx.drawImage(bg,0,0)
    ctx.drawImage(pipeS,canvas.width-52-50,y1);
    ctx.drawImage(pipeN,canvas.width-52-50,y2);
    ctx.drawImage(bird,this.x,this.y);
  }

  update(){
    this.velY += gravity;
    this.x += this.velX;
    this.y += this.velY;
  }
}
