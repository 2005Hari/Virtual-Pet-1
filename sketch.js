//Create variables here
var dog, happyDog, database, foodS, foodStock 
var foodS, foodStock;

function preload()
{
	dog=loadImage("dogImg1.png")
  happyDog=loadImage("dogImg.png")

}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite(250  ,250,50,50)
  Dog.addImage(happyDog)
  Dog.scale = 0.4;
 
database=firebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    Dog.addImage(happyDog)
  }
 
  drawSprites();

  fill("white")  
  textSize(18)
  text("Food Remaining:" + foodS,180,100);
  
  //add styles here
}
function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  }

  )
}




