var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var particle
var score = 0;
var p;
var gameState = "play"
var count = 0;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(0, 400, 5, height)
  ground2 = new Ground(800, 400, 5, height)
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background("black");
  Engine.update(engine);

  textSize(20)
 // text("count : " + count, 150, 450)
  text("score : " + score, 350, 450)
  text("500", 25, 550);
  text("500", 100, 550);
  text("500", 185, 550);
  text("500", 265, 550);
  text("1000", 335, 550);
  text("1000", 420, 550);
  text("500", 502, 550);
  text("500", 575, 550);
  text("500", 665, 550);
  text("500", 740, 550);

  ground1.display()
  ground2.display()

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  if (p != null) {
    p.display();
    if (p.body.position.y > 600) {
      if (p.body.position.x < 325 || p.body.position.x > 485) {
        score = score + 500;
      //  count = count + 1 
        p = null;
      }
    }
  }

 /* if(count = 5 && gameState === "play"){
gameState = "over"
  }*/
/*
  if(gameState === "over"){
    text("GAME OVER", 200,400);
  }*/
  if (p != null) {
    p.display();
    if (p.body.position.y > 600) {
      if (p.body.position.x > 325 || p.body.position.x < 485) {
        score = score + 1000;
        p = null;
     //   count = count + 1 
      }
    }
  }
}

function mousePressed() {
  if (gameState === "play") {
    p = new Particle(mouseX + random(-3, 3), 20)
   // count = count + 1 
  }
}