
bg = new Image();
bg.src = "bg.png"
var gap = 100;
pipeS = new Image();
pipeS.src = "pipeSouth.png"
pipeN = new Image();
pipeN.src = "pipeNorth.png"

class Pipe{
    constructor(){
      var pipe = [];

      pipe[0] = {
          x : canvas.width-52-50,
          y : 0
      };

      this.pipe = pipe;
    }

    show(){
        var ctx = canvas.getContext("2d");
        var maxY1 =0;
        var minY2 =canvas.height-pipeS.height;
        ctx.beginPath();
        ctx.drawImage(bg,0,0)
        for(var i = 0; i < this.pipe.length; i++){
          
            ctx.drawImage(pipeN,this.pipe[i].x,this.pipe[i].y);
            ctx.drawImage(pipeS,this.pipe[i].x,pipeN.height-this.pipe[i].y+gap);

            this.pipe[i].x -= 3;
          
        }
        
        
      }
    
      update(){
        for(var i = 0; i < pipe.length; i++){
          this.pipe[i].x= -10;
           
        }
      }
    
    
}