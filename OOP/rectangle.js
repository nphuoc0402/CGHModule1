class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    Area(){
        return this.width*this.height;
    }
    Perimeter(){
        return (this.width+this.height)*2;
    }
    Rectangle(ctx){
        
        ctx.beginPath();
        ctx.fillStyle = "galaxy";
        ctx.fillRect(30,30,this.width,this.height);
        ctx.stroke();
        ctx.closePath();
    }
}
let rec = new Rectangle(800,400);
let ctx = document.getElementById('myCanvas').getContext("2d");
rec.Rectangle(ctx);
document.write (`${rec.Area()} <br> ${rec.Perimeter()}`);

