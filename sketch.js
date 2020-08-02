var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3, box1Body, box2Body, box3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(450,400,200,20,{restitution:0.1, isStatic:false});
	box2 = new Box(300,600,20,100,{restitution:0.1, isStatic:false});
	box3 = new Box(600,600,20,100,{restitution:0.1, isStatic:false});
	

	

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	box1Body = Bodies.rectangle(200,20,200,20, {isStatic:true});
	World.add(world, box1Body); 

	box2Body = Bodies.rectangle(150,20,20,100,{isStatic:false});
	World.add(world, box2Body);

	box3Body = Bodies.rectangle(250,20,20,100,{isStatic:false});
	World.add(world, box3Body);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	ellipse(packageSprite.x, packageSprite.y, 10, 10);
  }
}



