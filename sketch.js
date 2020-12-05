var me = Matter.Engine
var mw = Matter.World
var mb = Matter.Bodies

var nathan_engine, nathan_world, ball, ground;
function setup() {
    createCanvas(400,400);
    nathan_engine = me.create()
    nathan_world = nathan_engine.world;

var options = {
    restitution : 1
}


    ball = mb.circle(200,200,50,options);
    mw.add(nathan_world,ball)
    console.log(ball)
var g_options={
    isStatic:true
}


    ground=mb.rectangle(200,390,400,40,g_options);
    mw.add(nathan_world,ground);
  }
  
  function draw() {
    background("lightblue"); 
    me.update(nathan_engine)
    fill('ORANGE')
    ellipseMode(RADIUS) 
    ellipse(ball.position.x, ball.position.y, 60,50)
   fill("purple")
   rectMode(CENTER)
   rect(ground.position.x,ground.position.y,400,40)
  }