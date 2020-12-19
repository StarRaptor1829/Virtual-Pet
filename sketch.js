//Create variables here
var dogImage, happyDog, dog
var database
var foodS, foodStock
function preload()
{
  dogImage=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
 
	//load images here
}

function setup() {
database=firebase.database();

  createCanvas(500,500);
  
  dog=createSprite(200,200,10,10);
  dog.scale=0.25
  dog.addImage(dogImage);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
drawSprites();
fill("black")
stroke("white")
text("Food remaining:"+foodS,170,200)
text("Press the up arrow key to feed the dog!",200,10)


  
  //add styles here
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=-0){
    x=o;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



