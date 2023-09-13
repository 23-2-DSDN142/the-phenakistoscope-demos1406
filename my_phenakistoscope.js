const SLICE_COUNT = 10;

const backgroundColor = "#1d2563"
const blueCol = "#98138c";
const tealCol = "#2aba9b";
const pinkCol = "#f62769";
const whiteCol = "#fef6fd";
const greyCol = "#555b99";


function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  frameRate(12)
}

function setup_layers(pScope){
  new PLayer(null, backgroundColor);  //lets us draw the whole circle background, ignoring the boundaries

  new PLayer(whiteColor)
  
  new PLayer(rings)

  var atomsLayer = new PLayer(atoms);
  atomsLayer.mode(RING);

  new PLayer(centerCircle)

  var bounceLayer = new PLayer(bounceC)
  bounceLayer.mode(RING)
  
  var midLayer = new PLayer(midCircles)
  midLayer.mode(RING)

  new PLayer(pinkCircles)

  var outerLayer = new PLayer(outerCircle)

  new PLayer(solidOuter)
}

function whiteColor(x,y,animation,pScope){
  noStroke()

  fill(whiteCol)
  ellipse(x,y,1480)

  fill(backgroundColor)
  ellipse(x,y,1200)

  push()
  rect(-1000, y, 2000)
  rotate(-25)
  rotate(-30)
  rect(-1000, y, 2000)
  pop()

  noFill()
  stroke(whiteCol)
  strokeWeight(5)
  ellipse(x,y,1480)
  ellipse(x,y,1200)

  noStroke()
  fill(whiteCol)
  ellipse(-670,y,140)
  rotate(35)
  ellipse(x, -670, 140)
}

function centerCircle(x,y,animation,pScope){
  noStroke()
  fill(tealCol)
  ellipse(x,y,195)
}

function bounceC(x,y,animation,pScope){
  noStroke()
  rectMode(CENTER)
  fill(tealCol)
  rect(x, 170 + (animation.wave(1) * 15), 15, 60)
  fill(pinkCol)
  ellipse(x, 240 + (animation.wave(1) * 15), 35)
}

function rings(x,y,animation,pScope){
  noFill()
  stroke(greyCol)
  ellipse(x, y, 725)
  ellipse(x, y, 800)
  ellipse(x, y, 875)
  ellipse(x, y, 950)
  ellipse(x, y, 1025)
  ellipse(x, y, 1650)
  ellipse(x, y, 1750)
  ellipse(x, y, 1850)
}

function atoms(x, y, animation, pScope){
  noStroke()

  push()
    rotate(90 * animation.frame)
    // let jump = 750 + (animation.wave(1) * 50)
    fill(tealCol)
    ellipse(x, 440, 35)
    fill(blueCol)
    ellipse(150, 330, 35)
    fill(pinkCol)
    ellipse(300, 420, 35)
  pop()
} 

function midCircles(x, y, animation, pScope){
  noStroke()
  const startColour1 = color(tealCol);
  const endColour1 = color(tealCol);
  endColour1.setAlpha(0);

  const startColour2 = color(blueCol);
  const endColour2 = color(blueCol);
  endColour2.setAlpha(0)

  let animatingColour1 = lerpColor(startColour1, endColour1, 10*animation.frame)
  let animatingColour2 = lerpColor(startColour2, endColour2, 10*animation.frame)

  push()
    rotate(90 * animation.frame)
    fill(animatingColour1)
    ellipse(-360, 250, 195)
    ellipse(x, -440, 195)
    fill(animatingColour2)
    ellipse(360, 250, 195)
  pop()
}

function pinkCircles(x,y,animation,pScope){
  pScope.set_direction(CCW)
  noStroke()
  let circleW = 140

  let startColour = color(pinkCol)
  let endColour = color(pinkCol)
  endColour.setAlpha(0)

  let animatingColour = lerpColor(startColour, endColour, 10*animation.frame)


  push()
    rotate(90 * animation.frame)
    fill(animatingColour)
    // ellipse(-72, 666, circleW)
    ellipse(72, 666, circleW)
    ellipse(215, 635, circleW)
    ellipse(345, 575, circleW)
    ellipse(460, 488, circleW)
  pop()
}

function outerCircle(x,y,animation,pScope){
  noFill()
  strokeWeight(5)
 
  push()
  rotate(90 * animation.frame)
  stroke(pinkCol)
  ellipse(-130, 815, 45)
  ellipse(130, 815, 45)
  
  stroke(blueCol)
  ellipse(x,875,50)

  stroke(tealCol)
  fill(tealCol)
  ellipse(-300, 875, 45)
  pop()
}

function solidOuter(x,y,animation,pScope){
  noStroke()
  fill(tealCol)
  // ellipse(-300, 875, 50)

}