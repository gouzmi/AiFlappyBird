
bg = new Image();
bg.src = "bg.png"
var gap = 100;
pipeS = new Image();
pipeS.src = "pipeSouth.png"
pipeN = new Image();
pipeN.src = "pipeNorth.png"

class Pipe{
    constructor(){

    }

    show(){
        var ctx = canvas.getContext("2d");
        var maxY1 =0;
        var minY2 =canvas.height-pipeS.height;
        ctx.beginPath();
        //ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        //ctx.fill();
        ctx.drawImage(bg,0,0)
      
        ctx.drawImage(pipeN,canvas.width-52-50,maxY1);
        ctx.drawImage(pipeS,canvas.width-52-50,pipeN.height-maxY1+gap);
        
      }
    
      update(){
      }
    
    
}