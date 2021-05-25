class Circle
{
    constructor(radius,color){
        this.radius  = radius;
        this.color = color;
    }
    Circle(){
        
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
}
let circle1 = new Circle(5);
let radius = circle1.getRadius();
let area = circle1.getArea();
alert("radius: " + radius + "; area: " + area);