var gameState=0;
var form,game,allPlayers;
var database; 
var player;
var playerCount=0;  
var plr1,plr2;
var player1_img,track; 
var flag1=false;
var flag2=false;

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
  console.log(flag1);

  console.log(flag2);
  if(playerCount===2 && flag1===true && flag2===true){
    //gameState=1;
    game.update(1);
}
  if(gameState===1){
    game.play();
  }

}
