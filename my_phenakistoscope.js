const SLICE_COUNT = 12;
const backgroundColor = "#ADD8E6"

const colors = ["red", "green", "blue", "yellow", "orange"];
const randomIndex = random(colors.length);

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("eye" , "png");
}

function setup_layers(pScope){
  new PLayer(null, "#f56e76");  //lets us draw the whole circle background, ignoring the boundaries


  var outerLayer = new PLayer(outerRing)


  var test2Layer = new PLayer(test2)
  test2Layer.mode(SWIRL(7))
  test2Layer.set_boundary(0,325)

  new PLayer(cutout)


  var eyeLayer = new PLayer(imageTest)
  eyeLayer.mode(RING);
  eyeLayer.set_boundary(0, 300);

}

function outerRing(x, y, animation, pScope){

}

function cutout(x,y,animation,pScope){
  strokeWeight(40)
  noFill()
  circle(0,0,700)

  fill("black")
  circle(0,0,250)
}

function cCircle(x,y,animation,pScope){
  fill("black")

  push()
  rotate(90 * animation.frame)
  let rectJump = 750 + (animation.wave(1) * 50)
  ellipse(150, 750, 100,100)
  pop()
}

function test3(x,y,animation,pScope){
  // let ballSize  = 100 + (animation.wave(1)* 20)
  push()
  scale(animation.frame*30);
  noFill()
  stroke(random(255), random(255), random(255))
  // fill(colors[1]);
  ellipse(0,0,30); 
  pop()

  

}

function imageTest(x,y,animation,pScope){
  push()
  scale(1.8)
  if(animation.frame == 0){
    pScope.draw_image("eye",x,y);
  }
  pop()
}

function test(x, y, animation, pScope){
  noStroke()
  fill("#FAE")
  ellipseSize = 80
  if(animation.frame<0.5){
    scale(3)
    ellipse(0, 0, ellipseSize*animation.frame);
  }else{
    ellipse(0, 0, ellipseSize/animation.frame);
  }
 
}

function test2(x, y, animation, pScope){
  scale(animation.frame*2);
  noStroke()
  fill("#e8dcdd")
  ellipseSize = 80
  ellipseHeight = 20

  ellipse(-50, 0, ellipseSize*animation.frame, 20);
  ellipse(50, 0, ellipseSize*animation.frame, 20);


  // if(animation.frame<1){

  // }else if(animation.frame>0.3 && animation.frame<0.7){
    // ellipse(0, 0, 20/animation.frame);

    // ellipse(0, 0, ellipseSize);
  // }

  // ellipseHeight += 10
}



function circles(x, y, animation, pScope){
  noStroke()

  fill("#8B5FBF")
  ellipse(x,y,1600)
  fill("#7B4FA8")
  ellipse(75,25,1400)
  fill("#6B3F91")
  ellipse(150,50,1200)
  fill("#5B2F7A")
  ellipse(225,75,1000)
  fill("#4B1F63")
  ellipse(300,100,800)
  fill("#3A41C6")
  ellipse(375,125,600)
  fill("#2D2D8A")
  ellipse(450,150,400)
  fill("#1F1F4D")
  ellipse(525,175,200)
  fill("white")
  // ellipse(600,200,circleWidth-800)

  // for(int i = 0; i<10; )
}






// background arc
function circleL(x, y, animation, pScope){
  noStroke()
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill("white")
  arc(x,y,1800,1500,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  // rect(-10-animation.wave()*50,-300,20,20) // .wave is a cosine wave btw

}



// var layer1 = new PLayer(circles);
// layer1.mode(SWIRL(1));
// layer1.set_boundary( 0, 800 );

// var layer2 = new PLayer(edge);
// layer2.mode(RING);
// layer2.set_boundary( 800, 1000 );

function circles_example(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  fill(196, 252, 255)
  
  let ballSize  = 100 + (animation.wave(1)* 20)
  ellipse(0, 0,ballSize); 
  

}

function edge_example(x, y, animation, pScope){
  fill("yellow")
push()
  rotate(90 * animation.frame)
  let rectJump = 750 + (animation.wave(1) * 50)
  ellipse(150, 750, 100,100)
pop()
} 



// var layer1 = new PLayer(Spin);
// layer1.mode(RING);
// layer1.set_boundary( 0, 300 );

// var effect = new PLayer(dots);
// effect.mode(SWIRL(10));
// effect.set_boundary( 0, 1000 );

function Spin(x, y, animation, pScope){
  
  // translate(50 * animation.frame, 0);
  // scale(animation.frame*2);
  // fill(196, 252, 255)
  
  // let ballSize  = 100 + (animation.wave(1)* 20)
  // let bouce = 50* animation.wave()
  // ellipse(150, 850+bouce ,ballSize); 
}

function dots(x, y, animation, pScope){
  fill("red")
    ellipse(0,0,10, 10)
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

  // function circles(x,y,animation,pScope){
  //   noStroke()
  //   scale(animation.frame*2);
  
  //   fill("#FFFF8F")
  //   ellipse(-50,0, 20, 20)
  //   ellipse(50,0, 20, 20)
  
  // }