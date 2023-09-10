const SLICE_COUNT = 10;
const backgroundColor = "#343642"

const colors = ["#FEFDD9", "#FD8774", "#CA8763", "#93DAC8", "#349ABE", "#542826", "#331B28"]

function setup_pScope(pScope){
  pScope.output_mode(STATIC_DISK);
  // STATIC_FRAME  ANIMATED_FRAME  STATIC_DISK  ANIMATED_DISK
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("eye" , "png");
  pScope.load_image("leaf", "png")
}

function setup_layers(pScope){
  new PLayer(null, backgroundColor);  //lets us draw the whole circle background, ignoring the boundaries


  // var outerLayer = new PLayer(outerRing)

  // var circlesLayer = new PLayer(circles)
  // circlesLayer.mode(SWIRL(1))

  // var test2Layer = new PLayer(test2)
  // test2Layer.mode(SWIRL(7))
  // test2Layer.set_boundary(0,325)

  // var leafLayer = new PLayer(leaf)
  // leafLayer.mode(SWIRL(4))
  // leafLayer.set_boundary(550,2000)

  // new PLayer(cutout)

  // var eyeLayer = new PLayer(imageTest)
  // eyeLayer.mode(RING);
  // eyeLayer.set_boundary(0, 300);

  // var outerLayer = new PLayer(outerRing)
  // outerLayer.mode(SWIRL(1))

  new PLayer(a)

  var bLayer = new PLayer(b)
  bLayer.mode(RING)

  new PLayer(c)

  var dLayer = new PLayer(d);
  dLayer.mode(RING);
  // dLayer.set_boundary( 500, 1000 );

  // new PLayer(e)
}

function a(x,y,animation,pScope){
  noStroke()
  fill("#4faa90")
  ellipse(x,y,225)
  
}

function b(x,y,animation,pScope){
  rectMode(CENTER)
  fill("#4faa90")
  rect(x, 180 + (animation.wave(1) * 15), 10, 60)
  fill("#c95b74")
  ellipse(x, 250 + (animation.wave(1) * 15), 35)
}

function c(x,y,animation,pScope){
  noFill()
  stroke("#626b72")
  ellipse(x, y, 725)
  ellipse(x, y, 800)
  ellipse(x, y, 875)
  ellipse(x, y, 950)
  ellipse(x, y, 1025)
  // ellipse(x, y, 1000)
}

function d(x, y, animation, pScope){
  noStroke()

  push()
    rotate(90 * animation.frame)
    // let jump = 750 + (animation.wave(1) * 50)
    fill("#4faa90")
    ellipse(x, 440, 35)
    fill("#eaaf69")
    ellipse(150, 330, 35)
    fill("#c95b74")
    ellipse(300, 420, 35)
  pop()
} 

function e(x,y,animation,pScope){
  noStroke()
  fill("#4faa90")
  push()
    rotate(90 * animation.frame)
    ellipse(x,425,225)
  pop()
}

function colourTest(x, y, animation, pScope){
  const startColour = 0;
  const endColour = 0;
}










function outerRing(x, y, animation, pScope){
  noFill()
  strokeWeight(5)
  ellipse(x, 970, 50)
  ellipse(x, 920, 150)
  ellipse(x, 870, 250)
  ellipse(x, 820, 350)
  ellipse(x, 770, 450)

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

function leaf(x,y,animation,pScope){
  push()
  scale(0.15)
  pScope.draw_image("leaf",x,y)
  pop()
}

function imageTest(x,y,animation,pScope){
  push()
  scale(1)
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
  push()
  scale(1.2)
  fill("#8B5FBF")
  ellipse(x,y,1600)
  fill("#7B4FA8")
  ellipse(x,y,1400)
  fill("#6B3F91")
  ellipse(x,y,1200)
  fill("#5B2F7A")
  ellipse(x,y,1000)
  fill("#4B1F63")
  ellipse(x,y,800)
  fill("#3A41C6")
  ellipse(x,y,600)
  fill("#2D2D8A")
  ellipse(x,y,400)
  fill("#1F1F4D")
  ellipse(x,y,200)
  fill("white")
  // ellipse(600,200,circleWidth-800)

  // for(int i = 0; i<10; )
  pop()
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