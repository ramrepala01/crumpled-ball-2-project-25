
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
	engine = Engine.create();
    world = engine.world;

   ground = new Ground(600,height,1200,20);
   dustbin=new Dustbin(1080,290,100,100);
   ball=new Ball(80,110,50,50);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    dustbin.display();
    ball.display();
    

}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}

