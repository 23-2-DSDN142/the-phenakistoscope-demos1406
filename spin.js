const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("spin" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 10);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Spin);
  layer1.mode(RING);
  layer1.set_boundary( 0, 300 );
  
  var effect = new PLayer(dots);
  effect.mode(SWIRL(10));
  effect.set_boundary( 0, 1000 );
  

}

function Spin(x, y, animation, pScope){
  push()
  scale(3)
  if(animation.frame == 0){
  pScope.draw_image("spin",x,y);
  }
  pop()
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  // fill(196, 252, 255)
  
  // let ballSize  = 100 + (animation.wave(1)* 20)
  // let bouce = 50* animation.wave()
  // ellipse(150, 850+bouce ,ballSize); 
  

}
function dots(x, y, animation, pScope){
fill(225)
  ellipse(0,0,10, 10)
}