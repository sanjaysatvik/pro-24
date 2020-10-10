
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, paper;
var dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper (30, 350, 20);
	paper.addColor("red");

	dustbin1 = new Dustbin(740, 350, 10, 2);

	dustbin2 = new Dustbin(738, 340, 2 ,10);

	dustbin3 = new Dustbin(742, 360, 2, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  function keyPressed(){
	 if (keyCode === UP_ARROW){
		 Matter.body.applyForce(paperObject.body,paperObject.body.position(x:85,y:-85));
	 } 
  }

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}



