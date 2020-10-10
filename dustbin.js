class Dustbin {
    constructor(x, y, width, height){
     
        var options={
            isStatic:true,
        }
        this.body = bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.display();
    }
    
    
    };