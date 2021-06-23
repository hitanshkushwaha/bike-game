const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground1;
var bike;
var obstacle=[]

function preload() {
  //preload the images here
  backgroundImg = loadImage("images/GamingBackground.png")
  
  }




function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;
  
 ground1=new Ground(650,700,4000,20);
bike=new Bike(100,600,50,40)

camera.position.x=displayWidth/2
camera.position.y=bike.body.y;



}




function draw() {
  Engine.update(engine);
  background("sky blue")
 background(backgroundImg)





textSize(20)
text(' Press Right Arrow Key To Move Bike  ',100,100)
text("Press Up Arrow Key To Jump Bike ",110,150)

}

function keyPressed(){

  if(keyCode===RIGHT_ARROW){

    Matter.Body.applyForce(bike.body,{x:bike.body.position.x,y:bike.body.position.y},{x:0.1,y:0});
  }


  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(bike.body,{x:bike.body.position.x,y:bike.body.position.y},{x:0,y:-0.05});
  }


}

