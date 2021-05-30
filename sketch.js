var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var ca,la,pl,ca2
var city,player,c;
var cars,log,win;
function preload()
{
 ca = loadAnimation("images/car1.png")
 ca2 = loadAnimation("images/car2.png")
 la = loadAnimation("images/log2.png")
 pl = loadAnimation("images/Player-03.png")
 c = loadAnimation("images/city1.png")
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
 
  
  for(var i=0;i<6;i++){
 
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
     if(i%2===0)
     {var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
          road.shapeColor="black"
     }
     bottomGrass1.shapeColor = "grey"
    }
    
    for(var i = 0; i < 40; i++){
     cars = new car(2);
     carGroup1.add(cars.spt);}

     for(var i = 0; i < 40; i++){
      log = new Log(-2);
      logGroup1.add(log.spt);}

      player = new Players(width/2,height-25)
      player.spt.scale=0.1
      player.spt.addAnimation("BFF",pl)
  
 }


function draw() {
  background("skyblue");
  translate(0,-player.spt.y+height-150)

  //car reset cod 2 if condition for loop
    
     for(i =1; i <logGroup1.length; i++){
      if(logGroup1[i].x<0){
       logGroup1[i].x=width}
      }

      for(i =1; i <carGroup1.length; i++){
        if(carGroup1[i].x<0){
         carGroup1[i].x=width}
         
        }
        
       for(i =1; i <carGroup1.length; i++){ 
        if(carGroup1[i].x>width)
        { carGroup1[i].x=0} }
        }
     
   

    if(carGroup1.isTouching(player.spt)){

  player.spt.x = width/2;
  player.spt.y = height-75

    }

    if(logGroup1.isTouching(player.spt)){

player.spt.x= player.spt.x-3;

    }

    else if((player.spt.y > height-1550 && player.spt.y < height-1300) ||
            (player.spt.y < height-500 && player.spt.y > height-850)||
            (player.spt.y>height)||
            (player.spt.x<0)||
            (player.spt.x>width)){

            player.spt.x = width/2
            player.spt.y = height = 75;
  }

  if (city.isTouching(player.spt)){

  gameState = "win"

  }
if (gameState === "win"){

stroke("Green")
Fill("green")
textSize(40)
text("OMG! u got it :)",width/2-250,-1700)
carGroup1.destroyEach()
logGroup1.destroyEach()

}
  drawSprites();
}
function keyPressed(){

if (keyCode == UP_ARROW){
  player.move(0,-1);
}else if (keyCode == DOWN_ARROW){
  player.move(0,1);
}else if (keyCode == LEFT_ARROW){
  player.move(-1,0);
}else if (keyCode == RIGHT_ARROW){
  player.move(1,0);
}

}

