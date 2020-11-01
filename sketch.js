//Create variables here
var pet,petimg,pet1,foods;
var database,foodstock;
function preload()
{
  petimg=loadImage("dogImg1.png");
  pet1=loadImage("dogImg.png");
}

function setup() {
  createCanvas(800, 700);
database= firebase.database();
  pet=createSprite(200,200,100,100);
  pet.addImage(petimg)
  foodstock=datatabase.ref('food')
  foodstock.on("value",readstock)
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writestock(foods)
  pet.addImage(pet1);
  
  
}
  drawSprites();
  //add styles here

}
function readstock(data){
  foods=data.val()
}
function writestock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}

