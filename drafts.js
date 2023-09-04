  // var layer1 = new PLayer(circles);
  // layer1.mode(SWIRL(1));
  // layer1.set_boundary(600, 2000);

  // new PLayer(circleL);

  // var layer1 = new PLayer(Spin);
  // layer1.mode(RING);
  // layer1.set_boundary( 0, 300 );
  
  // var effect = new PLayer(dots);
  // effect.mode(SWIRL(10));
  // effect.set_boundary( 0, 1000 );

  // var testLayer = new PLayer(test)
  // testLayer.mode(SWIRL(5))
  // testLayer.set_boundary(200,1000)

  var test2Layer = new PLayer(test2)
  test2Layer.mode(SWIRL(7))

  function circles(x, y, animation, pScope){
    noStroke()
  
    fill("#8B5FBF")
    ellipse(x,y,circleWidth)
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
    push()
    scale(3)
    // if(animation.frame == 0){
    pScope.draw_image("spin.png",x,y);
    // }
    pop()
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
        scale(2)
        noStroke()
        fill("#FAE")
        ellipseSize = 80
        ellipseHeight = 20
        // if(animation.frame<1){
          ellipse(0, 0, ellipseSize*animation.frame, 20);
      
        // }else if(animation.frame>0.3 && animation.frame<0.7){
          // ellipse(0, 0, 20/animation.frame);
      
          // ellipse(0, 0, ellipseSize);
        // }
      
        // ellipseHeight += 10
      }

