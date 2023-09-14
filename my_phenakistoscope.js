const SLICE_COUNT = 10;

// colours
const backgroundColor = "#343642"
const blueCol = "#007bd9";
const tealCol = "#88ceb4";
const pinkCol = "#c95b74";
const whiteCol = "#e2e9d9";
const greyCol = "#626b72";


function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

}

function setup_layers(pScope){
  new PLayer(null, backgroundColor);  //lets us draw the whole circle background, ignoring the boundaries

  new PLayer(whiteShape)
  
  new PLayer(rings)

  var atomsLayer = new PLayer(atoms);
  atomsLayer.mode(RING);

  new PLayer(centerCircle)

  var bounceLayer = new PLayer(bounceC)
  bounceLayer.mode(RING)
  
  var midLayer = new PLayer(midCircles)
  midLayer.mode(RING)

  new PLayer(pinkCircles)

  new PLayer(outerCircle)
}

// white shape in the middle
function whiteShape(x,y,animation,pScope){
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

// just the circle in the middle
function centerCircle(x,y,animation,pScope){
  noStroke()
  fill(tealCol)
  ellipse(x,y,195)
}

// bouncing shapes around the central circle
function bounceC(x,y,animation,pScope){
  noStroke()
  rectMode(CENTER)
  fill(tealCol)
  rect(x, 170 + (animation.wave(1) * 15), 15, 60)
  fill(pinkCol)
  ellipse(x, 240 + (animation.wave(1) * 15), 35)
}

// atom rings
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

// center atoms (actually electrons)
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

// large circles over the atoms
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

// four pink circles in the middle
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

// electrons on the outer rings
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
