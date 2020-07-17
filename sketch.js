
var paper1
var ground1
var dustbin1,dustbin2,dustbin3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	backgroundColor="black";

	engine = Engine.create();
	world = engine.world;

	paper1= new Paper(200,670,20,20);
	dustbin1= new Dustbin(600,670,200,20);
	dustbin2= new Dustbin(500,670,20,100);
	dustbin3= new Dustbin(700,670,20,100);
	ground1= new Ground();
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-40});
	}

}


