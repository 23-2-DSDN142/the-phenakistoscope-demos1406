const SLICE_COUNT = 10;
const backgroundColor = "#ADD8E6"

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
  
  // var layer1 = new PLayer(faces);
  // layer1.mode(SWIRL(5));
  // layer1.set_boundary(200, 1000);

  // var layer2 = new PLayer(squares);
  // layer2.mode( RING );
  // layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(circles);
  layer3.mode(SWIRL(10));
  layer3.set_boundary(0, 1000);

  var layer4 = new PLayer(lines);
  layer4.mode(SWIRL(1));
  layer4.set_boundary(0, 0);

  var tLayer = new PLayer(topLayer);
  tLayer.mode(SWIRL(10));
  tLayer.set_boundary(1000, 3000);
  
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,600,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  ellipse(0,-300-animation.wave()*50,20) // .wave is a cosine wave btw

}

function circles(x,y,animation,pScope){
  noStroke()
  scale(animation.frame*2);

  fill("#FFFF8F")
  ellipse(-50,0, 20, 20)
  ellipse(50,0, 20, 20)

}

function lines(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  noStroke()
  // const background = 
  fill(backgroundColor)
  ellipse(-20,-20,840,840)
  // strokeWeight(1)
  fill(color(255,0,0))
  ellipse(-20,-20,800,800)
  // fill(220)
  // ellipse(-20,-20,800,800)

}

function topLayer(x,y,animation,pScope){
  noStroke()
  fill("#FFFF8F")
  ellipse(400,0,500,300)
  fill("white")
  ellipse(0,0,500,300)


}
