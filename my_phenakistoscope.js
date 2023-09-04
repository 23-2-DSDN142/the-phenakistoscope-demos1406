const SLICE_COUNT = 12;
const backgroundColor = "#ADD8E6"
const circleWidth = 1500

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("eye" , "png");
}

function setup_layers(pScope){
  new PLayer(null, "black");  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(eye);
  layer1.mode(SWIRL(1));
  layer1.set_boundary(0, 300);
}

function eye(x, y, animation, pScope){
 

}




