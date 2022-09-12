var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["213831f2-da1d-435d-b5bf-ecaf728d5cc8","9a5fe72d-b33b-4af4-84b0-ec96b5d2d93f"],"propsByKey":{"213831f2-da1d-435d-b5bf-ecaf728d5cc8":{"name":"corrida","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"oJl_qvgnWazc_y2PzjlpxD60l4pGr_YX","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/213831f2-da1d-435d-b5bf-ecaf728d5cc8.png"},"9a5fe72d-b33b-4af4-84b0-ec96b5d2d93f":{"name":"sonic","sourceUrl":null,"frameSize":{"x":920,"y":920},"frameCount":1,"looping":true,"frameDelay":12,"version":"Tua7xHMJtMvZzV7RMnflXXMVPp3ZTo89","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":920},"rootRelativePath":"assets/9a5fe72d-b33b-4af4-84b0-ec96b5d2d93f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sonic")
  sam.scale=0.03
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//adicione velocidade para fazer o carro se mover.

car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites

car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);


//Adicione a condição para fazer Sam se mover para a esquerda e para a direita

 if(keyDown("left")){
    sam.x = sam.x-5;
    
}
  
  if(keyDown("right")){
    sam.x = sam.x+5;
    
  }
  
   
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.

if(sam.isTouching(car1) || sam.isTouching(car2)
|| sam.isTouching(car3) || sam.isTouching(car4)){
 
life = life +1
sam.x = 20
sam.y = 1

}
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
