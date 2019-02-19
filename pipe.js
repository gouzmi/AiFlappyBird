
bg = new Image();
bg.src = "bg.png"
var gap = 100;
var ymax = 0;
var ymin;
pipeS = new Image();
pipeS.src = "pipeSouth.png"
pipeN = new Image();
pipeN.src = "pipeNorth.png"
var score = 0;
var bestScore = 0;
var speed = 4;

var scor = new Audio();
scor.src = "score.mp3";

class Pipe{
    constructor(){
      ymin = -(pipeS.height+pipeN.height+gap-canvas.height);

      var pipe = [];

      pipe[0] = {
          x : 1.5*canvas.width,
          y : Math.floor(Math.random()*(ymax-ymin+1)+ymin)
      };
      this.ymin = ymin;
      this.pipe = pipe;
    }

    show(){
        var ctx = canvas.getContext("2d");
        var maxY1 =0;
        var minY2 =canvas.height-pipeS.height;
        ctx.beginPath();
        ctx.drawImage(bg,0,0)
        ctx.fillStyle = "white";
        
        for(var i = 0; i < this.pipe.length; i++){
            ctx.drawImage(pipeN,this.pipe[i].x,this.pipe[i].y);
            ctx.drawImage(pipeS,this.pipe[i].x,pipeN.height+this.pipe[i].y+gap);

            if((player.x+bird.width>=this.pipe[i].x && player.x<=this.pipe[i].x+pipeN.width)&&(player.y<=this.pipe[i].y+pipeN.height || player.y+bird.height>=this.pipe[i].y+pipeN.height+gap)){
              if(bestScore<score){
                bestScore=score;
                console.log("bestScore "+bestScore);

              }
              player.y=canvas.height/2;
              player.velY=0;
              this.init();
              score=0;
              break;
            }

            this.pipe[i].x -= speed;

            if( this.pipe[i].x < 120+speed && this.pipe[i].x >=120  ){
              this.pipe.push({
                x : canvas.width,
                y : Math.floor(Math.random()*(ymax-ymin+1)+ymin)   // generer des nouveaux pipes
            });   
          }

          if(this.pipe[i].x < (player.x-pipeN.width) && this.pipe[i].x >=(player.x-pipeN.width)-speed ){
            score++;
            
            scor.play();  //incrémenter le score
        }
            if( this.pipe[i].x < -300 ){
              this.pipe.shift();  // nettoyer le tab
          }
          
        }
        
      }

      init() {
        this.pipe=[]
                this.pipe[0] = {
                    x : 1.5*canvas.width-52,
                    y : Math.floor(Math.random()*(ymax-ymin+1)+ymin)
                };
      }
    
    
}