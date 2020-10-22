const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine
var world
var object
var ground,groundOptions

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world


 object = Bodies.circle(200 ,200 ,50)
 World.add(world,object)

 groundOptions =
{
isStatic:true
}
 ground = Bodies.rectangle(200,390,400,20,groundOptions)
 World.add(world,ground)
 
 console.log(object)
}

function draw() {
  background("black"); 
  Engine.update(engine) 
ellipseMode(RADIUS)
ellipse(object.position.x,object.position.y,50,50);
rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20);
 
}