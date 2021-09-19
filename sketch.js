const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform,platform2,platform2,platform4;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
 //Lightbrown");
}

function setup(){
    var canvas = createCanvas(1559,786);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2000,20);
    platform = new Ground(150,505,300,20);
    platform1 = new Ground(900,750,500,20);
    platform2 = new Ground(1140,650,20,300);
    platform3 = new Ground(660,650,20,300);



    platform4 = new Ground(1330,500,400,20);
    platform5 = new Ground(1520,300,20,400);
    platform6 = new Ground(1140,300,20,400);
    platform7 = new Ground(1330,100,400,20);
    platform8 = new Ground(1330,300,100,20);
    //

    //platform4
    box1 = new Box(435,550,70,70);
    box2 = new Box(565,550,70,70);
    log1 = new Log(500,500,200, PI/2);
    pig5 = new Pig(500,450);
    pig15 = new Pig(1370,280);
    pig15.scale = 2;

    //log2 = new Log(500,470,20,100,-PI/10);
   
   //platform2
    //pig1 = new Pig(100, 100);
    box3 = new Box(935,350,70,70);
    box4 = new Box(1065,350,70,70);
    log3 =  new Log(1000,300,200, PI/2);
    pig3 = new Pig(1000, 280);

    
//platform3
    box5 = new Box(1385,200,70,70);
    box6 = new Box(1515,200,70,70);
    log4 = new Log(1450,150,200, PI/2);
    pig10 = new PigKing(1450,100);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:330});
    ground.visibility = true;
}

function draw(){

    if("brown")
        background("brown");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Dustbin",820,600);
        text("Avoid The Use Plastic Bottles, Use Metallic Bottles",300,200);
        text("Press Space to Respawn ",100,100);
    Engine.update(engine);
    //strokeWeight(4);
  //
    //log2.display();
    ground.display();
    //pig1.display();
    //pig1.score();
    //
    pig15.display();
  //
  //
    //
    //
    //log5.display();
  //
    bird.display();
    platform.display();
 platform1.display();
 platform2.display();
platform3.display();
   //


   platform4.display();
   platform5.display();
   platform6.display();
   platform7.display();
   platform8.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        slingshot.attach(bird.body);
    }
}

//async function getBackgroundImg(){
  //  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   // var responseJSON = await response.json();

  //  var datetime = responseJSON.datetime;
   // var hour = datetime.slice(11,13);
    
    //if(hour>=06 && hour<=19){
    //    bg = "sprites/bg1.png";
    //}
    //else{
     //   bg = "sprites/bg2.jpg";
    //}

   // backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
//}
