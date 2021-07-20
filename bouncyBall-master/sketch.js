const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var edges;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ground2_options ={
        isStatic: true
    }

    ground2 = Bodies.rectangle(200,20,200,20,ground2_options);
    World.add(world,ground2);


    var ball_options = {
        restitution: 1.5    
    }


    ball = Bodies.circle(200 ,200, 20 , ball_options);
    World.add(world , ball);

}

function draw(){
    background("yellow");
   
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x , ball.position.y, 10);

    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,400,20);



}