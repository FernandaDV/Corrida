var meninoAnimation,soloImage
var menino 
var solo
var paredeDireita
var paredeEsquerda

function preload(){
  //imagens pré-carregadas
  meninoAnimation=loadAnimation("Runner-1.png","Runner-2.png")
 soloImage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  solo = createSprite(200,200)
  solo.addImage(soloImage)
  menino = createSprite(125,300)
  menino.addAnimation("correndo",meninoAnimation)
  menino.scale=0.1
  solo.velocityY= 10
  paredeDireita = createSprite(370,200,40,400)
  paredeEsquerda = createSprite(30,200,40,400)
  paredeDireita.visible=false
  paredeEsquerda.visible=false
}

function draw() {
  background(0);
  drawSprites()
  menino.x=mouseX
menino.collide(paredeDireita);
menino.collide(paredeEsquerda);

 if(solo.y>400){
   solo.y=solo.width/2
 }

}
