class Roof {

    constructor(x,y,width,height){
    
    var options  = {
    
          isStatic:false
    
    }
    
    this.body  = Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height;
    this.r = x;
    this.a = y;
    World.add(world,this.body);
    
    }
    
    display(){
    
    rectMode(CENTER);
    fill("green");
    rect(this.r,this.a, this.w, this.h,this.f);
    }
    }