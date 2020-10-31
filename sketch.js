
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roofTop;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(550,450);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Ball(150,370,120);
	bob2 = new Ball(210,370,120);
	bob3 = new Ball(270,370,120);
	bob4 = new Ball(330,370,120);
	bob5 = new Ball(390,370,120);
	
	roofTop  = new Roof(265,100,400,40);


	rope1 = new Chain(bob1.body,roofTop.body,150);
	rope2 = new Chain(bob2.body,roofTop.body,210);
	rope3 = new Chain(bob3.body,roofTop.body,270);
	rope4 = new Chain(bob4.body,roofTop.body,330);
	rope5 = new Chain(bob5.body,roofTop.body,390);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

 // Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofTop.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}



