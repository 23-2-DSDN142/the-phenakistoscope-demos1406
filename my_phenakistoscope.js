const SLICE_COUNT = 14;
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

  var layer1 = new PLayer(centrePlanet)
  layer1.mode(RING)
  layer1.set_boundary(200,200)
  
  var layer2 = new PLayer(circles)
  layer2.mode(RING)
  // layer2.set_boundary(500,)
}

function centrePlanet(x, y, animation, pScope){
  
  // scale(animation.frame*2);

  ellipse(0,0,150,150); // draw head
  fill(30);
  ellipse(-20,-20,35,35); //draw eye

}

function circles(x, y, animation, pScope){
  fill("blue")
  // ellipse(0,-800,150,150)
  // ellipse(-800, -200-animation.wave()*2500, 150, 150);
  
}

