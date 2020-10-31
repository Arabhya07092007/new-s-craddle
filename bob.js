class Ball {

    constructor(x,y,diameter){
    
    var options ={
    
        'isStatic':false,
        'density':4
    
    }
    
    this.body = Bodies.circle(x,y,diameter,options);
    this.d = diameter;
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos  = this.body.position;
    rectMode(CENTER);
    fill("red");
    ellipse(pos.x,pos.y,this.d/2,this.d/2);
    
    }
    
    }