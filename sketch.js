const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var hero;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;

var monster;


function preload() {
  //load the background image
  backgroundImg = loadImage("images/GamingBackground.png");
}


function setup() {
  //create the canvas
  createCanvas(2000,800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //create the background
  ground = new Ground(500,600,1200,10);

  //create the hero
  hero = new Hero(150,200,400,200);

  //create the rope
  rope = new Fly(hero.body,{x:400,y:0});

  //blocks for the 3rd column
  block1 = new Block(800,0,60,60);
  block2 = new Block(800,60,60,60);
  block3 = new Block(800,80,60,60);
  block4 = new Block(800,120,60,60);
  block5 = new Block(800,160,60,60);
  block6 = new Block(800,200,60,60);
  block7 = new Block(800,260,60,60);
  block8 = new Block(800,280,60,60);
  block9 = new Block(800,300,60,60);
  block10 = new Block(800,360,60,60);
  
  //blocks for the 2nd column
  block11 = new Block(700,200,60,60);
  block12 = new Block(700,260,60,60);
  block13 = new Block(700,280,60,60);
  block14 = new Block(700,320,60,60);
  block15 = new Block(700,360,60,60);

  //blocks for the 1st column
  block16 = new Block(600,60,60,60);
  block17 = new Block(600,80,60,60);
  block18 = new Block(600,120,60,60);
  block19 = new Block(600,160,60,60);
  block20 = new Block(600,200,60,60);
  block21 = new Block(600,260,60,60);
  block22 = new Block(600,280,60,60);
  block23 = new Block(600,320,60,60);
  block24 = new Block(600,360,60,60);

  //create the monster
  monster = new Monster(1000,0,300,300);

  //create the stand for the monster
  stand = new Ground(1000,300,10,10);
}


function draw() {
  //set the backgorund image
  background(backgroundImg);

  //display the ground
  ground.display();

  //display the hero
  hero.display();

  //display the rope
  rope.display();

  //display the blocks for the 3rd column
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  //display the columns for the 2nd column
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

  //display the blocks for the 1st column
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  //display the monster
  monster.display();
}


function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX-150,y:mouseY-100});
}