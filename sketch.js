var gameState=0;
var form,game,allPlayers;
var database; 
var player;
var playerCount=0;  
var plr1,plr2;
var player1_img,track; 
var flag1=false;
var flag2=false;
var plrs=[]

function preload(){
  player1_img=loadImage("Images/player1.png");
  track = loadImage("Images/road.jpg");  
}

function setup() {

  database = firebase.database();
  createCanvas(displayWidth-10,displayHeight-10);


  game=new Game();
  game.start();
  game.getState();
}

function draw() {
  text(mouseX+","+mouseY,50,50);
  game.getFlag1();
  game.getFlag2();
  if(playerCount===2 && flag1===true && flag2===true){
    //gameState=1;
    game.update(1);
}
  if(gameState===1){
    game.play();
  }
  if(keyIsDown(RIGHT_ARROW) && player.index===1){
    player.x+=30;
    player.update();
  }
  if(keyIsDown(UP_ARROW) && player.index===1){
    player.y+=30;
    player.update();
  }
  if(keyIsDown(LEFT_ARROW) && player.index===1){
    player.x+=-30;
    player.update();
  }

}
function mouseClicked(){
  if(player.index===2 && gameState===1){
    var vehicle=createSprite(mouseX,mouseY,10,10);
    vehicle.velocityY=10;
    console.log(vehicle);

  }
}
