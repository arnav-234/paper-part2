
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,300,5)
	bin1 = new bin(750,300,100,20)
	bin2 = new bin(780,300,20,100)
	bin3 = new bin(810,300,20,100)
	ground1=new Ground(700,800,10000,10)
	Engine.run(engine);

  
}


function draw() {
 Engine.update(engine)
  background(255);
  paper1.display()
  bin1.display()
  bin2.display()
  bin3.display()

 
}



