class Paper {
constructor(x, y, width, height){
 
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.display();
}


};