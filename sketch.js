var wall,thickness;
var  bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="blue";
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
   return false;
}


function draw() {

  background(255,255,255);
  //if(wall.x-car.x<(car.width+wall.width)/2){
  //car.velocityX=0;
  //var deformation=0.5*weight*speed*speed/22500;
  //if(deformation>180){
   // car.shapeColor="red";

  //}
  //if(deformation<180 && deformation>100){
   // car.shapeColor="green";

  ///}
  //if(deformation<100){
    //car.shapeColor="orange";
    
 // }
//}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if (damage>10)
{
  wall.shapeColor="red";
}

if(damage<10)
{
  wall.shapeColor="green";
}
}
  drawSprites();
}