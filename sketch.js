
var food
var happyDog
var database
var foodS
var foodStock

function preload()
{
dogHappy=loadImage("images/dogImg1.png")
dogSad=loadImage("images/dogImg.png")
bgImg=loadImage("images/bg.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  database.ref('food').on("value",readPosition)

  dog= createSprite(400,300,50,50)
  dog.addImage(dogSad)
  dog.scale=0.2
  Milk1=new Food()
   Milk1= getfeedTime()
}

function draw() {  
background(bgImg)
  drawSprites();
fill("black")
textSize(30)
text("Happy Pride Month",120,130)

fill("black")
textSize(30)
text("virtual pet",306,50)

text("fedtime;"+ Milk1.feedtime)
Milk1.buttons()
Milk1.milkImg()


if(food===0){
  dog.addImage(dogHappy)
  dog.scale=0.2

}
}
function readPosition(data){
  food=data.val()
}

function writeStock(data){
database.ref('/').set({
  food:data ,
  feedtime:hour ()
})
}