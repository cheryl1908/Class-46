class Game {
    constructor(){
  
    }  
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    }

    getFlag1(){
      var flag1Ref  = database.ref('flag1');
      flag1Ref.on("value",function(data){
         flag1= data.val();
      })
    }
      getFlag2(){
        var flag2Ref  = database.ref('flag2');
        flag2Ref.on("value",function(data){
          flag2 = data.val();
        })
      }
        updateFlag1(flag1){
          database.ref('/').update({
            flag1:flag1
          });
        }
        updateFlag2(flag2){
          database.ref('/').update({
            flag2:flag2
          });
        }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
    
    }
  
    play(){
      form.hide();
      console.log("inside play");
      Player.getPlayerInfo();
      console.log(allPlayers);
      //player.getCarsAtEnd();
      if(allPlayers !== undefined){
        //background(rgb(198,135,103));
        //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
   
        plr1=createSprite(627,568);
        plr1.addImage("plr_img",player1_img);
        if(player.index===1){


          if(keyDown(RIGHT_ARROW)){
            player.x+=30;
            player.update();
          }
          if(keyDown(UP_ARROW)){
            player.y+=-30;
            player.update();
          }
          if(keyDown(LEFT_ARROW)){
            player.x+=-30;
            player.update();
          }
          if(player.x>1800){
            player.x=900;
          }
        }//else if(player.index===2){
          // this.spawnVehicles();
          }

        plr1.y=player.y;
        plr1.x=player.x;
        drawSprites();
      }
    }
    /*spawnVehicles(){
      if(mouseClicked()){
        player.x=mouseX;
        player.y=mouseY;
      }
    }
  }*/
    
  