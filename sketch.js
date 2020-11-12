const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var sling1;
var engine, world;
function preload(){
  polygonimg=loadImage("tri/tri.png");
  
}

function setup() {
  createCanvas(800,400);
 
 engine=Engine.create();
 world=engine.world;

  polygon=Bodies.circle(50,200,20);
   World.add(world,polygon);
 
  
  
  sling1= new SlingShot(polygon,{x:100,y:200});

    ground3 = new Ground(400,380,1000,20);
   ground2 = new Ground(620,200,180,10);
   ground1 = new Ground(380,300,180,10);
   block1=new Box (330,235,30,40);
   block2=new Box (360,235,30,40);
   block3=new Box (390,235,30,40);
   block4= new Box(420,235,30,40);
   block5=new Box (450,235,30,40);
   block6=new Box (360,195,30,40);
   block7=new Box (390,195,30,40);
   block8=new Box (420,195,30,40);
   block9= new Box(390,155,30,40);
   block10=new Box (560,135,30,40);
   block11=new Box (590,135,30,40);
   block12=new Box (620,135,30,40);
   block13= new Box(650,135,30,40);
   block14=new Box (680,135,30,40);
   block15=new Box (590,95,30,40);
   block16=new Box (620,95,30,40);
   block17=new Box (650,95,30,40);
   block18= new Box(620,55,30,40);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block8.display();
  block7.display();
  block9.display();
  block10.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block18.display();
  block17.display();
  block11.display();
  sling1.display();
  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
      sling1.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
      sling1.attach(polygon.Body);
    }
}

