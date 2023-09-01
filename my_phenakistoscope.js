const SLICE_COUNT = 10;
const backgroundColor = "#ADD8E6"
const circleWidth = 800

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
  new PLayer(null, "white");  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(circles);
  layer1.mode(SWIRL(5));
  layer1.set_boundary(400, 2000);


  // var layer2 = new PLayer(squares);
  // layer2.mode(RING)
}

function circles(x, y, animation, pScope){
  noStroke()
  fill("#FFF638")
  ellipse(x,y,circleWidth)
  fill("#FFC038")
  ellipse(50,y,circleWidth)
  fill("#E07509")
  ellipse(100,y,circleWidth)
  fill("#E05109")
  ellipse(150,y,circleWidth)
  fill("#E02909")
  ellipse(150,y,circleWidth)
  fill("#A60000")
  ellipse(200,y,circleWidth)
}






// background arc
function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("white")
  arc(x,y,1500,1500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  // rect(-10-animation.wave()*50,-300,20,20) // .wave is a cosine wave btw

}


