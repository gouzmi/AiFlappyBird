var fly = new Audio();
fly.src = "fly.mp3";
bird = new Image();
bird.src = "bird.png"

class Player {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.velX= panSpeed;

  }

  show(){
    var ctx = canvas.getContext("2d");
    var maxY1 =0;
    var minY2 =canvas.height-pipeS.height;
    ctx.beginPath();
    //ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //ctx.fill();
  
    //ctx.drawImage(pipeN,canvas.width-52-50,maxY1);
    //ctx.drawImage(pipeS,canvas.width-52-50,pipeN.height-maxY1+gap);
    ctx.drawImage(bird,this.x,this.y);
  }

  update(){

    if(this.y>=canvas.height){
      this.y=canvas.height/2;
      this.velY=0;
    }
    else{
      this.velY += gravity;
      //this.x += this.velX;
      this.y += this.velY;
    }
  }


  moveUp(){
    this.y -= 35;
    this.velY = 0;
    fly.play();
}
}
