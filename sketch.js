var database;
var dogimg1, dogimg2, dog;
var position;

var feed, add;
var foodobject;

function preload()
{
  dogimg1 = loadImage("Images/Dog.png")
  dogimg2 = loadImage("Images/happy dog.png")
}

function setup() 
{
	createCanvas(700, 700);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food();
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1);
  dog.scale = 0.2;
 
  var dogfood = database.ref('Food');
  dogfood.on("value", readPosition, showError);

  feed = createButton("FEED MILK");
  feed.position(600,100);
  feed.mousePressed(FeedDog);

  add = createButton("ADD FOOD");
  add.position(400,100);
  add.mousePressed(AddFood);
} 

function draw()
{
 background(46,139,87);

 foodobject.display();
 drawSprites();
}

function readPosition(data)
{
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError()
{
  console.log("Error in writing to the database");
}

function writePosition(nazo)
{
  if(nazo>0){
    nazo = nazo - 1
  }
  else 
  {
    nazo = 0
  }
    database.ref('/').set({
                            'Food': nazo
                          })
}

function AddFood()
{
  position++
  database.ref('/').update({
                               Food:position
                           })
}

function FeedDog()
{
  dog.addImage(dogimg2)
  foodobject.updateFoodStock(foodobject.getFoodStock()-1)
  database.ref('/').update({
                              Food:foodobject.getFoodStock(),
                           })
}