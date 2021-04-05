var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png")
	fairyVoice = loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	
	fairy = createSprite(50,360,50,50);
	fairy.scale = 0.25
	fairy.addAnimation("running",fairyImg)
	fairyVoice.play()
	
	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  if( starBody.position.y>330) {
	Matter.Body.setStatic(starBody,true)
  }

  console.log(star.y);


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.position.x = fairy.position.x - 20
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.position.x = fairy.position.x + 20
	}
	
}
